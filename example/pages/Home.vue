<template>
  <div class="wrapper">
    <fast-scroll></fast-scroll>
  </div>
</template>

<style>
  .wrapper {
    height: 100%;
    background: #fff;
  }
</style>

<script type="text/babel">
  import FastScroll from '@/vue-fast-scroll.vue'

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
