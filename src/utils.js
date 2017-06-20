const utils = {
  extend(target, source) {
    for (let key in source) {
      target[key] = source[key];
    }
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
  }
};

export default utils;
