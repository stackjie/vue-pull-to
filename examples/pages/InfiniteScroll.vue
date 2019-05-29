<template>
  <pull-to
    @infinite-scroll="loadmore">
    <ul class="list">
      <li v-for="(item, index) in dataList" :key="index">
        {{ item }}
      </li>
    </ul>
    <div class="loading-bar">
      <svg class="icon icon-loading"
           aria-hidden="true">
        <use xlink:href="#icon-loading"></use>
      </svg>
      加载中...
    </div>
  </pull-to>
</template>

<style scoped rel="stylesheet/less" lang="less">
  .loading-bar {
    height: 40px;
    text-align: center;
    line-height: 40px;
  }

  .icon-loading {
    transform: rotate(0deg);
    animation-name: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes loading
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>

<script type="text/babel">
  import PullTo from '@';

  export default {
    name: 'infinite-scroll',
    components: {
      PullTo
    },
    data() {
      return {
        dataList: [
          '(ง •̀_•́)ง', '(´・ω・`) ', '（/TДT)/ ', '>ㅂ<',
          'o(*≧▽≦)ツ', '(≖ ‿ ≖)✧', '(o^∇^o)ﾉ', ' (´・ω・)ﾉ',
          '(´・ω・`)', 'ヽ(･ω･｡)ﾉ', '(｀･ω･´)', '╰(*°▽°*)╯',
          '╮(￣▽￣)╭', '(￣▽￣)~*', '(⊙ˍ⊙)', '(￣0 ￣)y'
        ],
        iconLink: ''
      };
    },
    methods: {
      loadmore() {
        setTimeout(() => {
          this.dataList = this.dataList.concat(this.dataList);
        }, 1000);
      }
    }
  };
</script>
