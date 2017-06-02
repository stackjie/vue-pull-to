<template>
  <div class="pulldown-pullup-wapper">
    <div class="pulldown-pullup-content" :class="{dropped: topDropped || bottomDropped}"
         :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }">
      <slot name="top">
        <p v-if="topMethod" class="status-text status-text-top">{{ topText }}</p>
      </slot>
      <slot></slot>
      <slot name="bottom">
        <p v-if="bottomMethod" class="status-text status-text-bottom">{{ bottomText }}</p>
      </slot>
    </div>
  </div>
</template>

<style>
  .pulldown-pullup-wapper {
    overflow: hidden;
  }

  .pulldown-pullup-wapper .dropped {
    transition: .2s;
  }

  .pulldown-pullup-content .status-text {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .status-text-top {
    margin-top: -50px;
  }

  .status-text-bottom {
    margin-bottom: -50px;
  }
</style>

<script type="text/babel">
  export default {
    name: 'vue-pulldown-pullup',
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
      },
      bottomPullText: {
        type: String,
        default: '上拉刷新'
      },
      bottomDropText: {
        type: String,
        default: '释放更新'
      },
      bottomLoadingText: {
        type: String,
        default: '加载中...'
      },
      bottomLoadedText: {
        type: String,
        default: '加载完成'
      },
      bottomLoadedStayTime: {
        type: Number,
        default: 400
      },
      bottomDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
        type: Function
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        translate: 0,
        scrollEventTarget: null,
        containerFilled: false,
        topText: '',
        topDropped: false,
        bottomText: '',
        bottomDropped: false,
        bottomReached: false,
        direction: '',
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
      },

      bottomStatus(val) {
        this.$emit('bottom-status-change', val);
        switch (val) {
          case 'pull':
            this.bottomText = this.bottomPullText;
            break;
          case 'drop':
            this.bottomText = this.bottomDropText;
            break;
          case 'loading':
            this.bottomText = this.bottomLoadingText;
            break;
          case 'loaded':
            this.bottomText = this.bottomLoadedText;
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
            this.topStatus = 'pull';
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

      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        this.topDropped = false;
        this.bottomDropped = false;
        this.topStatus = 'pull';
      },

      onBottomLoaded() {
        this.bottomStatus = 'pull';
        this.bottomDropped = false;
      },

      handleTouchMove(event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return;
        }
        this.currentY = event.touches[0].clientY;
        let distance = (this.currentY - this.startY) / this.distanceIndex;

        // 当下拉和上拉的时候通过判断props中的topMethod和bottomMethod是否传入回调函数来检测是否要改变位置及状态
        if (distance > 0 && typeof this.topMethod === 'function') {
          if (distance >= this.topDistance) {
            this.topStatus = 'drop';
          }
          this.translate = distance;
        } else if (distance < 0 && typeof this.bottomMethod === 'function') {
          if (Math.abs(distance) >= this.bottomDistance) {
            this.bottomStatus = 'drop';
          }
          this.translate = distance;
        }
      },

      handleTouchEnd() {
        this.topDropped = true;
        this.bottomDropped = true;
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
      this.bottomText = this.bottomPullText;
    }
  };
</script>
