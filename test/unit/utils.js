import Vue from 'vue';

// https://github.com/ElemeFE/element/blob/dev/test/unit/util.js
let id = 0;

function createElm() {
  const elm = document.createElement('div');
  elm.id = `app${++id}`;
  document.body.appendChild(elm);
  return elm;
};

/**
 * 回收 vm
 * @param  {Object} vm
 */
function destroyVM(vm) {
  const el = vm.$el;
  if (el != null) {
    const p = el.parentNode;
    if (p != null) p.removeChild(el);
  }
}

/**
 * 创建一个测试组件实例
 * @link http://vuejs.org/guide/unit-testing.html#Writing-Testable-Components
 * @param  {Object}  Compo          - 组件对象，可直接传 template
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean=false} shallMount  - 是否添加到 DOM 上
 * @param  {Function} done          - 完成后调用的函数
 * @param  {Function} closure       - 回调函数
 * @return {Object?} vm             - 如果提供 closure，则返回 undefined
 */
export function createTest(
    Compo, propsData = {}, shallMount = false, done, closure) {
  if (typeof closure === 'undefined' && typeof shallMount === 'function') {
    if (typeof done === 'function') {
      closure = done;
      done = shallMount;
    } else {
      closure = shallMount;
    }
    shallMount = false;
  }
  if (typeof propsData === 'boolean') {
    shallMount = propsData;
    propsData = {};
  }
  let vm = new (Vue.extend(Compo))({ propsData })
    .$mount(shallMount ? createElm() : undefined);
  if (closure == null) return vm;
  const fin = function (e) {
    const d = vm;
    if (d == null) return;
    vm = null;
    try {
      destroyVM(d);
    } catch (e2) {
      if (e == null && e2 != null) e = e2;
    }
    vm = null;
    if (typeof done === 'function') {
      return done(e);
    } else if (e != null) {
      throw e;
    }
  };
  let callFin = closure.length < 2;
  try {
    if (!callFin) {
      closure(vm, fin);
    } else {
      closure(vm);
    }
  } catch (e) {
    fin(e);
    callFin = false;
  }
  if (callFin) fin();
  return undefined;
}

export function waitFor(timeout, done, onCallback, onTimeout) {
  if (typeof onCallback !== 'function') {
    onCallback = onCallback
      ? function (r) { void expect(r).to.be.exist; }
      : function (r) { expect.fail('unexpected callback: ' + r); };
  }
  if (typeof onTimeout !== 'function') {
    onTimeout = onTimeout
      ? function () {}
      : function () { expect.fail('timeout'); };
  }
  let to = setTimeout(() => {
    try {
      to = null;
      onTimeout();
    } catch (e) {
      return done(e);
    }
    return done();
  }, timeout);
  return function () {
    if (to == null) return;
    try {
      clearTimeout(to);
      to = null;
      onCallback.apply(this, arguments);
    } catch (e) {
      return done(e);
    }
    return done();
  };
}

export function waitForSeq(timeout, done, seq, onTimeout) {
  const { length } = seq;
  if (!(length >= 1)) {
    done();
    return;
  }
  function onCallback(e) {
    if (e != null) throw e;
  }
  const goal = waitFor(timeout, done, onCallback, onTimeout);
  let i = 0;
  return function (state, error) {
    if (seq == null) return;
    if (arguments.length >= 2) {
      seq = null;
      goal(error);
      return;
    }
    try {
      expect(state).to.be.equal(seq[i]);
    } catch (e) {
      seq = null;
      goal(e);
      return;
    }
    if (++i >= length) {
      seq = null;
      goal();
    }
  };
}

export function touch(elem, name, clientY, clientX) {
  elem.dispatchEvent(new TouchEvent(name, {
    bubbles: true,
    cancelable: true,
    touches: [new Touch({ identifier: 0, target: elem, clientY, clientX })]
  }));
}
