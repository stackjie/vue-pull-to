<template>
  <header class="app-header">
    <!--<i class="icon-back" v-show="isBack"></i>-->
    <h2>vue-fast-scroll</h2>
  </header>
</template>

<style scoped rel="stylesheet/less" lang="less">
  .app-header {
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    height: 50px;
    z-index: 500;
    background: #35495e;
    color: #fff;
  }

  h2 {
    font-size: 20px;
    font-weight: 300;
    line-height: 50px;
    text-align: center;
  }
</style>

<script type="text/babel">
  export default {
    name: 'app-header',
    data () {
      return {
      }
    },
    props: {
      isBack: true
    },
    methods: {},
    watch: {}
  }
</script>
