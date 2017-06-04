<template>
  <div class="vue-pulltorefresh-wapper">
    <div class="vue-pulltorefresh-content" :class="{dropped: topDropped}"
         :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }">
      <slot name="top">
        <p v-if="topMethod" class="status-text status-text-top">{{ topText }}</p>
      </slot>
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .vue-pulltorefresh-wapper {
  }

  .vue-pulltorefresh-wapper .dropped {
    transition: .2s;
  }

  .vue-pulltorefresh-content {
    position: relative;
  }

  .vue-pulltorefresh-content .status-text {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .status-text-top {
    margin-top: -50px;
  }

</style>

<script type="text/babel">
  export default {
    name: 'vue-pulltorefresh',
    props: {
      maxDistance: {
        type: Number,
        default: 0
      },
      autoFill: {
        type: Boolean,
        default: true
      },
      distanceIndex: {
        type: Number,
        default: 2
      },
      topPullText: {
        type: String,
        default: '下拉刷新'
      },
      topDropText: {
        type: String,
        default: '释放更新'
      },
      topLoadingText: {
        type: String,
        default: '加载中...'
      },
      topLoadedText: {
        type: String,
        default: '加载完成'
      },
      topLoadedStayTime: {
        type: Number,
        default: 400
      },
      topDistance: {
        type: Number,
        default: 70
      },
      topMethod: {
        type: Function
      }
    },
    data() {
      return {
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        topText: '',
        topDropped: false,
        startY: 0,
        startScrollTop: 0,
        currentY: 0,
        topStatus: ''
      };
    },
    watch: {
      topStatus(val) {
        this.$emit('top-status-change', val);
        switch (val) {
          case 'pull':
            this.topText = this.topPullText;
            break;
          case 'drop':
            this.topText = this.topDropText;
            break;
          case 'loading':
            this.topText = this.topLoadingText;
            break;
          case 'loaded':
            this.topText = this.topLoadedText;
            break;
        }
      }
    },
    methods: {
      onTopLoaded() {
        this.topStatus = 'loaded';
        setTimeout(() => {
          this.translate = 0;
          setTimeout(() => {
            // reset status
            this.topStatus = 'pull';
            this.topDropped = false;
          }, 200);
        }, this.topLoadedStayTime);
      },

      getScrollTop(element) {
        if (element) {
          return element.scrollTop;
        } else {
          return document.documentElement.scrollTop;
        }
      },

      getVisibleHeight(element) {
        if (element) {
          return element.offsetHeight;
        } else {
          return document.documentElement.offsetHeight;
        }
      },

      getScrollHeight(element) {
        if (element) {
          return element.scrollHeight;
        } else {
          return document.documentElement.scrollHeight;
        }
      },

      getScrollEventTarget(element) {
        let currentNode = element;
        while (currentNode && currentNode.tagName !== 'HTML' &&
        currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
          }
          currentNode = currentNode.parentNode;
        }
        return window;
      },

      checkBottomReached() {
        if (this.scrollEventTarget === window) {
          return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
        } else {
          return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom + 1;
        }
      },

      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull';
          this.topDropped = false;
        }
      },

      handleTouchMove(event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return;
        }

        this.currentY = event.touches[0].clientY;
        let distance = (this.currentY - this.startY) / this.distanceIndex;

        // 当上拉的时候通过判断props中的topMethod和bottomMethod是否传入回调函数来检测是否要改变位置及状态
        if (this.getScrollTop(this.scrollEventTarget) === 0 && distance > 0 && typeof this.topMethod === 'function') {
          event.preventDefault();
          event.stopPropagation();
          if (distance >= this.topDistance) {
            this.topStatus = 'drop';
          }
          this.translate = distance;
        }
      },

      handleTouchEnd() {
        if (this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true;
          if (this.topStatus === 'drop') {
            this.translate = 50;
            this.topStatus = 'loading';
            // 判断topMethod是否为function，如果是执行topMethod否则将translate距离置空
            typeof this.topMethod === 'function'
              ? this.topMethod()
              : this.translate = 0;
          } else {
            this.translate = 0;
          }
        }
      },

      bindEvents() {
        this.$el.addEventListener('touchstart', this.handleTouchStart);
        this.$el.addEventListener('touchmove', this.handleTouchMove);
        this.$el.addEventListener('touchend', this.handleTouchEnd);
      }
    },
    mounted() {
      this.bindEvents();
      this.topText = this.topPullText;
      this.scrollEventTarget = this.getScrollEventTarget(this.$el);
    }
  };
</script>
