<template>
  <div class="super-scroll-wapper">
    <div class="super-scroll-container" :class="{triggered: topTriggered || bottomTriggered}">
      <slot name="top from topText">
        <p class="state-text state-text-top">{{ topText }}</p>
      </slot>
      <slot></slot>
      <slot name="bottom from bottomText">
        <p class="state-text state-text-bottom">{{ bottomText }}</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
  .super-scroll-wapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .super-scroll-wapper .triggered {
    transition: .2s !important;
  }

  .super-scroll-container .state-text {
    position: absolute;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .state-text-top {
    margin-top: -50px;
  }

  .state-text-bottom {
    margin-bottom: -50px;
  }
</style>

<script type="text/babel">
  import BScroll from 'better-scroll'

  const TOP_DEFAULT_CONFIG = {
    pullText: '下拉刷新',
    triggerText: '释放更新',
    loadingText: '加载中...',
    doneText: '加载完成',
    failText: '加载失败',
    loadedStayTime: 400,
    stayDistance: 50,
    triggerDistance: 70
  };

  const BOTTOM_DEFAULT_CONFIG = {
    pullText: '上拉加载',
    triggerText: '释放更新',
    loadingText: '加载中...',
    doneText: '加载完成',
    failText: '加载失败',
    loadedStayTime: 400,
    stayDistance: 50,
    triggerDistance: 70
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
    name: 'super-scroll',
    props: {
      startY: {
        type: Number,
        default: 0
      },

      momentum: {
        type: Boolean,
        default: true
      },

      momentumLimitTime: {
        type: Number,
        default: 300
      },

      momentumLimitDistance: {
        type: Number,
        default: 15
      },

      bounce: {
        type: Boolean,
        default: true
      },

      bounceTime: {
        type: Number,
        default: 700
      },

      deceleration: {
        type: Number,
        default: 0.001
      },

      topConfig: {
        type: Object,
        default: () => {
          return {};
        },
        validator: (config) => {
          return utils.configValidator(config, TOP_DEFAULT_CONFIG);
        }
      },

      bottomConfig: {
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
        scroll: null,
        topState: '',
        topText: '',
        bottomState: '',
        bottomText: '',
        topTriggered: false,
        bottomTriggered: false,
        topLoadedState: '',
        bottomLoadedState: ''
      };
    },
    watch: {
      topState(state) {
        this.$emit('top-change-state', state);
        const config = this.topConfig;
        switch (state) {
          case 'pull':
            this.topText = config.pullText;
            break;
          case 'drop':
            this.topText = config.triggerText;
            break;
          case 'loading':
            this.topText = config.loadingText;
            this.topTriggered = true;
            setTimeout(() => {
              this.topTriggered = false;
            }, 200);
            this.scroll.scrollTo(0, this.topConfig.stayDistance);
            this.$emit('pull-down', this.topLoaded);
            break;
          case 'loaded':
            this.topLoadedState === 'done'
              ? this.topText = config.doneText
              : this.topText = config.failText;
            setTimeout(() => {
              this.scroll.refresh();
              this.scroll.scrollTo(0, 0, 200);
            }, config.loadedStayTime);
            break;
        }
      },

      bottomState(state) {
        this.$emit('bottom-change-state', state);
        const config = this.bottomConfig;
        switch (state) {
          case 'pull':
            this.bottomText = config.pullText;
            break;
          case 'drop':
            this.bottomText = config.triggerText;
            break;
          case 'loading':
            this.bottomText = config.loadingText;
            this.bottomTriggered = true;
            setTimeout(() => {
              this.bottomTriggered = false;
            }, 200);
            this.scroll.scrollTo(0, this.scroll.maxScrollY - config.stayDistance);
            this.$emit('pull-up', this.bottomLoaded);
            break;
          case 'loaded':
            this.bottomLoadedState === 'done'
              ? this.bottomText = config.doneText
              : this.bottomText = config.failText;
            setTimeout(() => {
              this.scroll.refresh();
              this.scroll.scrollTo(0, this.scroll.maxScrollY, 200);
            }, config.loadedStayTime);
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

      topLoaded(state) {
        this.topLoadedState = '';
        if (state === 'done') {
          this.topLoadedState = 'done';
        } else if (state === 'fail') {
          this.topLoadedState = 'fail';
        }
        this.changeState('top', 'loaded');
      },

      bottomLoaded(state) {
        this.bottomLoadedState = '';
        if (state === 'done') {
          this.bottomLoadedState = 'done';
        } else if (state === 'fail') {
          this.bottomLoadedState = 'fail';
        }
        this.changeState('bottom', 'loaded');
      },

      handleScrollStart() {
        if (this.topState === 'loaded') {
          this.changeState('top', 'pull');
        }

        if (this.bottomState === 'loaded') {
          this.changeState('bottom', 'pull');
        }
      },

      handleScroll(pos) {
        this.$emit('scroll', pos);
        if (this.bottomState !== 'loading' && this.topState === 'pull' && pos.y >= this.topConfig.triggerDistance) {
          this.changeState('top', 'drop');
        } else if (this.topState === 'drop' && pos.y < this.topConfig.triggerDistance) {
          this.changeState('top', 'pull');
        }

        if (this.topState !== 'loading' && this.bottomState === 'pull' && pos.y <= this.scroll.maxScrollY - this.bottomConfig.triggerDistance) {
          this.changeState('bottom', 'drop');
        } else if (this.bottomState === 'drop' && pos.y > this.bottomConfig.triggerDistance) {
          this.changeState('bottom', 'pull');
        }
      },

      handleTouchEnd(pos) {
        console.log(pos.y);

        if (this.topState !== 'loading' && this.topState === 'drop') {
          this.changeState('top', 'loading');
        }

        if (this.topState !== 'loading' && this.bottomState === 'drop') {
          this.changeState('bottom', 'loading');
        }
      },

      bindEvents() {
        this.scroll.on('scrollStart', this.handleScrollStart);
        this.scroll.on('scroll', this.handleScroll);
        this.scroll.on('touchend', this.handleTouchEnd);
      },

      init() {
        this.scroll = new BScroll(this.$el, {
          probeType: 2,
          startY: this.startY,
          momentum: this.momentum,
          momentumLimitTime: this.momentumLimitTime,
          momentumLimitDistance: this.momentumLimitDistance,
          bounce: this.bounce,
          bounceTime: this.bounceTime,
          deceleration: this.deceleration
        });
        this.bindEvents();
        this.changeState('top', 'pull');
        this.changeState('bottom', 'pull');
      }
    },
    mounted() {
      this.init();
    }
  };
</script>
