<template>
  <div class="vue-superscroll-wapper">
    <div class="vue-superscroll-container">
      <slot name="top">
        <p class="status-text status-text-top">123</p>
      </slot>
      <slot></slot>
      <slot name="bottom">
        <p class="status-text status-text-bottom">123</p>
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

  .vue-superscroll-container .status-text {
    position: absolute;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .status-text-top {
    margin-top: -50px;
  }

  .status-text-bottom {
    margin-bottom: -50px;
  }
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
  }

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
        startY: ''
      };
    },
    watch: {},
    methods: {
      handleScrollStart() {
        this.startY = this.scroller.y;
      },

      handleScroll() {
        console.log(this.scroller.y);
      },

      handleScrollEnd() {

      },

      bindEvents() {
        this.scroller.on('scrollStart', this.handleScrollStart);
        this.scroller.on('scroll', this.handleScroll);
        this.scroller.on('scrollEnd', this.handleScrollEnd);
      },

      init() {
        console.log(this.pullDownConfig)
        this.scroller = new IScroll(this.$el, {
          probeType: 3
        });
        this.bindEvents();
      }
    },
    mounted() {
      this.init();
    }
  };
</script>
