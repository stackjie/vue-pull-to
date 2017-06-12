<template>
  <div>
    <h1>hello</h1>
    <fast-scroll></fast-scroll>
  </div>
</template>

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
