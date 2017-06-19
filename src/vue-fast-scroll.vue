<template>
  <div class="fast-scroll-wapper" :class="{triggered: topTriggered || bottomTriggered}">
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
  .fast-scroll-wapper {
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
  import state from './state';

  export default {
    name: 'fast-scroll'
  }
</script>
