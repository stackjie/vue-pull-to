<template>
  <div class="vue-pull-to-wrapper"
       :style="{ transform: `translate3d(0, ${diff}px, 0)` }">
    <div v-if="topLoadMethod"
         :style="{ height: `${topBlockHeight}px`, marginTop: `${-topBlockHeight}px` }"
         class="action-block">
      <slot name="top-block"
            :state="state"
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
            :state="state"
            :state-text="bottomText">
        <p class="defalut-text">{{ bottomText }}</p>
      </slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import {extend, throttle, throttleRunDelay} from './utils';
  import {TOP_DEFAULT_CONFIG, BOTTOM_DEFAULT_CONFIG} from './config';

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
      topLoadMethod: {
        type: Function
      },
      bottomLoadMethod: {
        type: Function
      },
      isThrottle: {
        type: Boolean,
        default: true
      },
      topConfig: {
        type: Object,
        default: () => {
          return TOP_DEFAULT_CONFIG;
        },
        validator: (config) => {
          extend(config, TOP_DEFAULT_CONFIG);
          return config;
        }
      },
      bottomConfig: {
        type: Object,
        default: () => {
          return BOTTOM_DEFAULT_CONFIG;
        },
        validator: (config) => {
          extend(config, BOTTOM_DEFAULT_CONFIG);
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
        state: '',
        bottomReached: false
      };
    },
    watch: {
      state(val) {
        if (this.direction === 'down') {
          this.$emit('top-state-change', val);
        } else {
          this.$emit('bottom-state-change', val);
        }
      }
    },
    methods: {
      actionPull() {
        this.state = 'pull';
        this.direction === 'down'
          ? this.topText = this.topConfig.pullText
          : this.bottomText = this.bottomConfig.pullText;
      },
      actionTrigger() {
        this.state = 'trigger';
        this.direction === 'down'
          ? this.topText = this.topConfig.triggerText
          : this.bottomText = this.bottomConfig.triggerText;
      },
      actionLoading() {
        this.state = 'loading';
        if (this.direction === 'down') {
          this.topText = this.topConfig.loadingText;
          /* eslint-disable no-useless-call */
          this.topLoadMethod.call(this, this.actionLoaded);
          this.scrollTo(this.topConfig.stayDistance);
        } else {
          this.bottomText = this.bottomConfig.loadingText;
          this.bottomLoadMethod.call(this, this.actionLoaded);
          this.scrollTo(-this.bottomConfig.stayDistance);
        }
      },
      actionLoaded(loadState = 'done') {
        this.state = `loaded-${loadState}`;
        let loadedStayTime;
        if (this.direction === 'down') {
          this.topText = loadState === 'done'
            ? this.topConfig.doneText
            : this.topConfig.failText;
          loadedStayTime = this.topConfig.loadedStayTime;
        } else {
          this.bottomText = loadState === 'done'
            ? this.bottomConfig.doneText
            : this.bottomConfig.failText;
          loadedStayTime = this.bottomConfig.loadedStayTime;
        }
        setTimeout(() => {
          this.scrollTo(0);

          // reset state
          setTimeout(() => {
            this.state = '';
          }, 200);
        }, loadedStayTime);
      },
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
          this.isThrottle ? this.throttleEmitTopPull() : this.$emit('top-pull', this.diff);

          if (typeof this.topLoadMethod !== 'function') return;

          if (this.distance < this.topConfig.triggerDistance &&
            this.state !== 'pull' && this.state !== 'loading') {
            this.actionPull();
          } else if (this.distance >= this.topConfig.triggerDistance &&
            this.state !== 'trigger' && this.state !== 'loading') {
            this.actionTrigger();
          }
        } else if (this.bottomReached && this.direction === 'up') {
          event.preventDefault();
          event.stopPropagation();
          this.diff = this.distance;
          this.isThrottle ? this.throttleEmitBottomPull() : this.$emit('bottom-pull', this.diff);

          if (typeof this.bottomLoadMethod !== 'function') return;

          if (Math.abs(this.distance) < this.bottomConfig.triggerDistance &&
            this.state !== 'pull' && this.state !== 'loading') {
            this.actionPull();
          } else if (Math.abs(this.distance) >= this.bottomConfig.triggerDistance &&
            this.state !== 'trigger' && this.state !== 'loading') {
            this.actionTrigger();
          }
        }
      },

      handleTouchEnd() {
        if (this.diff !== 0) {
          if (this.state === 'trigger') {
            this.actionLoading();
            return;
          }

          if (this.state === 'trigger') {
            this.actionLoading();
            return;
          }

          // pull cancel
          if (this.diff !== 0) {
            this.scrollTo(0);
          }
        }
      },

      handleScroll() {
        if (this.checkBottomReached()) {
          this.$emit('infinite-scroll');
        }
      },

      throttleEmitTopPull() {
        this.$emit('top-pull', this.diff);
      },

      throttleEmitBottomPull() {
        this.$emit('bottom-pull', this.diff);
      },

      bindEvents() {
        this.scrollEl.addEventListener('touchstart', this.handleTouchStart);
        this.scrollEl.addEventListener('touchmove', this.handleTouchMove);
        this.scrollEl.addEventListener('touchend', this.handleTouchEnd);
        this.scrollEl.addEventListener('scroll', throttle(this.handleScroll, 500));
      },

      init() {
        this.throttleEmitTopPull = throttleRunDelay(this.throttleEmitTopPull, 200, 300);
        this.throttleEmitBottomPull = throttleRunDelay(this.throttleEmitBottomPull, 200, 300);
        this.scrollEl = this.$el.querySelector('.scroll-container');
        this.bindEvents();
      }
    },
    mounted() {
      this.init();
    }
  };
</script>

<style scoped>
  .vue-pull-to-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .scroll-container {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .vue-pull-to-wrapper .action-block {
    position: relative;
    width: 100%;
  }

  .defalut-text {
    height: 100%;
    line-height: 50px;
    text-align: center;
  }
</style>
