(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VuePullTo"] = factory();
	else
		root["VuePullTo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(1)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(6);
var defined = __webpack_require__(5);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(44)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  "data-v-12abd9fb",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TOP_DEFAULT_CONFIG = {
  pullText: '下拉刷新',
  triggerText: '释放更新',
  loadingText: '加载中...',
  doneText: '加载完成',
  failText: '加载失败',
  loadedStayTime: 400,
  stayDistance: 50,
  triggerDistance: 70
};

var BOTTOM_DEFAULT_CONFIG = {
  pullText: '上拉加载',
  triggerText: '释放更新',
  loadingText: '加载中...',
  doneText: '加载完成',
  failText: '加载失败',
  loadedStayTime: 400,
  stayDistance: 50,
  triggerDistance: 70
};

exports.TOP_DEFAULT_CONFIG = TOP_DEFAULT_CONFIG;
exports.BOTTOM_DEFAULT_CONFIG = BOTTOM_DEFAULT_CONFIG;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuePullTo = __webpack_require__(9);

var _vuePullTo2 = _interopRequireDefault(_vuePullTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vuePullTo2.default;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;
// http://www.alloyteam.com/2012/11/javascript-throttle/

function throttle(fn, delay) {
  var mustRunDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var timer = null;
  var tStart = void 0;
  return function () {
    var context = this;
    var args = arguments;
    var tCurr = +new Date();
    clearTimeout(timer);
    if (!tStart) {
      tStart = tCurr;
    }
    if (mustRunDelay !== 0 && tCurr - tStart >= mustRunDelay) {
      fn.apply(context, args);
      tStart = tCurr;
    } else {
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(12);

var _config = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'vue-pull-to',
  props: {
    distanceIndex: {
      type: Number,
      default: 2
    },
    topBlockHeight: {
      type: Number,
      default: 50
    },
    bottomBlockHeight: {
      type: Number,
      default: 50
    },
    wrapperHeight: {
      type: String,
      default: '100%'
    },
    topLoadMethod: {
      type: Function
    },
    bottomLoadMethod: {
      type: Function
    },
    isThrottleTopPull: {
      type: Boolean,
      default: true
    },
    isThrottleBottomPull: {
      type: Boolean,
      default: true
    },
    isThrottleScroll: {
      type: Boolean,
      default: true
    },
    isTopBounce: {
      type: Boolean,
      default: true
    },
    isBottomBounce: {
      type: Boolean,
      default: true
    },
    topConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    bottomConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      scrollEl: null,
      startScrollTop: 0,
      startY: 0,
      currentY: 0,
      distance: 0,
      direction: 0,
      diff: 0,
      beforeDiff: 0,
      topText: '',
      bottomText: '',
      state: '',
      bottomReached: false,
      throttleEmitTopPull: null,
      throttleEmitBottomPull: null,
      throttleEmitScroll: null,
      throttleOnInfiniteScroll: null
    };
  },

  computed: {
    _topConfig: function _topConfig() {
      return (0, _assign2.default)({}, _config.TOP_DEFAULT_CONFIG, this.topConfig);
    },
    _bottomConfig: function _bottomConfig() {
      return (0, _assign2.default)({}, _config.BOTTOM_DEFAULT_CONFIG, this.bottomConfig);
    }
  },
  watch: {
    state: function state(val) {
      if (this.direction === 'down') {
        this.$emit('top-state-change', val);
      } else {
        this.$emit('bottom-state-change', val);
      }
    }
  },
  methods: {
    actionPull: function actionPull() {
      this.state = 'pull';
      this.direction === 'down' ? this.topText = this._topConfig.pullText : this.bottomText = this._bottomConfig.pullText;
    },
    actionTrigger: function actionTrigger() {
      this.state = 'trigger';
      this.direction === 'down' ? this.topText = this._topConfig.triggerText : this.bottomText = this._bottomConfig.triggerText;
    },
    actionLoading: function actionLoading() {
      this.state = 'loading';
      if (this.direction === 'down') {
        this.topText = this._topConfig.loadingText;
        /* eslint-disable no-useless-call */
        this.topLoadMethod.call(this, this.actionLoaded);
        this.scrollTo(this._topConfig.stayDistance);
      } else {
        this.bottomText = this._bottomConfig.loadingText;
        this.bottomLoadMethod.call(this, this.actionLoaded);
        this.scrollTo(-this._bottomConfig.stayDistance);
      }
    },
    actionLoaded: function actionLoaded() {
      var _this = this;

      var loadState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'done';

      this.state = 'loaded-' + loadState;
      var loadedStayTime = void 0;
      if (this.direction === 'down') {
        this.topText = loadState === 'done' ? this._topConfig.doneText : this._topConfig.failText;
        loadedStayTime = this._topConfig.loadedStayTime;
      } else {
        this.bottomText = loadState === 'done' ? this._bottomConfig.doneText : this._bottomConfig.failText;
        loadedStayTime = this._bottomConfig.loadedStayTime;
      }
      setTimeout(function () {
        _this.scrollTo(0);

        // reset state
        setTimeout(function () {
          _this.state = '';
        }, 200);
      }, loadedStayTime);
    },
    scrollTo: function scrollTo(y) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

      this.$el.style.transition = duration + 'ms';
      this.diff = y;
      setTimeout(function () {
        _this2.$el.style.transition = '';
      }, duration);
    },
    checkBottomReached: function checkBottomReached() {
      return this.scrollEl.scrollTop + this.scrollEl.offsetHeight + 1 >= this.scrollEl.scrollHeight;
    },
    handleTouchStart: function handleTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.beforeDiff = this.diff;
      this.startScrollTop = this.scrollEl.scrollTop;
      this.bottomReached = this.checkBottomReached();
    },
    handleTouchMove: function handleTouchMove(event) {
      this.currentY = event.touches[0].clientY;
      this.distance = (this.currentY - this.startY) / this.distanceIndex + this.beforeDiff;
      this.direction = this.distance > 0 ? 'down' : 'up';

      if (this.startScrollTop === 0 && this.direction === 'down' && this.isTopBounce) {
        event.preventDefault();
        event.stopPropagation();
        this.diff = this.distance;
        this.isThrottleTopPull ? this.throttleEmitTopPull(this.diff) : this.$emit('top-pull', this.diff);

        if (typeof this.topLoadMethod !== 'function') return;

        if (this.distance < this._topConfig.triggerDistance && this.state !== 'pull' && this.state !== 'loading') {
          this.actionPull();
        } else if (this.distance >= this._topConfig.triggerDistance && this.state !== 'trigger' && this.state !== 'loading') {
          this.actionTrigger();
        }
      } else if (this.bottomReached && this.direction === 'up' && this.isBottomBounce) {
        event.preventDefault();
        event.stopPropagation();
        this.diff = this.distance;
        this.isThrottleBottomPull ? this.throttleEmitBottomPull(this.diff) : this.$emit('bottom-pull', this.diff);

        if (typeof this.bottomLoadMethod !== 'function') return;

        if (Math.abs(this.distance) < this._bottomConfig.triggerDistance && this.state !== 'pull' && this.state !== 'loading') {
          this.actionPull();
        } else if (Math.abs(this.distance) >= this._bottomConfig.triggerDistance && this.state !== 'trigger' && this.state !== 'loading') {
          this.actionTrigger();
        }
      }
    },
    handleTouchEnd: function handleTouchEnd(event) {
      event.stopPropagation();
      if (this.diff !== 0) {
        if (this.state === 'trigger') {
          this.actionLoading();
          return;
        }

        // pull cancel
        this.scrollTo(0);
      }
    },
    handleScroll: function handleScroll(event) {
      this.isThrottleScroll ? this.throttleEmitScroll(event) : this.$emit('scroll', event);
      this.throttleOnInfiniteScroll();
    },
    onInfiniteScroll: function onInfiniteScroll() {
      if (this.checkBottomReached()) {
        this.$emit('infinite-scroll');
      }
    },
    throttleEmit: function throttleEmit(delay) {
      var mustRunDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var eventName = arguments[2];

      var throttleMethod = function throttleMethod() {
        var args = [].concat(Array.prototype.slice.call(arguments));
        args.unshift(eventName);
        this.$emit.apply(this, args);
      };

      return (0, _utils.throttle)(throttleMethod, delay, mustRunDelay);
    },
    bindEvents: function bindEvents() {
      this.scrollEl.addEventListener('touchstart', this.handleTouchStart);
      this.scrollEl.addEventListener('touchmove', this.handleTouchMove);
      this.scrollEl.addEventListener('touchend', this.handleTouchEnd);
      this.scrollEl.addEventListener('scroll', this.handleScroll);
    },
    createThrottleMethods: function createThrottleMethods() {
      this.throttleEmitTopPull = this.throttleEmit(200, 300, 'top-pull');
      this.throttleEmitBottomPull = this.throttleEmit(200, 300, 'bottom-pull');
      this.throttleEmitScroll = this.throttleEmit(100, 150, 'scroll');
      this.throttleOnInfiniteScroll = (0, _utils.throttle)(this.onInfiniteScroll, 400);
    },
    init: function init() {
      this.createThrottleMethods();
      this.scrollEl = this.$el.querySelector('.scroll-container');
      this.bindEvents();
    }
  },
  mounted: function mounted() {
    this.init();
  }
};
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(36);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(16);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(4);
var ctx = __webpack_require__(20);
var hide = __webpack_require__(25);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(28);
var createDesc = __webpack_require__(33);
module.exports = __webpack_require__(0) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(1)(function () {
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(29);
var pIE = __webpack_require__(32);
var toObject = __webpack_require__(38);
var IObject = __webpack_require__(6);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(1)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(26);
var toPrimitive = __webpack_require__(39);
var dP = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(24);
var toIObject = __webpack_require__(8);
var arrayIndexOf = __webpack_require__(18)(false);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(30);
var enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(35)('keys');
var uid = __webpack_require__(40);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(7);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(5);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(23);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(27) });


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)(undefined);
// imports


// module
exports.push([module.i, ".vue-pull-to-wrapper[data-v-12abd9fb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%}.scroll-container[data-v-12abd9fb]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch}.vue-pull-to-wrapper .action-block[data-v-12abd9fb]{position:relative;width:100%}.default-text[data-v-12abd9fb]{height:100%;line-height:50px;text-align:center}", ""]);

// exports


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vue-pull-to-wrapper",
    style: ({
      height: _vm.wrapperHeight,
      transform: ("translate3d(0, " + _vm.diff + "px, 0)")
    })
  }, [(_vm.topLoadMethod) ? _c('div', {
    staticClass: "action-block",
    style: ({
      height: (_vm.topBlockHeight + "px"),
      marginTop: ((-_vm.topBlockHeight) + "px")
    })
  }, [_vm._t("top-block", [_c('p', {
    staticClass: "default-text"
  }, [_vm._v(_vm._s(_vm.topText))])], {
    state: _vm.state,
    stateText: _vm.topText
  })], 2) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "scroll-container"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.bottomLoadMethod) ? _c('div', {
    staticClass: "action-block",
    style: ({
      height: (_vm.bottomBlockHeight + "px"),
      marginBottom: ((-_vm.bottomBlockHeight) + "px")
    })
  }, [_vm._t("bottom-block", [_c('p', {
    staticClass: "default-text"
  }, [_vm._v(_vm._s(_vm.bottomText))])], {
    state: _vm.state,
    stateText: _vm.bottomText
  })], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(47)("0cd817f2", content, true);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(48)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});