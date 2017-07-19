export function extend (target, source) {
  for (let key in source) {
    target[key] = source[key];
  }
}

export function throttle (fn, delay) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
