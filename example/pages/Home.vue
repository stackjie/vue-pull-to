<template>
  <div class="wrapper">
    <fast-scroll :is-pull-down="true" :is-pull-up="true" @top-load="topLoad" @bottom-load="bottomLoad" @infinite-scroll="infiniteScrollLoad">
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
      },
      infiniteScrollLoad() {
        console.log('开始');
        setTimeout(() => {
          console.log('结束');
        }, 1000)
      },
      bottomLoad(loaded) {
        setTimeout(() => {
          loaded();
        }, 1000)
      }
    },
    watch: {}
  }
</script>
