export default {
  /**
   * getScrollTop
   * @param element
   * @returns {number}
   */
  getScrollTop(element) {
    if (element) {
      return element.scrollTop;
    } else {
      return document.documentElement.scrollTop;
    }
  },
  /**
   * getVisibleHeight
   * @param element
   * @returns {number}
   */
  getVisibleHeight(element) {
    if (element) {
      return element.offsetHeight;
    } else {
      return document.documentElement.offsetHeight;
    }
  },
  /**
   * getScrollHeight
   * @param element
   * @returns {number}
   */
  getScrollHeight(element) {
    if (element) {
      return element.scrollHeight;
    } else {
      return document.documentElement.scrollHeight;
    }
  }
}
