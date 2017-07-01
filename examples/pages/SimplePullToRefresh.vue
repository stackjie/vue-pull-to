<template>
  <enhanced-scroller
    enabled-top-action
    @top-load="refresh">
    <template slot="top-default-block" scope="props">
      <svg v-show="props.state !== 'loading'"
           class="icon icon-arrow"
           aria-hidden="true"
           :class="{ triggered: props.state ===  'trigger' }">
        <use xlink:href="#icon-arrow-bottom"></use>
      </svg>
      <svg v-show="props.state === 'loading'"
           class="icon icon-loading"
           aria-hidden="true">
        <use xlink:href="#icon-loading"></use>
      </svg>
      {{ props.stateText }}
    </template>
    <ul class="list">
      <li v-for="item in dataList">
        {{ item }}
      </li>
    </ul>
  </enhanced-scroller>
</template>

<style scoped rel="stylesheet/less" lang="less">
  .icon-arrow {
    transition: .2s;
  }

  .icon-loading {
    transform: rotate(0deg);
    animation-name: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .triggered {
    transform: rotate(180deg);
  }

  @keyframes loading
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
</style>

<script type="text/babel">
  import EnhancedScroller from '@/vue-enhanced-scroller';

  export default {
    name: 'simple-pull-to-refresh',
    components: {
      EnhancedScroller
    },
    data() {
      return {
        dataList: [
          '(ง •̀_•́)ง', '(´・ω・`) ', '（/TДT)/ ', '>ㅂ<',
          'o(*≧▽≦)ツ', '(≖ ‿ ≖)✧', '(o^∇^o)ﾉ', ' (´・ω・)ﾉ',
          '(´・ω・`)', 'ヽ(･ω･｡)ﾉ', '(｀･ω･´)', '╰(*°▽°*)╯',
          '╮(￣▽￣)╭', '(￣▽￣)~*', '(⊙ˍ⊙)', '(￣0 ￣)y'
        ]
      };
    },
    methods: {
      refresh(loaded) {
        setTimeout(() => {
          this.dataList.reverse();
          loaded('done');
        }, 2000);
      }
    }
  };
</script>
