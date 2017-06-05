<template>
  <div class="vue-superscroll-wapper">
    <div class="vue-superscroll-container">
      <slot name="top">
        <p class="status-text status-text-top">123</p>
      </slot>
      <slot></slot>
      <slot name="bottom">
        <p class="status-text status-text-bottom">123</p>
      </slot>
    </div>
  </div>
</template>

<style>
  .vue-superscroll-wapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .vue-superscroll-wapper .dropped {
    transition: .2s;
  }

  .vue-superscroll-container .status-text {
    position: absolute;
    width: 100%;
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
  import IScroll from 'iscroll'

  export default {
    name: 'vue-superscroll',
    props: {
      pullDownConfig: {
        type: Object
      },
      isPullUpConfig: {
        type: Object
      }
    },
    data() {
      return {
        scroller: null
      };
    },
    watch: {
    },
    methods: {
      bindEvents() {
      },

      init() {
        this.scroller = new IScroll(this.$el);
        this.bindEvents();
      }
    },
    mounted() {
      this.init();
    }
  };
</script>
