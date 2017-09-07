// http://www.alloyteam.com/2012/11/javascript-throttle/
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

export function throttleRunDelay (fn, delay, mustRunDelay) {
  let timer = null;
  let tStart;
  return function () {
    const context = this;
    const args = arguments;
    const tCurr = +new Date();
    clearTimeout(timer);
    if (!tStart) {
      tStart = tCurr;
    }
    if (tCurr - tStart >= mustRunDelay) {
      fn.apply(context, args);
      tStart = tCurr;
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  };
}
