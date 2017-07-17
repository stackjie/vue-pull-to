<template>
  <div class="enhanced-scroller-wrapper"
       :style="{ transform: `translate3d(0, ${diff}px, 0)` }">
    <div v-if="topLoadMethod"
         :style="{ height: `${topBlockHeight}px`, marginTop: `${-topBlockHeight}px` }"
         class="action-block">
      <slot name="top-block"
            :state="topState"
            :state-text="topText">
        <p class="defalut-text">{{ topText }}</p>
      </slot>
    </div>
    <div class="scroll-container">
      <slot></slot>
    </div>
    <div v-if="bottomLoadMethod"
         :style="{ height: `${bottomBlockHeight}px`, marginBottom: `${-bottomBlockHeight}px` }"
         class="action-block">
      <slot name="bottom-block"
            :state="bottomState"
            :state-text="bottomText">
        <p class="defalut-text">{{ bottomText }}</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
  .enhanced-scroller-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .scroll-container {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .enhanced-scroller-wrapper .action-block {
    position: relative;
    width: 100%;
  }

  .defalut-text {
    height: 100%;
    line-height: 50px;
    text-align: center;
  }
</style>

<script type="text/babel">
  import utils from './utils';
  import { topAction, bottomAction } from './actions';
  import { TOP_DEFAULT_CONFIG, BOTTOM_DEFAULT_CONFIG } from './config';

  export default {
    name: 'enhanced-scroller',
    props: {
      distanceIndex: {
        type: Number,
        default: 2
      },
      enabledTopAction: {
        type: Boolean,
        default: false
      },
      enabledBottomAction: {
        type: Boolean,
        default: false
      },
      topBlockHeight: {
        type: Number,
        default: 50
      },
      bottomBlockHeight: {
        type: Number,
        default: 50
      },
      topLoadMethod: {
        type: Function
      },
      bottomLoadMethod: {
        type: Function
      },
      topConfig: {
        type: Object,
        default: () => {
          return {};
        },
        validator: (config) => {
          utils.extend(config, TOP_DEFAULT_CONFIG);
          return config;
        }
      },
      bottomConfig: {
        type: Object,
        default: () => {
          return {};
        },
        validator: (config) => {
          utils.extend(config, BOTTOM_DEFAULT_CONFIG);
          return config;
        }
      }
    },
    data() {
      return {
        scrollEl: null,
        startScrollTop: 0,
        startY: 0,
        currentY: 0,
        distance: 0,
        direction: 0,
        diff: 0,
        beforeDiff: 0,
        topText: '',
        bottomText: '',
        topState: '',
        bottomState: '',
        bottomReached: false,
        flagInfiniteScroll: false
      };
    },
    watch: {
      topState(val) {
        this.$emit('top-state-change', val);
      },
      bottomState(val) {
        this.$emit('bottom-state-change', val);
      }
    },
    methods: {
      scrollTo(y, duration = 200) {
        this.$el.style.transition = `${duration}ms`;
        this.diff = y;
        setTimeout(() => {
          this.$el.style.transition = '';
        }, duration);
      },

      checkBottomReached() {
        return this.scrollEl.scrollTop + this.scrollEl.offsetHeight >= this.scrollEl.scrollHeight;
      },

      topLoaded(loadState = 'done') {
        topAction.loaded(this, loadState);
      },

      bottomLoaded(loadState = 'done') {
        bottomAction.loaded(this, loadState);
      },

      throttle(fn, delay, mustRunDelay) {
        let timer = null;
        let tStart;
        return () => {
          const context = this;
          const args = arguments;
          let tCurrent = +new Date();
          clearTimeout(timer);

          if (!tStart) {
            tStart = tCurrent;
          }

          if (tCurrent - tStart >= mustRunDelay) {
            fn.apply(context, args);
            tStart = tCurrent;
          } else {
            timer = setTimeout(() => {
              fn.apply(context, args);
            }, delay);
          }
        };
      },

      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        this.beforeDiff = this.diff;
        this.startScrollTop = this.scrollEl.scrollTop;
        this.bottomReached = this.checkBottomReached();
      },

      handleTouchMove(event) {
        if (this.startY < this.scrollEl.getBoundingClientRect().top && this.startY > this.scrollEl.getBoundingClientRect().bottom) {
          return;
        }
        this.currentY = event.touches[0].clientY;
        this.distance = (this.currentY - this.startY) / this.distanceIndex + this.beforeDiff;
        this.direction = this.distance > 0 ? 'down' : 'up';

        if (this.startScrollTop === 0 && this.direction === 'down') {
          event.preventDefault();
          event.stopPropagation();
          this.diff = this.distance;
          this.$emit('top-pull', this.diff);

          if (typeof this.topLoadMethod === 'undefined') return;

          if (this.distance < this.topConfig.triggerDistance &&
            this.topState !== 'pull' && this.topState !== 'loading') {
            topAction.pull(this);
          } else if (this.distance >= this.topConfig.triggerDistance &&
            this.topState !== 'trigger' && this.topState !== 'loading') {
            topAction.trigger(this);
          }
        } else if (this.bottomReached && this.direction === 'up') {
          if (!this.flagInfiniteScroll) {
            this.flagInfiniteScroll = true;
            this.$emit('infinite-scroll');
          }

          event.preventDefault();
          event.stopPropagation();
          this.diff = this.distance;
          this.$emit('bottom-pull', this.diff);

          if (typeof this.bottomLoadMethod === 'undefined') return;

          if (Math.abs(this.distance) < this.bottomConfig.triggerDistance &&
            this.bottomState !== 'pull' && this.bottomState !== 'loading') {
            bottomAction.pull(this);
          } else if (Math.abs(this.distance) >= this.bottomConfig.triggerDistance &&
            this.bottomState !== 'trigger' && this.bottomState !== 'loading') {
            bottomAction.trigger(this);
          }
        }
      },

      handleTouchEnd() {
        if (this.diff !== 0) {
          if (this.topState === 'trigger') {
            topAction.loading(this);
            return;
          }

          if (this.bottomState === 'trigger') {
            bottomAction.loading(this);
            return;
          }

          // pull cancel
          if (this.diff !== 0) {
            this.scrollTo(0);
          }
        }

        // reset flagInfiniteScroll
        if (this.flagInfiniteScroll) {
          this.flagInfiniteScroll = !(this.distance >= 30);
        }
      },

      bindEvents() {
        this.scrollEl.addEventListener('touchstart', this.handleTouchStart);
        this.scrollEl.addEventListener('touchmove', this.handleTouchMove);
        this.scrollEl.addEventListener('touchend', this.handleTouchEnd);
      },

      init() {
        this.scrollEl = this.$el.querySelector('.scroll-container');
        this.bindEvents();
      }
    },
    mounted() {
      this.init();
    }
  };
</script>
