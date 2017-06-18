<template>
  <div class="wrapper">
    <fast-scroll>
      <div class="list-view">
      </div>
    </fast-scroll>
  </div>
</template>

<style>
  .wrapper {
    height: 100%;
  }

  .list-view {
    z-index: 999;
    background: #fff;
    height: 569px;
  }
</style>

<script type="text/babel">
  import FastScroll from '@/vue-fast-scroll_bak.vue'

  export default {
    name: 'home',
    components: {
      FastScroll
    },
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
