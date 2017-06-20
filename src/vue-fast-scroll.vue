<template>
  <div class="fast-scroll-warpper"
       :class="{ triggered: topTriggered || bottomTriggered }"
       :style="{ transform: `translate3d(0, ${distance}px, 0)` }">
    <slot name="top from topText">
      <p class="state-text state-text-top">{{ topText }}</p>
    </slot>
    <slot></slot>
    <slot name="bottom from bottomText">
      <p class="state-text state-text-bottom">{{ bottomText }}</p>
    </slot>
  </div>
</template>

<style scoped>
  .fast-scroll-warpper {
    height: 100%;
    overflow-y: scroll;
  }

  .triggered {
    transition: .2s !important;
  }

  .fast-scroll-wapper .state-text {
    position: absolute;
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
  import { topState, bottomState } from './state';

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
        startY: '',
        distance: 0
      };
    },
    methods: {
      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
      },

      handleTouchMove(event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return;
        }

        this.currentY = event.touches[0].clientY;
        if (this.getScrollTop(this.$el) === 0 && this.distance > 0) {
          event.preventDefault();
          event.stopPropagation();
//          if (distance >= this.topDistance) {
//            this.topStatus = 'drop';
//          }
          this.distance = (this.currentY - this.startY) / this.distanceIndex;
        }
      },

      handleTouchEnd(event) {
      },

      bindEvents() {
        this.$el.addEventListener('touchstart', this.handleTouchStart);
        this.$el.addEventListener('touchmove', this.handleTouchMove);
        this.$el.addEventListener('touchend', this.handleTouchEnd);
      }
    },
    mounted() {
      this.bindEvents();
    }
  }
</script>
