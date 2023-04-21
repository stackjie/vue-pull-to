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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(5).default
var update = add("56ca1821", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_pull_to_vue_vue_type_style_index_0_id_81faaf1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_pull_to_vue_vue_type_style_index_0_id_81faaf1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_pull_to_vue_vue_type_style_index_0_id_81faaf1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_pull_to_vue_vue_type_style_index_0_id_81faaf1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".vue-pull-to-wrapper[data-v-81faaf1a] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n.scroll-container[data-v-81faaf1a] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.vue-pull-to-wrapper .action-block[data-v-81faaf1a] {\n  position: relative;\n  width: 100%;\n}\n.default-text[data-v-81faaf1a] {\n  height: 100%;\n  line-height: 50px;\n  text-align: center;\n}\n", ""]);



/***/ }),
/* 3 */
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
/* 4 */
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
      style: {
        height: _vm.wrapperHeight,
        transform: "translate3d(0, " + _vm.diff + "px, 0)"
      }
    },
    [
      _vm.topLoadMethod
        ? _c(
            "div",
            {
              staticClass: "action-block",
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
                    _c("span", { class: _vm.state }, [
                      _vm._v(_vm._s(_vm.topText))
                    ])
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
      _c("div", { staticClass: "scroll-container" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _vm.bottomLoadMethod
        ? _c(
            "div",
            {
              staticClass: "action-block",
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

// CONCATENATED MODULE: ./src/utils.js
// http://www.alloyteam.com/2012/11/javascript-throttle/
function throttle(fn, delay) {
  var mustRunDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var timer = null;
  var tStart;
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
      scrollTopPosition: 0,
      startScrollTop: 0,
      startY: 0,
      startX: 0,
      currentY: 0,
      currentX: 0,
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
      return Object.assign({}, TOP_DEFAULT_CONFIG, this.topConfig);
    },
    _bottomConfig: function _bottomConfig() {
      return Object.assign({}, BOTTOM_DEFAULT_CONFIG, this.bottomConfig);
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
      this.state = "loaded-".concat(loadState);
      var loadedStayTime;

      if (this.direction === 'down') {
        this.topText = loadState === 'done' ? this._topConfig.doneText : this._topConfig.failText;
        loadedStayTime = this._topConfig.loadedStayTime;
      } else {
        this.bottomText = loadState === 'done' ? this._bottomConfig.doneText : this._bottomConfig.failText;
        loadedStayTime = this._bottomConfig.loadedStayTime;
      }

      setTimeout(function () {
        _this.scrollTo(0); // reset state


        setTimeout(function () {
          _this.state = '';
        }, 200);
      }, loadedStayTime);
    },
    scrollTo: function scrollTo(y) {
      var _this2 = this;

      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      this.$el.style.transition = "".concat(duration, "ms");
      this.diff = y;
      setTimeout(function () {
        _this2.$el.style.transition = '';
      }, duration);
    },
    checkBottomReached: function checkBottomReached() {
      return this.scrollEl.scrollTop + this.scrollEl.offsetHeight + 1 >= this.scrollEl.scrollHeight;
    },
    getScrollTop: function getScrollTop() {
      return this.scrollEl.getBoundingClientRect().top;
    },
    handleTouchStart: function handleTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startX = event.touches[0].clientX;
      this.beforeDiff = this.diff;
      this.startScrollTop = this.scrollEl.scrollTop;
      this.bottomReached = this.checkBottomReached();
    },
    handleTouchMove: function handleTouchMove(event) {
      this.currentY = event.touches[0].clientY;
      this.currentX = event.touches[0].clientX;
      this.distance = (this.currentY - this.startY) / this.distanceIndex + this.beforeDiff; // judge pan gesture direction, if not vertival just return
      // make sure that if some components embeded can handle horizontal pan gesture in here

      if (Math.abs(this.currentY - this.startY) < Math.abs(this.currentX - this.startX) || Math.abs(this.currentX - this.startX) > 30) return;
      this.direction = this.distance > 0 ? 'down' : 'up';

      if (this.getScrollTop() >= this.scrollTopPosition && this.direction === 'down' && this.isTopBounce) {
        event.preventDefault(); // event.stopPropagation();

        this.diff = this.distance;
        this.isThrottleTopPull ? this.throttleEmitTopPull(this.diff) : this.$emit('top-pull', this.diff);
        if (typeof this.topLoadMethod !== 'function') return;

        if (this.distance < this._topConfig.triggerDistance && this.state !== 'pull' && this.state !== 'loading') {
          this.actionPull();
        } else if (this.distance >= this._topConfig.triggerDistance && this.state !== 'trigger' && this.state !== 'loading') {
          this.actionTrigger();
        }
      } else if (this.bottomReached && this.direction === 'up' && this.isBottomBounce) {
        event.preventDefault(); // event.stopPropagation();

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
    handleTouchEnd: function handleTouchEnd() {
      if (this.diff === 0) return;

      if (this.state === 'trigger') {
        this.actionLoading();
        return;
      } // pull cancel


      this.scrollTo(0);
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
      var eventName = arguments.length > 2 ? arguments[2] : undefined;

      var throttleMethod = function throttleMethod() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(eventName);
        this.$emit.apply(this, args);
      };

      return throttle(throttleMethod, delay, mustRunDelay);
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
      this.throttleOnInfiniteScroll = throttle(this.onInfiniteScroll, 400);
    },
    init: function init() {
      this.createThrottleMethods();
      this.scrollEl = this.$el.querySelector('.scroll-container');
      this.bindEvents();
      this.$nextTick(function () {
        this.scrollTopPosition = this.scrollEl.getBoundingClientRect().top;
      });
    }
  },
  mounted: function mounted() {
    this.init();
  }
});
// CONCATENATED MODULE: ./src/vue-pull-to.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_pull_tovue_type_script_lang_js_ = (vue_pull_tovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-pull-to.vue?vue&type=style&index=0&id=81faaf1a&scoped=true&lang=css&
var vue_pull_tovue_type_style_index_0_id_81faaf1a_scoped_true_lang_css_ = __webpack_require__(1);

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
/* 5 */
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