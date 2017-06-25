<template>
  <div class="wrapper">
    <fast-scroll @top-load="topLoad">
      <div class="list-view">
        <ul>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
          <li>
            123
          </li>
        </ul>
      </div>
    </fast-scroll>
  </div>
</template>

<style>
  .wrapper {
    box-sizing: border-box;
    padding-top: 50px;
    height: 100%;
  }

  .list-view {
    height: 1000px;
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
      return {}
    },
    props: {
      isBack: true
    },
    methods: {
      topLoad(loaded) {
        setTimeout(() => {
          loaded();
        }, 10000)
      }
    },
    watch: {}
  }
</script>
