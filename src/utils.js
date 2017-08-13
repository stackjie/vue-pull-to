export function extend (target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
}

export function throttle (fn, delay) {
  let timer = null;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
