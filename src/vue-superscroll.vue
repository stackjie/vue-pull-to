<template>
  <div class="vue-superscroll-wapper">
    <div class="vue-superscroll-container">
      <slot name="top">
        <p class="state-text state-text-top">{{ topText }}</p>
      </slot>
      <slot></slot>
      <slot name="bottom">
        <p class="state-text state-text-bottom">{{ bottomText }}</p>
      </slot>
    </div>
  </div>
</template>

<style>
  .vue-superscroll-wapper {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .vue-superscroll-wapper .dropped {
    transition: .2s;
  }

  .vue-superscroll-container .state-text {
    /*position: absolute;*/
    /*width: 100%;*/
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  /*.state-text-top {*/
    /*margin-top: -50px;*/
  /*}*/

  /*.state-text-bottom {*/
    /*margin-bottom: -50px;*/
  /*}*/
</style>

<script type="text/babel">
  import IScroll from '../node_modules/iscroll/build/iscroll-probe'

  const TOP_DEFAULT_CONFIG = {
    topPullText: '下拉刷新',
    topDropText: '释放更新',
    topLoadingText: '加载中...',
    topLoadedText: '加载完成',
    topLoadedStayTime: 400,
    topStayDistance: 50,
    topTriggerDistance: 70
  };

  const BOTTOM_DEFAULT_CONFIG = {
    bottomPullText: '上拉加载',
    bottomDropText: '释放更新',
    bottomLoadingText: '加载中...',
    bottomLoadedText: '加载完成',
    bottomLoadedStayTime: 400,
    bottomStayDistance: 50,
    bottomTriggerDistance: 70
  };

  const utils = {
    //  验证prop config如果不存在配置项将默认配置项加入配置对象中
    configValidator(config, defaultConfig) {
      if (config !== {} && config !== null) {
        Object.keys(defaultConfig).forEach((key) => {
          if (!config.hasOwnProperty(key)) {
            config[key] = defaultConfig[key]
          }
        });
        return config;
      }
      return defaultConfig;
    }
  };

  export default {
    name: 'vue-superscroll',
    props: {
      pullDownConfig: {
        type: Object,
        default: () => {
          return {};
        },
        validator: (config) => {
          return utils.configValidator(config, TOP_DEFAULT_CONFIG);
        }
      },

      pullUpConfig: {
        type: Object,
        default: () => {
          return {};
        },
        validator: (config) => {
          return utils.configValidator(config, BOTTOM_DEFAULT_CONFIG);
        }
      }
    },
    data() {
      return {
        scroller: null,
        startY: '',
        topState: '',
        topText: '',
        bottomState: '',
        bottomText: '',
        scrollerEl: null
      };
    },
    watch: {
      topState(state) {
        const config = this.pullDownConfig;
        switch (state) {
          case 'pull':
            this.topText = config.topPullText;
            break;
          case 'drop':
            this.topText = config.topDropText;
            break;
          case 'loading':
            this.topText = config.topLoadingText;
            break;
          case 'loaded':
            this.topText = config.topLoadedText;
            break;
        }
      },

      bottomState(state) {
        const config = this.pullUpConfig;
        switch (state) {
          case 'pull':
            this.bottomText = config.bottomPullText;
            break;
          case 'drop':
            this.bottomText = config.bottomDropText;
            break;
          case 'loading':
            this.bottomText = config.bottomLoadingText;
            break;
          case 'loaded':
            this.bottomText = config.bottomLoadedText;
            break;
        }
      }
    },
    methods: {
      changeState(direction, state) {
        if (direction === 'top') {
          this.topState = state;
        } else if (direction === 'bottom') {
          this.bottomState = state;
        }
      },

      handleScrollStart() {
        this.startY = this.scroller.y;
        this.changeState('top', 'pull');
      },

      handleScroll() {
        console.log(this.scroller.y);
        const currentY = this.scroller.y;
        if (currentY >= this.pullDownConfig.topTriggerDistance) {
          this.changeState('top', 'drop');
        }

//        if (this.topState === 'drop' && currentY >) {
//          this.changeState('top', 'loading');
//        }
      },

      handleScrollEnd() {

      },

      bindEvents() {
        this.scroller.on('scrollStart', this.handleScrollStart);
        this.scroller.on('scroll', this.handleScroll);
        this.scroller.on('scrollEnd', this.handleScrollEnd);
      },

      init() {
        this.scroller = new IScroll(this.$el, {
          probeType: 3,
          startY: -50
        });
        this.scrollerEl = this.$el.querySelector('.vue-superscroll-container');
        this.bindEvents();
      }
    },
    mounted() {
      this.init();
    }
  };
</script>
