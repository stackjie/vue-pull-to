(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VuePullTo"] = factory();
	else
		root["VuePullTo"] = factory();
})(window, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(10).default
var update = add("56ca1821", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(3);

var iterableToArrayLimit = __webpack_require__(4);

var nonIterableRest = __webpack_require__(5);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_pull_to_vue_vue_type_style_index_0_id_81faaf1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_pull_to_vue_vue_type_style_index_0_id_81faaf1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_pull_to_vue_vue_type_style_index_0_id_81faaf1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_pull_to_vue_vue_type_style_index_0_id_81faaf1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// Module
exports.push([module.i, ".vue-pull-to-wrapper[data-v-81faaf1a],\n.vue-pull-to-wrapper > .scroll-container[data-v-81faaf1a] {\n  padding: 0;\n  border: 0 none;\n  margin: 0;\n}\n.vue-pull-to-wrapper[data-v-81faaf1a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n.vue-pull-to-wrapper > .scroll-container[data-v-81faaf1a] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.vue-pull-to-wrapper > .scroll-container > .bottom-filler[data-v-81faaf1a] {\n  height: 0px;\n}\n.vue-pull-to-wrapper > .action-block[data-v-81faaf1a] {\n  position: relative;\n  width: 100%;\n}\n.vue-pull-to-wrapper > .action-block > .default-text[data-v-81faaf1a] {\n  height: 100%;\n  line-height: 50px;\n  text-align: center;\n}\n.vue-pull-to-wrapper[data-v-81faaf1a],\n.vue-pull-to-wrapper > .action-block-bottom[data-v-81faaf1a],\n.vue-pull-to-wrapper > .scroll-container > .bottom-fill[data-v-81faaf1a] {\n  -webkit-transition-timing-function: cubic-bezier(0, 0, 0, 1);\n          transition-timing-function: cubic-bezier(0, 0, 0, 1);\n}\n", ""]);



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-pull-to.vue?vue&type=template&id=81faaf1a&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vue-pull-to-wrapper",
      style: { height: _vm.wrapperHeight },
      on: { transitionend: _vm.handleTransitionEnd }
    },
    [
      _vm.topLoadMethod
        ? _c(
            "div",
            {
              ref: "action-block-top",
              staticClass: "action-block action-block-top",
              style: {
                height: _vm.topBlockHeight + "px",
                marginTop: -_vm.topBlockHeight + "px"
              }
            },
            [
              _vm._t(
                "top-block",
                [
                  _c("p", { staticClass: "default-text" }, [
                    _vm._v(_vm._s(_vm.topText))
                  ])
                ],
                {
                  state: _vm.state,
                  stateText: _vm.topText,
                  triggerDistance: _vm._topConfig.triggerDistance,
                  diff: _vm.diff
                }
              )
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { ref: "scroll-container", staticClass: "scroll-container" },
        [
          _vm._t("default"),
          _vm._v(" "),
          _vm.bottomLoadMethod && _vm.isBottomKeepScroll
            ? _c("div", { ref: "bottom-filler", staticClass: "bottom-filler" })
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm.bottomLoadMethod
        ? _c(
            "div",
            {
              ref: "action-block-bottom",
              staticClass: "action-block action-block-bottom",
              style: {
                height: _vm.bottomBlockHeight + "px",
                marginBottom: -_vm.bottomBlockHeight + "px"
              }
            },
            [
              _vm._t(
                "bottom-block",
                [
                  _c("p", { staticClass: "default-text" }, [
                    _vm._v(_vm._s(_vm.bottomText))
                  ])
                ],
                {
                  state: _vm.state,
                  stateText: _vm.bottomText,
                  triggerDistance: _vm._bottomConfig.triggerDistance,
                  diff: _vm.diff
                }
              )
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/vue-pull-to.vue?vue&type=template&id=81faaf1a&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(1);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(2);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/utils.js

// http://www.alloyteam.com/2012/11/javascript-throttle/
function throttle(fn, delay) {
  var mustRunDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (delay == null) return fn;
  /* istanbul ignore next */

  var timestampProvider = (typeof performance === "undefined" ? "undefined" : typeof_default()(performance)) === 'object' ? performance : Date;
  var timer = null;
  var tStart;
  return function () {
    var tCurr = timestampProvider.now();
    if (timer != null) clearTimeout(timer);

    if (!tStart) {
      tStart = tCurr;
    }

    if (mustRunDelay !== 0 && tCurr - tStart >= mustRunDelay) {
      fn.apply(this, arguments);
      tStart = tCurr;
    } else {
      var context = this;
      var args = Array.prototype.slice.call(arguments);
      timer = setTimeout(function () {
        timer = null;
        return fn.apply(context, args);
      }, delay);
    }
  };
}
var PASSIVE_OPTS = function () {
  var value = false;

  try {
    window.addEventListener('test', noop, {
      get passive() {
        value = true;
        return true;
      }

    });
    window.removeEventListener('test', noop);
  } catch (e) {
    /* istanbul ignore next */
    value = false;
  }

  return value && {
    passive: true
  };
  /* istanbul ignore next */

  function noop() {}
}();
function create(prototype, properties) {
  var obj = Object.create(prototype);
  Object.assign(obj, properties);
  return obj;
}
// CONCATENATED MODULE: ./src/config.js
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-pull-to.vue?vue&type=script&lang=js&

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
//
//
//
//
//
//
//
//
//


var LOADED_PREFIX = 'loaded-';

function setTransition(style, prop, dur, delay) {
  style.setProperty('transition-property', prop || '');
  style.setProperty('transition-duration', dur || '');
  style.setProperty('transition-delay', delay || '');
}

function isLoadedState(state) {
  /* istanbul ignore if */
  if (typeof state !== 'string') {
    return false;
  }

  return state.startsWith(LOADED_PREFIX);
}

function getMessageByState(config, state) {
  switch (state) {
    case 'pull':
      return config.pullText;

    case 'trigger':
      return config.triggerText;

    case 'loading':
      return config.loadingText;

    case 'loaded-done':
      return config.doneText;

    default:
      return isLoadedState(state) ? config.failText : '';
  }
}

/* harmony default export */ var vue_pull_tovue_type_script_lang_js_ = ({
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
    topLoadMethod: Function,
    bottomLoadMethod: Function,
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
    isTouchSensitive: {
      type: Boolean,
      default: true
    },
    isScrollSensitive: {
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
    isBottomKeepScroll: Boolean,
    topConfig: Object,
    bottomConfig: Object
  },
  data: function data() {
    return {
      startY: null,
      startX: null,
      distance: 0,
      diff: 0,
      beforeDiff: 0,
      state: '',
      shouldPullDown: false,
      shouldPullUp: false,
      shouldPassThroughEvent: false,
      throttleEmitTopPull: null,
      throttleEmitBottomPull: null,
      throttleEmitScroll: null,
      throttleOnInfiniteScroll: null
    };
  },
  computed: {
    _topConfig: function _topConfig() {
      return create(TOP_DEFAULT_CONFIG, this.topConfig);
    },
    _bottomConfig: function _bottomConfig() {
      return create(BOTTOM_DEFAULT_CONFIG, this.bottomConfig);
    },
    // compatibility
    direction: {
      cache: false,
      get: function get() {
        var d = this.distance;
        return d > 0 ? 'down' : d < 0 ? 'up' : 0;
      }
    },
    // This is fine since Vue collects reactive dependencies
    // every time computed (watched) properties are re-evaluated.
    topText: function topText() {
      if (this.distance > 0) {
        return getMessageByState(this._topConfig, this.state);
      }

      return '';
    },
    bottomText: function bottomText() {
      if (this.distance < 0) {
        return getMessageByState(this._bottomConfig, this.state);
      }

      return '';
    }
  },
  watch: {
    state: function state(val) {
      var _this = this;

      var dist = this.distance;
      var name = dist > 0 ? 'top-state-change' : 'bottom-state-change';
      this.$emit(name, val);

      if (typeof val !== 'string' || val === '') {// do nothing
      } else if (val === 'loading') {
        var actionLoaded = function actionLoaded() {
          var loadState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'done';
          var s = LOADED_PREFIX + loadState;
          _this.state = s;
          val = null;
        }; // not a method but actually a user supplied value


        if (dist > 0) {
          this.topLoadMethod(actionLoaded);
        } else {
          this.bottomLoadMethod(actionLoaded);
        }

        if (val === null) {
          return; // intermediate value change, do nothing
        }

        if (dist > 0) {
          this.scrollTo(this._topConfig.stayDistance);
        } else {
          this.scrollTo(-this._bottomConfig.stayDistance);
        }
      } else if (isLoadedState(val) && this.startY == null) {
        var c = dist > 0 ? this._topConfig : this._bottomConfig;
        var f = this.$refs['bottom-filler'];

        if (f && !(dist > 0)) {
          var a = this.$refs['action-block-bottom'];
          var b = this.diff;

          if (a != null && b < 0) {
            this.scrollTo(0, 0);
            var bs = a.style;
            bs.setProperty('transform', "translate(0, ".concat(b, "px)"));
            var fs = f.style;
            fs.setProperty('height', "".concat(-b, "px"));
            this.$refs['scroll-container'].scrollTop -= b;
            var tdur = '200ms';
            var tdelay = "".concat(c.loadedStayTime, "ms");
            setTransition(bs, 'transform', tdur, tdelay);
            setTransition(fs, 'height', tdur, tdelay);
            bs.setProperty('transform', 'translate(0, 0)');
            fs.setProperty('height', '0px');
            return;
          }
        }

        this.scrollTo(0, 200, c.loadedStayTime);
      }
    },
    isTouchSensitive: 'updateTouchSensitivity',
    isScrollSensitive: 'updateScrollSensitivity'
  },
  methods: {
    scrollTo: function scrollTo(y) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this.diff = y;
      var el = this.$refs['action-block-bottom'];

      if (el != null) {
        var bs = el.style;

        if (bs.getPropertyValue('transform')) {
          setTransition(bs, 'none');
          bs.setProperty('transform', '');
        }
      }

      var fl = this.$refs['bottom-filler'];

      if (fl != null) {
        var fs = fl.style;

        if (fs.getPropertyValue('height')) {
          setTransition(fs, 'none');
          fs.setProperty('height', '');
        }
      }

      var sd = this.$el.style;
      setTransition(sd, duration > 0 || delay > 0 ? 'transform' : 'none', "".concat(duration, "ms"), "".concat(delay, "ms"));
      sd.setProperty('transform', "translate(0, ".concat(y, "px)"));
    },
    checkBottomReached: function checkBottomReached() {
      var el = this.$refs['scroll-container'];
      return el.scrollTop + el.offsetHeight + 1 >= el.scrollHeight;
    },
    handleTouchStart: function handleTouchStart(event) {
      var _event$touches = slicedToArray_default()(event.touches, 1);

      var _event$touches$ = _event$touches[0];
      this.startY = _event$touches$.clientY;
      this.startX = _event$touches$.clientX;
      this.beforeDiff = this.diff;
      var sc = this.$refs['scroll-container'];
      this.shouldPullDown = this.isTopBounce && sc.scrollTop === 0;
      this.shouldPullUp = this.isBottomBounce && this.checkBottomReached();
      this.shouldPassThroughEvent = false;
    },
    handleTouchMove: function handleTouchMove(event) {
      var _event$touches2 = slicedToArray_default()(event.touches, 1),
          _event$touches2$ = _event$touches2[0],
          clientY = _event$touches2$.clientY,
          clientX = _event$touches2$.clientX;

      var startY = this.startY,
          startX = this.startX;
      var dist = (clientY - startY) / this.distanceIndex + this.beforeDiff;
      var s0 = this.state;

      if (s0 === 'loading' && !(dist * this.distance > 0)) {
        // do not permit distance sign to change, instead put small value
        // avoid denormal numbers (Number.MIN_VALUE) for performance
        dist = dist < 0 ? 3e-308 : -3e-308;
      }

      this.distance = dist; // judge pan gesture direction, if not vertical just return
      // make sure that if some components embeded can handle horizontal pan gesture in here

      var pe = this.shouldPassThroughEvent;

      if (Math.abs(clientY - startY) < Math.abs(clientX - startX)) {
        this.shouldPassThroughEvent = pe = true;
      }

      if (!(dist > 0 ? this.shouldPullDown : this.shouldPullUp)) {
        this.scrollTo(0, 0);
        return;
      }

      event.preventDefault();

      if (!pe) {
        event.stopPropagation();
      }

      this.scrollTo(dist, 0);
      var c;

      if (dist > 0) {
        this.isThrottleTopPull ? this.throttleEmitTopPull(this.diff) : this.$emit('top-pull', this.diff);
        if (typeof this.topLoadMethod !== 'function') return;
        c = this._topConfig;
      } else {
        this.isThrottleBottomPull ? this.throttleEmitBottomPull(this.diff) : this.$emit('bottom-pull', this.diff);
        if (typeof this.bottomLoadMethod !== 'function') return;
        c = this._bottomConfig;
      }

      var s = Math.abs(dist) < c.triggerDistance ? 'pull' : 'trigger';
      if (s0 !== 'loading' && s0 !== s) this.state = s;
    },
    handleTouchEnd: function handleTouchEnd() {
      this.startX = this.startY = null;
      if (!this.diff) return; // trigger or pull cancel

      switch (this.state) {
        case 'trigger':
          this.state = 'loading';
          break;

        case 'loading':
          this.scrollTo(this.beforeDiff);
          break;

        default:
          this.state = '';
          this.scrollTo(0);
          break;
      }
    },
    handleScroll: function handleScroll(event) {
      this.isThrottleScroll ? this.throttleEmitScroll(event) : this.$emit('scroll', event);
      this.throttleOnInfiniteScroll();
    },
    handleTransitionEnd: function handleTransitionEnd(event) {
      if (isLoadedState(this.state)) {
        this.state = '';
      }
    },
    bindEvents: function bindEvents() {
      if (this.isTouchSensitive) {
        this.updateTouchSensitivity(true);
      }

      if (this.isScrollSensitive) {
        this.updateScrollSensitivity(true);
      }
    },
    updateTouchSensitivity: function updateTouchSensitivity(flag) {
      var el = this.$refs['scroll-container'];

      if (flag) {
        el.addEventListener('touchstart', this.handleTouchStart, PASSIVE_OPTS);
        el.addEventListener('touchmove', this.handleTouchMove);
        el.addEventListener('touchend', this.handleTouchEnd, PASSIVE_OPTS);
      } else {
        el.removeEventListener('touchstart', this.handleTouchStart);
        el.removeEventListener('touchmove', this.handleTouchMove);
        el.removeEventListener('touchend', this.handleTouchEnd);
      }
    },
    updateScrollSensitivity: function updateScrollSensitivity(flag) {
      var el = this.$refs['scroll-container'];

      if (flag) {
        el.addEventListener('scroll', this.handleScroll, PASSIVE_OPTS);
      } else {
        el.removeEventListener('scroll', this.handleScroll);
      }
    },
    createThrottleMethods: function createThrottleMethods() {
      var _this2 = this;

      var throttleEmit = function throttleEmit(delay) {
        var mustRunDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var eventName = arguments.length > 2 ? arguments[2] : undefined;
        return throttle(_this2.$emit.bind(_this2, eventName), delay, mustRunDelay);
      };

      this.throttleEmitTopPull = throttleEmit(200, 300, 'top-pull');
      this.throttleEmitBottomPull = throttleEmit(200, 300, 'bottom-pull');
      this.throttleEmitScroll = throttleEmit(100, 150, 'scroll');
      this.throttleOnInfiniteScroll = throttle(function () {
        if (_this2.checkBottomReached()) {
          _this2.$emit('infinite-scroll');
        }
      }, 400);
    },
    init: function init() {
      this.createThrottleMethods();
      this.bindEvents();
    }
  },
  mounted: function mounted() {
    this.init();
  }
});
// CONCATENATED MODULE: ./src/vue-pull-to.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_pull_tovue_type_script_lang_js_ = (vue_pull_tovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-pull-to.vue?vue&type=style&index=0&id=81faaf1a&scoped=true&lang=css&
var vue_pull_tovue_type_style_index_0_id_81faaf1a_scoped_true_lang_css_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-pull-to.vue






/* normalize component */

var component = normalizeComponent(
  src_vue_pull_tovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "81faaf1a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/vue-pull-to.vue"
/* harmony default export */ var vue_pull_to = (component.exports);
// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = __webpack_exports__["default"] = (vue_pull_to);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
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
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

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
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

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
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
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


/***/ })
/******/ ]);
});