<template>
  <div class="fast-scroll-wrapper"
       :class="{ triggered: topTriggered || bottomTriggered }"
       :style="{ transform: `translate3d(0, ${translate}px, 0)` }">
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
    height: 100%;
  }

  .scroll-container {
    height: 100%;
    overflow-y: auto;
  }

  .triggered {
    transition: .2s;
  }

  .fast-scroll-wrapper .state-text {
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
    computed: {
      topTriggered() {
        if (this.topState !== '' && this.topState !== 'pull') {
          return true;
        }
        return false;
      },
      bottomTriggered() {
        if (this.bottomState !== '' && this.bottomState !== 'pull') {
          return true;
        }
        return false;
      }
    },
    data() {
      return {
        scrollEl: null,
        startY: 0,
        currentY: 0,
        distance: 0,
        translate: 0,
        topText: '',
        bottomText: '',
        topState: '',
        bottomState: '',
        topAction,
        bottomAction
      };
    },
    methods: {
      topLoaded(loadState = 'done') {
        this.topAction.loaded(this, loadState);
      },

      bottomLoaded(loadState = 'done') {
        this.bottomAction.loaded(this, loadState);
      },

      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
      },

      handleTouchMove(event) {
        if (this.startY < this.scrollEl.getBoundingClientRect().top && this.startY > this.scrollEl.getBoundingClientRect().bottom) {
          return;
        }

        this.currentY = event.touches[0].clientY;
        this.distance = (this.currentY - this.startY) / this.distanceIndex;
        if (utils.getScrollTop(this.scrollEl) === 0 && this.distance > 0) {
          event.preventDefault();
          event.stopPropagation();
          this.topAction.pull(this);
          if (this.distance >= this.topConfig.triggerDistance) {
            this.topAction.trigger(this);
          }
        }
      },

      handleTouchEnd(event) {
        if (this.topState === 'trigger') {
          this.topAction.loading(this);
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
  }
</script>
