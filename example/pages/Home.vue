<template>
  <div class="wrapper">
    <ul class="list">
      <li><a href="#">Bounce scroll</a></li>
      <li><a href="#">Simple pull to refresh</a></li>
      <li><a href="#">Simple pull to load more</a></li>
      <li><a href="#">Infinite scroll</a></li>
    </ul>
  </div>
</template>

<style scoped>
  .wrapper {
    box-sizing: border-box;
    padding-top: 50px;
    height: 100%;
    background: #f6f6f6;
  }

  .list {
    margin-top: 30px;
  }

  .list li {
    padding-left: 15px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #d2d2d2;
    background: #fff;
  }

  .list li:last-child {
    border: 0;
  }

  .list li a {
    display: block;
    height: 100%;
  }
</style>

<script type="text/babel">
  export default {
    name: 'home',
    data () {
      return {}
    },
    props: {
      isBack: true
    },
    methods: {},
    watch: {}
  }
</script>
