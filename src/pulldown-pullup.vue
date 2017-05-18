<template>
  <div class="pulldown-pullup">
    <!--<slot name="top-info">-->

    <!--</slot>-->
    <!--<slot name="pulldown-pullup-content">-->

    <!--</slot>-->
    <div>哈哈哈</div>
  </div>
</template>

<style>
  .pulldown-pullup {
    height: 100%;
    position: relative;
    top: 0;
    background-color: aqua;
  }

  .pulldown-pullup-content {
  }
</style>

<script type="text/babel">
  /* eslint-disable */
  import utils from './utils'

  export default {
    name: 'vue-pulldown-pullup',
    props: {},
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
    watch: {},
    methods: {
      handleTouchMove(event) {
        if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
          return;
        }
        this.currentY = event.touches[0].clientY;
        let distance = (this.currentY - this.startY) / this.distanceIndex;
        this.direction = distance > 0 ? 'down' : 'up';
        if (typeof this.topMethod === 'function' && this.direction === 'down' &&
          this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
          event.preventDefault();
          event.stopPropagation();
          if (this.maxDistance > 0) {
            this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate;
          } else {
            this.translate = distance - this.startScrollTop;
          }
          if (this.translate < 0) {
            this.translate = 0;
          }
          this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
        }
        if (this.direction === 'up') {
          this.bottomReached = this.bottomReached || this.checkBottomReached();
        }
        if (typeof this.bottomMethod === 'function' && this.direction === 'up' &&
          this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
          event.preventDefault();
          event.stopPropagation();
          if (this.maxDistance > 0) {
            this.translate = Math.abs(distance) <= this.maxDistance
              ? this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance : this.translate;
          } else {
            this.translate = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance;
          }
          if (this.translate > 0) {
            this.translate = 0;
          }
          this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
        }
        this.$emit('translate-change', this.translate);
      },

      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
        this.bottomReached = false;
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull';
          this.topDropped = false;
        }
        if (this.bottomStatus !== 'loading') {
          this.bottomStatus = 'pull';
          this.bottomDropped = false;
        }
      },

      handleTouchEnd() {
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true;
          if (this.topStatus === 'drop') {
            this.translate = '50';
            this.topStatus = 'loading';
            this.topMethod();
          } else {
            this.translate = '0';
            this.topStatus = 'pull';
          }
        }
        if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
          this.bottomDropped = true;
          this.bottomReached = false;
          if (this.bottomStatus === 'drop') {
            this.translate = '-50';
            this.bottomStatus = 'loading';
            this.bottomMethod();
          } else {
            this.translate = '0';
            this.bottomStatus = 'pull';
          }
        }
        this.$emit('translate-change', this.translate);
        this.direction = '';
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
  };
</script>
