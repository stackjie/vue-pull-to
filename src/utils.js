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
  },

  getScrollTop(element) {
    if (element === window) {
      return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
    } else {
      return element.scrollTop;
    }
  },

  checkBottomReached() {
    if (this.scrollEventTarget === window) {
      return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
    } else {
      return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom + 1;
    }
  },
};

export default utils;
