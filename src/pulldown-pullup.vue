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
    position: relative;
  }

  .pulldown-pullup-content {
  }
</style>

<script type="text/babel">
  /* eslint-disable */
  import utils from './utils'

  export default {
    name: 'vue-pulldown-pullup',
    props: {
    },
    data() {
      return {

      };
    },
    watch: {

    },
    methods: {
      handleTouchMove(event) {
        console.log(event);
      },
      handleTouchStart(event) {

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
    }
  };
</script>
