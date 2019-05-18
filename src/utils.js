// http://www.alloyteam.com/2012/11/javascript-throttle/

export function throttle (fn, delay, mustRunDelay = 0) {
  if (delay == null) return fn;
  const timestampProvider =
    typeof performance === 'object' ? performance : Date;
  let timer = null;
  let tStart;
  return function () {
    const tCurr = timestampProvider.now();
    if (timer != null) clearTimeout(timer);
    if (!tStart) {
      tStart = tCurr;
    }
    if (mustRunDelay !== 0 && tCurr - tStart >= mustRunDelay) {
      fn.apply(this, arguments);
      tStart = tCurr;
    } else {
      const context = this;
      const args = [...arguments];
      timer = setTimeout(function () {
        timer = null;
        return fn.apply(context, args);
      }, delay);
    }
  };
}

export function create(prototype, properties) {
  const obj = Object.create(prototype);
  Object.assign(obj, properties);
  return obj;
}
