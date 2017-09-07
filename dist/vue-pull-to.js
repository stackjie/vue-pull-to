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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  "data-v-12abd9fb",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuePullTo = __webpack_require__(0);

var _vuePullTo2 = _interopRequireDefault(_vuePullTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vuePullTo2.default;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;
exports.throttle = throttle;
exports.throttleRunDelay = throttleRunDelay;
function extend(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
}

// http://www.alloyteam.com/2012/11/javascript-throttle/
function throttle(fn, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

function throttleRunDelay(fn, delay, mustRunDelay) {
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(3);

var _config = __webpack_require__(1);

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
    topLoadMethod: {
      type: Function
    },
    bottomLoadMethod: {
      type: Function
    },
    isThrottle: {
      type: Boolean,
      default: true
    },
    topConfig: {
      type: Object,
      default: function _default() {
        return _config.TOP_DEFAULT_CONFIG;
      },
      validator: function validator(config) {
        (0, _utils.extend)(config, _config.TOP_DEFAULT_CONFIG);
        return config;
      }
    },
    bottomConfig: {
      type: Object,
      default: function _default() {
        return _config.BOTTOM_DEFAULT_CONFIG;
      },
      validator: function validator(config) {
        (0, _utils.extend)(config, _config.BOTTOM_DEFAULT_CONFIG);
        return config;
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
      bottomReached: false
    };
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
      this.direction === 'down' ? this.topText = this.topConfig.pullText : this.bottomText = this.bottomConfig.pullText;
    },
    actionTrigger: function actionTrigger() {
      this.state = 'trigger';
      this.direction === 'down' ? this.topText = this.topConfig.triggerText : this.bottomText = this.bottomConfig.triggerText;
    },
    actionLoading: function actionLoading() {
      this.state = 'loading';
      if (this.direction === 'down') {
        this.topText = this.topConfig.loadingText;
        /* eslint-disable no-useless-call */
        this.topLoadMethod.call(this, this.actionLoaded);
        this.scrollTo(this.topConfig.stayDistance);
      } else {
        this.bottomText = this.bottomConfig.loadingText;
        this.bottomLoadMethod.call(this, this.actionLoaded);
        this.scrollTo(-this.bottomConfig.stayDistance);
      }
    },
    actionLoaded: function actionLoaded() {
      var _this = this;

      var loadState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'done';

      this.state = 'loaded-' + loadState;
      var loadedStayTime = void 0;
      if (this.direction === 'down') {
        this.topText = loadState === 'done' ? this.topConfig.doneText : this.topConfig.failText;
        loadedStayTime = this.topConfig.loadedStayTime;
      } else {
        this.bottomText = loadState === 'done' ? this.bottomConfig.doneText : this.bottomConfig.failText;
        loadedStayTime = this.bottomConfig.loadedStayTime;
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
      return this.scrollEl.scrollTop + this.scrollEl.offsetHeight >= this.scrollEl.scrollHeight;
    },
    handleTouchStart: function handleTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.beforeDiff = this.diff;
      this.startScrollTop = this.scrollEl.scrollTop;
      this.bottomReached = this.checkBottomReached();
    },
    handleTouchMove: function handleTouchMove(event) {
      if (this.startY < this.scrollEl.getBoundingClientRect().top && this.startY > this.scrollEl.getBoundingClientRect().bottom) {
        return;
      }
      this.currentY = event.touches[0].clientY;
      this.distance = (this.currentY - this.startY) / this.distanceIndex + this.beforeDiff;
      this.direction = this.distance > 0 ? 'down' : 'up';

      if (this.startScrollTop === 0 && this.direction === 'down') {
        event.preventDefault();
        event.stopPropagation();
        this.diff = this.distance;
        this.isThrottle ? this.throttleEmitTopPull() : this.$emit('top-pull', this.diff);

        if (typeof this.topLoadMethod !== 'function') return;

        if (this.distance < this.topConfig.triggerDistance && this.state !== 'pull' && this.state !== 'loading') {
          this.actionPull();
        } else if (this.distance >= this.topConfig.triggerDistance && this.state !== 'trigger' && this.state !== 'loading') {
          this.actionTrigger();
        }
      } else if (this.bottomReached && this.direction === 'up') {
        event.preventDefault();
        event.stopPropagation();
        this.diff = this.distance;
        this.isThrottle ? this.throttleEmitBottomPull() : this.$emit('bottom-pull', this.diff);

        if (typeof this.bottomLoadMethod !== 'function') return;

        if (Math.abs(this.distance) < this.bottomConfig.triggerDistance && this.state !== 'pull' && this.state !== 'loading') {
          this.actionPull();
        } else if (Math.abs(this.distance) >= this.bottomConfig.triggerDistance && this.state !== 'trigger' && this.state !== 'loading') {
          this.actionTrigger();
        }
      }
    },
    handleTouchEnd: function handleTouchEnd() {
      if (this.diff !== 0) {
        if (this.state === 'trigger') {
          this.actionLoading();
          return;
        }

        if (this.state === 'trigger') {
          this.actionLoading();
          return;
        }

        // pull cancel
        if (this.diff !== 0) {
          this.scrollTo(0);
        }
      }
    },
    handleScroll: function handleScroll() {
      if (this.checkBottomReached()) {
        this.$emit('infinite-scroll');
      }
    },
    throttleEmitTopPull: function throttleEmitTopPull() {
      this.$emit('top-pull', this.diff);
    },
    throttleEmitBottomPull: function throttleEmitBottomPull() {
      this.$emit('bottom-pull', this.diff);
    },
    bindEvents: function bindEvents() {
      this.scrollEl.addEventListener('touchstart', this.handleTouchStart);
      this.scrollEl.addEventListener('touchmove', this.handleTouchMove);
      this.scrollEl.addEventListener('touchend', this.handleTouchEnd);
      this.scrollEl.addEventListener('scroll', (0, _utils.throttle)(this.handleScroll, 500));
    },
    init: function init() {
      this.throttleEmitTopPull = (0, _utils.throttleRunDelay)(this.throttleEmitTopPull, 200, 300);
      this.throttleEmitBottomPull = (0, _utils.throttleRunDelay)(this.throttleEmitBottomPull, 200, 300);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(undefined);
// imports


// module
exports.push([module.i, ".vue-pull-to-wrapper[data-v-12abd9fb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%}.scroll-container[data-v-12abd9fb]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch}.vue-pull-to-wrapper .action-block[data-v-12abd9fb]{position:relative;width:100%}.defalut-text[data-v-12abd9fb]{height:100%;line-height:50px;text-align:center}", ""]);

// exports


/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vue-pull-to-wrapper",
    style: ({
      transform: ("translate3d(0, " + _vm.diff + "px, 0)")
    })
  }, [(_vm.topLoadMethod) ? _c('div', {
    staticClass: "action-block",
    style: ({
      height: (_vm.topBlockHeight + "px"),
      marginTop: ((-_vm.topBlockHeight) + "px")
    })
  }, [_vm._t("top-block", [_c('p', {
    staticClass: "defalut-text"
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
    staticClass: "defalut-text"
  }, [_vm._v(_vm._s(_vm.bottomText))])], {
    state: _vm.state,
    stateText: _vm.bottomText
  })], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(10)("0cd817f2", content, true);

/***/ }),
/* 10 */
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

var listToStyles = __webpack_require__(11)

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
/* 11 */
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