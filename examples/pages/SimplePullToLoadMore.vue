<template>
  <pull-to
    :bottom-load-method="loadmore"
    @bottom-state-change="stateChange">
    <ul class="list">
      <li v-for="(item, index) in dataList" :key="index">
        {{ item }}
      </li>
    </ul>
    <!-- vue 2.5 use slot-scope -->
    <template slot="bottom-block" slot-scope="props">
      <div class="bottom-load-wrapper">
        <svg class="icon"
             :class="{
                'icon-arrow': props.state === 'trigger',
                'icon-loading': props.state === 'loading'
             }"
             aria-hidden="true">
          <use :xlink:href="iconLink"></use>
        </svg>
        {{ props.stateText }}
      </div>
    </template>
  </pull-to>
</template>

<style scoped rel="stylesheet/less" lang="less">
  .bottom-load-wrapper {
    line-height: 50px;
    text-align: center;
  }

  .icon-arrow {
    transition: .2s;
    transform: rotate(180deg);
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
    name: 'simple-pull-to-loadmore',
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
      loadmore(loaded) {
        setTimeout(() => {
          this.dataList = this.dataList.concat(this.dataList);
          loaded('done');
        }, 2000);
      },

      stateChange(state) {
        if (state === 'pull' || state === 'trigger') {
          this.iconLink = '#icon-arrow-bottom';
        } else if (state === 'loading') {
          this.iconLink = '#icon-loading';
        } else if (state === 'loaded-done') {
          this.iconLink = '#icon-finish';
        }
      }
    }
  };
</script>
