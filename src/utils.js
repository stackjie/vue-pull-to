const utils = {
  extend(target, source) {
    for (let key in source) {
      target[key] = source[key];
    }
  }
};

export default utils;
