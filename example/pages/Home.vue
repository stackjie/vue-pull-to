<template>
  <div class="wrapper">
    <div class="slogan">
      <h1>Enhanced-Scroller</h1>
      <p>for Vue.js 2.0</p>
      <svg class="icon icon-face" aria-hidden="true">
        <use xlink:href="#icon-face-20"></use>
      </svg>
    </div>
    <enhanced-scroller>
      <ul class="list">
        <li>
          <router-link href="/bounce-scroll">
            Bounce scroll
            <svg class="icon icon-arrow" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </router-link>
        </li>
        <li>
          <router-link href="#">
            Simple pull to refresh
            <svg class="icon icon-arrow" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </router-link>
        </li>
        <li>
          <router-link href="#">
            Simple pull to load more
            <svg class="icon icon-arrow" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </router-link>
        </li>
        <li>
          <router-link href="#">
            Infinite scroll
            <svg class="icon icon-arrow" aria-hidden="true">
              <use xlink:href="#icon-arrow-right"></use>
            </svg>
          </router-link>
        </li>
      </ul>
    </enhanced-scroller>
  </div>
</template>

<style scoped rel="stylesheet/less" lang="less">
  .wrapper {
    box-sizing: border-box;
    padding-top: 50px;
    height: 100%;
    background: #f6f6f6;
  }

  .slogan {
    margin-top: 50px;

    p {
      margin-top: 8px;
      font-size: 16px;
      text-align: center;
    }

    .icon-face {
      margin-top: 15px;
      width: 100%;
      height: 100px;
    }
  }

  h1 {
    font-family: Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif;
    text-align: center;
    font-size: 35px;
    font-weight: 500;
  }

  .list {
    margin-top: 30px;
    font-size: 16px;

    li:nth-child(even) {
      background: #eee;
    }

    li {
      padding-left: 15px;
      height: 50px;
      line-height: 50px;
      background: #fff;

      a {
        display: block;
        height: 100%;
      }

      .icon-arrow {
        display: inline-block;
        float: right;
        margin-right: 15px;
        height: 100%;
        width: 20px;
        color: #444;
      }
    }
  }
</style>

<script type="text/babel">
  import EnhancedScroller from '../../src/vue-enhanced-scroller';
  import RouterLink from '../components/RouterLink';

  export default {
    name: 'home',
    data () {
      return {}
    },
    components: {
      RouterLink,
      EnhancedScroller
    },
    props: {
      isBack: true
    },
    methods: {},
    watch: {}
  }
</script>
