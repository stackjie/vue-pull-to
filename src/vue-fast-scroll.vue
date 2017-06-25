<template>
  <div class="fast-scroll-wrapper"
       :class="{ 'active-transition': activeTransition }"
       :style="{ transform: `translate3d(0, ${diff}px, 0)` }">
    <slot name="top from topText">
      <p class="state-text state-text-top">{{ topText }}</p>
    </slot>
    <div class="scroll-container">
      <slot></slot>
    </div>
    <slot name="bottom from bottomText">
      <p class="state-text state-text-bottom">{{ bottomText }}</p>
    </slot>
  </div>
</template>

<style scoped>
  .fast-scroll-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .scroll-container {
    flex: 1;
    overflow-y: auto;
  }

  .active-transition {
    transition: .2s;
  }

  .fast-scroll-wrapper .state-text {
    /*position: absolute;*/
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .state-text-top {
    margin-top: -50px;
  }

  .state-text-bottom {
    margin-bottom: -50px;
  }
</style>

<script type="text/babel">
  import utils from './utils';
  import {topAction, bottomAction} from './actions';

  const TOP_DEFAULT_CONFIG = {
    pullText: '下拉刷新',
    triggerText: '释放更新',
    loadingText: '加载中...',
    doneText: '加载完成',
    failText: '加载失败',
    loadedStayTime: 400,
    stayDistance: 50,
    triggerDistance: 70
  };

  const BOTTOM_DEFAULT_CONFIG = {
    pullText: '上拉加载',
    triggerText: '释放更新',
    loadingText: '加载中...',
    doneText: '加载完成',
    failText: '加载失败',
    loadedStayTime: 400,
    stayDistance: 50,
    triggerDistance: 70
  };

  export default {
    name: 'fast-scroll',
    props: {
      distanceIndex: {
        type: Number,
        default: 2
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
        startY: 0,
        currentY: 0,
        distance: 0,
        diff: 0,
        beforeDiff: 0,
        topText: '',
        bottomText: '',
        topState: '',
        bottomState: '',
        activeTransition: false,
        topAction,
        bottomAction
      };
    },
    methods: {
      scrollTo(y) {
        this.activeTransition = true;
        this.diff = y;
        setTimeout(() => {
          this.activeTransition = false;
        }, 200)
      },

      checkBottomReached() {
        console.log(this.scrollEl.scrollTop + this.scrollEl.offsetHeight);
        return this.scrollEl.scrollTop + this.scrollEl.offsetHeight >= this.scrollEl.scrollHeight;
      },

      topLoaded(loadState = 'done') {
        this.topAction.loaded(this, loadState);
      },

      bottomLoaded(loadState = 'done') {
        this.bottomAction.loaded(this, loadState);
      },

      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        this.beforeDiff = this.diff;
      },

      handleTouchMove(event) {
        if (this.startY < this.scrollEl.getBoundingClientRect().top && this.startY > this.scrollEl.getBoundingClientRect().bottom) {
          return;
        }

        this.currentY = event.touches[0].clientY;
        this.distance = (this.currentY - this.startY) / this.distanceIndex;
        if (this.scrollEl.scrollTop === 0) {
          if (this.diff > 0) {
            event.preventDefault();
            event.stopPropagation();
          }

          this.diff = this.distance + this.beforeDiff;

          if (this.distance < this.topConfig.triggerDistance && this.topState !== 'pull' && this.topState !== 'loading') {
            this.topAction.pull(this);
            console.log('pull');
          } else if (this.distance >= this.topConfig.triggerDistance && this.topState !== 'trigger' && this.topState !== 'loading') {
            this.topAction.trigger(this);
            console.log('trigger');
          }
        }
//        else if (this.checkBottomReached()) {
//          if (this.diff > 0) {
//            event.preventDefault();
//            event.stopPropagation();
//          }
//
//          this.diff = this.distance + this.beforeDiff;
//
//          if (Math.abs(this.distance) < this.bottomConfig.triggerDistance && this.bottomState !== 'pull' && this.bottomState !== 'loading') {
//            this.bottomAction.pull(this);
//            console.log('pull');
//          } else if (Math.abs(this.distance) >= this.bottomConfig.triggerDistance && this.bottomState !== 'trigger' && this.bottomState !== 'loading') {
//            this.bottomAction.trigger(this);
//            console.log('trigger');
//          }
//        }
      },

      handleTouchEnd() {
        if (this.topState === 'trigger') {
          this.topAction.loading(this);
        } else if (this.topState !== 'trigger') {
          this.topAction.pullCancel(this);
        }
//        if (this.bottomState === 'trigger') {
//          this.bottomAction.loading(this);
//        } else if (this.bottomState !== 'trigger') {
//          this.bottomAction.pullCancel(this);
//        }
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
  }
</script>
