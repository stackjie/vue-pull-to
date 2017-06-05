<template>
  <div class="vue-superscroll-wapper">
    <div class="vue-superscroll-content" :class="{dropped: topDropped || bottomDropped}"
         :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }">
      <slot name="top">
        <p v-if="topMethod" class="status-text status-text-top">{{ topText }}</p>
      </slot>
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .vue-superscroll-wapper {
  }

  .vue-superscroll-wapper .dropped {
    transition: .2s;
  }

  .vue-superscroll-content {
    position: relative;
  }

  .vue-superscroll-content .status-text {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .status-text-top {
    margin-top: -50px;
  }

</style>

<script type="text/babel">
  import IScroll from 'iscroll'

  export default {
    name: 'vue-superscroll',
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
      isPullDown: {
        type: Boolean,
        default: true
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
      topStayDistance: {
        type: Number,
        default: 50
      },
      topTriggerDistance: {
        type: Number,
        default: 70
      },
      topMethod: {
        type: Function
      },
      isPullUp: {
        type: Boolean,
        default: true
      },
      bottomLoadedStayTime: {
        type: Number,
        default: 0
      },
      bottomStayDistance: {
        type: Number,
        default: 0
      },
      bottomTriggerDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
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
        bottomDropped: false,
        startY: 0,
        startScrollTop: 0,
        currentY: 0,
        topStatus: '',
        bottomStatus: ''
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

      onBottomLoaded() {
        this.bottomStatus = 'loaded';
        setTimeout(() => {
          this.translate = 0;
          setTimeout(() => {
            // reset status
            this.bottomStatus = 'pull';
            this.bottomDropped = false;
          }, 200);
        }, this.bottomLoadedStayTime);
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
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull';
          this.topDropped = false;
        }
        if (this.bottomStatus !== 'loading') {
          this.bottomStatus = 'pull';
          this.bottomDropped = false;
        }
      },

      handleTouchMove(event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return;
        }

        this.currentY = event.touches[0].clientY;
        let distance = (this.currentY - this.startY) / this.distanceIndex;

        if (this.getScrollTop(this.scrollEventTarget) === 0 && distance > 0 && this.isPullDown === true) {
          event.preventDefault();
          event.stopPropagation();
          if (distance >= this.topTriggerDistance) {
            this.topStatus = 'drop';
          }
          this.translate = distance;
        } else if (this.checkBottomReached() && distance < 0 && this.isPullUp === true) {
          event.preventDefault();
          event.stopPropagation();
          if (distance >= this.bottomTriggerDistance) {
            this.bottomStatus = 'drop';
          }
          this.translate = distance;
        }
      },

      handleTouchEnd() {
        if (this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true;
          if (this.topStatus === 'drop') {
            this.translate = this.topStayDistance;
            this.topStatus = 'loading';
            // 判断topMethod是否为function，如果是执行topMethod否则将translate距离置空
            typeof this.topMethod === 'function'
              ? this.topMethod()
              : this.translate = 0;
          } else {
            this.translate = 0;
          }
        } else if (this.checkBottomReached() && this.translate < 0) {
          this.bottomDropped = true;
          if (this.bottomStatus === 'drop') {
            this.translate = this.bottomStayDistance;
            this.bottomStatus = 'loading';
            // 判断bottomMethod是否为function，如果是执行topMethod否则将translate距离置空
            typeof this.bottomMethod === 'function'
              ? this.bottomMethod()
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
