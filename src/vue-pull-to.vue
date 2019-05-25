<template>
  <div class="vue-pull-to-wrapper"
       :style="{ height: wrapperHeight }"
       @transitionend="handleTransitionEnd">
    <div v-if="topLoadMethod"
         :style="{ height: `${topBlockHeight}px`, marginTop: `${-topBlockHeight}px` }"
         class="action-block action-block-top"
         ref="action-block-top">
      <slot name="top-block"
            :state="state"
            :state-text="topText"
            :trigger-distance="_topConfig.triggerDistance"
            :diff="diff">
        <p class="default-text">{{ topText }}</p>
      </slot>
    </div>
    <div ref="scroll-container" class="scroll-container">
      <slot></slot>
      <div v-if="bottomLoadMethod && isBottomKeepScroll"
           class="bottom-filler" ref="bottom-filler"></div>
    </div>
    <div v-if="bottomLoadMethod"
         :style="{ height: `${bottomBlockHeight}px`, marginBottom: `${-bottomBlockHeight}px` }"
         class="action-block action-block-bottom"
         ref="action-block-bottom">
      <slot name="bottom-block"
            :state="state"
            :state-text="bottomText"
            :trigger-distance="_bottomConfig.triggerDistance"
            :diff="diff">
        <p class="default-text">{{ bottomText }}</p>
      </slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import { throttle, create, PASSIVE_OPTS } from './utils';
  import { TOP_DEFAULT_CONFIG, BOTTOM_DEFAULT_CONFIG } from './config';

  const LOADED_PREFIX = 'loaded-';

  function setTransition(style, prop, dur, delay) {
    style.setProperty('transition-property', prop || '');
    style.setProperty('transition-duration', dur || '');
    style.setProperty('transition-delay', delay || '');
  }

  function isLoadedState(state) {
    /* istanbul ignore if */
    if (typeof state !== 'string') {
      return false;
    }
    return state.startsWith(LOADED_PREFIX);
  }

  function getMessageByState(config, state) {
    switch (state) {
      case 'pull': return config.pullText;
      case 'trigger': return config.triggerText;
      case 'loading': return config.loadingText;
      case 'loaded-done': return config.doneText;
      default:
        return isLoadedState(state) ? config.failText : '';
    }
  }

  export default {
    name: 'vue-pull-to',
    props: {
      distanceIndex: {
        type: Number,
        default: 2
      },
      topBlockHeight: {
        type: Number,
        default: 50
      },
      bottomBlockHeight: {
        type: Number,
        default: 50
      },
      wrapperHeight: {
        type: String,
        default: '100%'
      },
      topLoadMethod: Function,
      bottomLoadMethod: Function,
      isThrottleTopPull: {
        type: Boolean,
        default: true
      },
      isThrottleBottomPull: {
        type: Boolean,
        default: true
      },
      isThrottleScroll: {
        type: Boolean,
        default: true
      },
      isTouchSensitive: {
        type: Boolean,
        default: true
      },
      isScrollSensitive: {
        type: Boolean,
        default: true
      },
      isTopBounce: {
        type: Boolean,
        default: true
      },
      isBottomBounce: {
        type: Boolean,
        default: true
      },
      isBottomKeepScroll: Boolean,
      topConfig: Object,
      bottomConfig: Object
    },
    data() {
      return {
        startY: null,
        startX: null,
        distance: 0,
        diff: 0,
        beforeDiff: 0,
        state: '',
        shouldPullDown: false,
        shouldPullUp: false,
        shouldPassThroughEvent: false,
        throttleEmitTopPull: null,
        throttleEmitBottomPull: null,
        throttleEmitScroll: null,
        throttleOnInfiniteScroll: null
      };
    },
    computed: {
      _topConfig() {
        return create(TOP_DEFAULT_CONFIG, this.topConfig);
      },
      _bottomConfig() {
        return create(BOTTOM_DEFAULT_CONFIG, this.bottomConfig);
      },
      // compatibility
      direction: {
        cache: false,
        get() {
          const d = this.distance;
          return d > 0 ? 'down' : d < 0 ? 'up' : 0;
        }
      },
      // This is fine since Vue collects reactive dependencies
      // every time computed (watched) properties are re-evaluated.
      topText() {
        if (this.distance > 0) {
          return getMessageByState(this._topConfig, this.state);
        }
        return '';
      },
      bottomText() {
        if (this.distance < 0) {
          return getMessageByState(this._bottomConfig, this.state);
        }
        return '';
      }
    },
    watch: {
      state(val) {
        const dist = this.distance;
        const name = dist > 0 ? 'top-state-change' : 'bottom-state-change';
        this.$emit(name, val);
        if (typeof val !== 'string' || val === '') {
          // do nothing
        } else if (val === 'loading') {
          const actionLoaded = (loadState = 'done') => {
            const s = LOADED_PREFIX + loadState;
            this.state = s;
            val = null;
          };
          // not a method but actually a user supplied value
          if (dist > 0) {
            this.topLoadMethod(actionLoaded);
          } else {
            this.bottomLoadMethod(actionLoaded);
          }
          if (val === null) {
            return; // intermediate value change, do nothing
          }
          if (dist > 0) {
            this.scrollTo(this._topConfig.stayDistance);
          } else {
            this.scrollTo(-this._bottomConfig.stayDistance);
          }
        } else if (isLoadedState(val) && this.startY == null) {
          const c = dist > 0 ? this._topConfig : this._bottomConfig;
          const f = this.$refs['bottom-filler'];
          if (f && !(dist > 0)) {
            const a = this.$refs['action-block-bottom'];
            const b = this.diff;
            if (a != null && b < 0) {
              this.scrollTo(0, 0);
              const bs = a.style;
              bs.setProperty('transform', `translate(0, ${b}px)`);
              const fs = f.style;
              fs.setProperty('height', `${-b}px`);
              this.$refs['scroll-container'].scrollTop -= b;

              const tdur = '200ms';
              const tdelay = `${c.loadedStayTime}ms`;
              setTransition(bs, 'transform', tdur, tdelay);
              setTransition(fs, 'height', tdur, tdelay);
              bs.setProperty('transform', 'translate(0, 0)');
              fs.setProperty('height', '0px');
              return;
            }
          }
          this.scrollTo(0, 200, c.loadedStayTime);
        }
      },
      isTouchSensitive: 'updateTouchSensitivity',
      isScrollSensitive: 'updateScrollSensitivity'
    },
    methods: {
      scrollTo(y, duration = 200, delay = 0) {
        this.diff = y;

        const el = this.$refs['action-block-bottom'];
        if (el != null) {
          const bs = el.style;
          if (bs.getPropertyValue('transform')) {
            setTransition(bs, 'none');
            bs.setProperty('transform', '');
          }
        }

        const fl = this.$refs['bottom-filler'];
        if (fl != null) {
          const fs = fl.style;
          if (fs.getPropertyValue('height')) {
            setTransition(fs, 'none');
            fs.setProperty('height', '');
          }
        }

        const sd = this.$el.style;
        setTransition(sd,
          duration > 0 || delay > 0 ? 'transform' : 'none',
          `${duration}ms`, `${delay}ms`);
        sd.setProperty('transform', `translate(0, ${y}px)`);
      },

      checkBottomReached() {
        const el = this.$refs['scroll-container'];
        return el.scrollTop + el.offsetHeight + 1 >= el.scrollHeight;
      },

      handleTouchStart(event) {
        [{ clientY: this.startY, clientX: this.startX }] = event.touches;
        this.beforeDiff = this.diff;
        const sc = this.$refs['scroll-container'];
        this.shouldPullDown =
          this.isTopBounce && sc.scrollTop === 0;
        this.shouldPullUp =
          this.isBottomBounce && this.checkBottomReached();
        this.shouldPassThroughEvent = false;
      },

      handleTouchMove(event) {
        const [{ clientY, clientX }] = event.touches;
        const { startY, startX } = this;
        let dist = (clientY - startY) / this.distanceIndex + this.beforeDiff;
        const s0 = this.state;

        if (s0 === 'loading' && !(dist * this.distance > 0)) {
          // do not permit distance sign to change, instead put small value
          // avoid denormal numbers (Number.MIN_VALUE) for performance
          dist = dist < 0 ? 3e-308 : -3e-308;
        }
        this.distance = dist;
        // judge pan gesture direction, if not vertical just return
        // make sure that if some components embeded can handle horizontal pan gesture in here
        let pe = this.shouldPassThroughEvent;
        if (Math.abs(clientY - startY) < Math.abs(clientX - startX)) {
          this.shouldPassThroughEvent = pe = true;
        }

        if (!(dist > 0 ? this.shouldPullDown : this.shouldPullUp)) {
          this.scrollTo(0, 0);
          return;
        }

        event.preventDefault();
        if (!pe) {
          event.stopPropagation();
        }
        this.scrollTo(dist, 0);

        let c;
        if (dist > 0) {
          this.isThrottleTopPull ? this.throttleEmitTopPull(this.diff) : this.$emit('top-pull', this.diff);
          if (typeof this.topLoadMethod !== 'function') return;
          c = this._topConfig;
        } else {
          this.isThrottleBottomPull ? this.throttleEmitBottomPull(this.diff) : this.$emit('bottom-pull', this.diff);
          if (typeof this.bottomLoadMethod !== 'function') return;
          c = this._bottomConfig;
        }
        const s = Math.abs(dist) < c.triggerDistance ? 'pull' : 'trigger';
        if (s0 !== 'loading' && s0 !== s) this.state = s;
      },

      handleTouchEnd() {
        this.startX = this.startY = null;
        if (!this.diff) return;
        // trigger or pull cancel
        switch (this.state) {
          case 'trigger':
            this.state = 'loading';
            break;
          case 'loading':
            this.scrollTo(this.beforeDiff);
            break;
          default:
            this.state = '';
            this.scrollTo(0);
            break;
        }
      },

      handleScroll(event) {
        this.isThrottleScroll ? this.throttleEmitScroll(event) : this.$emit('scroll', event);
        this.throttleOnInfiniteScroll();
      },

      handleTransitionEnd(event) {
        if (isLoadedState(this.state)) {
          this.state = '';
        }
      },

      bindEvents() {
        if (this.isTouchSensitive) {
          this.updateTouchSensitivity(true);
        }
        if (this.isScrollSensitive) {
          this.updateScrollSensitivity(true);
        }
      },

      updateTouchSensitivity(flag) {
        const el = this.$refs['scroll-container'];
        if (flag) {
          el.addEventListener('touchstart', this.handleTouchStart, PASSIVE_OPTS);
          el.addEventListener('touchmove', this.handleTouchMove);
          el.addEventListener('touchend', this.handleTouchEnd, PASSIVE_OPTS);
        } else {
          el.removeEventListener('touchstart', this.handleTouchStart);
          el.removeEventListener('touchmove', this.handleTouchMove);
          el.removeEventListener('touchend', this.handleTouchEnd);
        }
      },

      updateScrollSensitivity(flag) {
        const el = this.$refs['scroll-container'];
        if (flag) {
          el.addEventListener('scroll', this.handleScroll, PASSIVE_OPTS);
        } else {
          el.removeEventListener('scroll', this.handleScroll);
        }
      },

      createThrottleMethods() {
        const throttleEmit = (delay, mustRunDelay = 0, eventName) => {
          return throttle(this.$emit.bind(this, eventName), delay, mustRunDelay);
        };

        this.throttleEmitTopPull = throttleEmit(200, 300, 'top-pull');
        this.throttleEmitBottomPull = throttleEmit(200, 300, 'bottom-pull');
        this.throttleEmitScroll = throttleEmit(100, 150, 'scroll');
        this.throttleOnInfiniteScroll = throttle(() => {
          if (this.checkBottomReached()) {
            this.$emit('infinite-scroll');
          }
        }, 400);
      },

      init() {
        this.createThrottleMethods();
        this.bindEvents();
      }
    },
    mounted() {
      this.init();
    }
  };
</script>

<style scoped>
  .vue-pull-to-wrapper,
  .vue-pull-to-wrapper > .scroll-container {
    padding: 0;
    border: 0 none;
    margin: 0;
  }

  .vue-pull-to-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .vue-pull-to-wrapper > .scroll-container {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .vue-pull-to-wrapper > .scroll-container > .bottom-filler {
    height: 0px;
  }

  .vue-pull-to-wrapper > .action-block {
    position: relative;
    width: 100%;
  }

  .vue-pull-to-wrapper > .action-block > .default-text {
    height: 100%;
    line-height: 50px;
    text-align: center;
  }

  .vue-pull-to-wrapper,
  .vue-pull-to-wrapper > .action-block-bottom,
  .vue-pull-to-wrapper > .scroll-container > .bottom-fill {
    transition-timing-function: cubic-bezier(0, 0, 0, 1);
  }
</style>
