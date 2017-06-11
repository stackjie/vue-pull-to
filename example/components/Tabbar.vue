<template>
  <nav class="tabbar">
    <a v-for="val in tabbarConfig" class="tabbar-item">
      {{ val.name }}
    </a>
  </nav>
</template>

<script type="text/babel">
  export default {
    name: 'tabbar',
    props: {
      tabbarConfig: Array
    },
    methods: {},
    watch: {}
  }
</script>

<style scoped rel="stylesheet/less" lang="less">
  .tabbar {
    z-index: 500;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-item: center;
    border-top: 1px solid #e9e9e9;
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .tabbar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    height: 100%;
    text-align: center;
    line-height: 1.5;
    font-weight: 400;
    color: #d4ddde;
    font-size: 14px;
  }

  .router-link-active {
    color: @blue;
  }
</style>
