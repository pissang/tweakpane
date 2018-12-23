(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tweakpane"] = factory();
	else
		root["Tweakpane"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
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

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/main/js/api/button.js":
/*!***********************************!*\
  !*** ./src/main/js/api/button.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonApi; });
/* harmony import */ var _controller_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/button */ "./src/main/js/controller/button.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ButtonApi =
/*#__PURE__*/
function () {
  function ButtonApi(buttonController) {
    _classCallCheck(this, ButtonApi);

    this.controller = buttonController;
  }

  _createClass(ButtonApi, [{
    key: "on",
    value: function on(eventName, handler) {
      var emitter = this.controller.button.emitter;
      emitter.on(eventName, handler);
    }
  }]);

  return ButtonApi;
}();



/***/ }),

/***/ "./src/main/js/api/folder.js":
/*!***********************************!*\
  !*** ./src/main/js/api/folder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FolderApi; });
/* harmony import */ var _controller_binding_creators_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/binding-creators/input */ "./src/main/js/controller/binding-creators/input.js");
/* harmony import */ var _controller_binding_creators_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/binding-creators/monitor */ "./src/main/js/controller/binding-creators/monitor.js");
/* harmony import */ var _controller_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/button */ "./src/main/js/controller/button.js");
/* harmony import */ var _controller_folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/folder */ "./src/main/js/controller/folder.js");
/* harmony import */ var _controller_separator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/separator */ "./src/main/js/controller/separator.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button */ "./src/main/js/api/button.js");
/* harmony import */ var _input_binding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-binding */ "./src/main/js/api/input-binding.js");
/* harmony import */ var _monitor_binding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./monitor-binding */ "./src/main/js/api/monitor-binding.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var TO_INTERNAL_EVENT_NAME_MAP = {
  change: 'inputchange',
  fold: 'fold',
  update: 'monitorupdate'
};

var FolderApi =
/*#__PURE__*/
function () {
  function FolderApi(folderController) {
    _classCallCheck(this, FolderApi);

    this.controller = folderController;
  }

  _createClass(FolderApi, [{
    key: "addInput",
    value: function addInput(object, key, opt_params) {
      var params = opt_params || {};
      var uc = _controller_binding_creators_input__WEBPACK_IMPORTED_MODULE_0__["create"](this.controller.document, new _model_target__WEBPACK_IMPORTED_MODULE_5__["default"](object, key, params.presetKey), params);
      this.controller.uiControllerList.append(uc);
      return new _input_binding__WEBPACK_IMPORTED_MODULE_7__["default"](uc);
    }
  }, {
    key: "addMonitor",
    value: function addMonitor(object, key, opt_params) {
      var params = opt_params || {};
      var uc = _controller_binding_creators_monitor__WEBPACK_IMPORTED_MODULE_1__["create"](this.controller.document, new _model_target__WEBPACK_IMPORTED_MODULE_5__["default"](object, key), params);
      this.controller.uiControllerList.append(uc);
      return new _monitor_binding__WEBPACK_IMPORTED_MODULE_8__["default"](uc);
    }
  }, {
    key: "addButton",
    value: function addButton(params) {
      var uc = new _controller_button__WEBPACK_IMPORTED_MODULE_2__["default"](this.controller.document, params);
      this.controller.uiControllerList.append(uc);
      return new _button__WEBPACK_IMPORTED_MODULE_6__["default"](uc);
    }
  }, {
    key: "addSeparator",
    value: function addSeparator() {
      var uc = new _controller_separator__WEBPACK_IMPORTED_MODULE_4__["default"](this.controller.document);
      this.controller.uiControllerList.append(uc);
    }
  }, {
    key: "on",
    value: function on(eventName, handler) {
      var internalEventName = TO_INTERNAL_EVENT_NAME_MAP[eventName];

      if (internalEventName) {
        var emitter = this.controller.emitter;
        emitter.on(internalEventName, handler);
      }

      return this;
    }
  }, {
    key: "expanded",
    get: function get() {
      return this.controller.folder.expanded;
    },
    set: function set(expanded) {
      this.controller.folder.expanded = expanded;
    }
  }]);

  return FolderApi;
}();



/***/ }),

/***/ "./src/main/js/api/input-binding.js":
/*!******************************************!*\
  !*** ./src/main/js/api/input-binding.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputBindingApi; });
/* harmony import */ var _controller_input_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/input-binding */ "./src/main/js/controller/input-binding.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var InputBindingApi =
/*#__PURE__*/
function () {
  function InputBindingApi(bindingController) {
    _classCallCheck(this, InputBindingApi);

    this.controller = bindingController;
  }

  _createClass(InputBindingApi, [{
    key: "on",
    value: function on(eventName, handler) {
      var emitter = this.controller.binding.value.emitter;
      emitter.on(eventName, handler);
      return this;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.controller.binding.read();
    }
  }]);

  return InputBindingApi;
}();



/***/ }),

/***/ "./src/main/js/api/monitor-binding.js":
/*!********************************************!*\
  !*** ./src/main/js/api/monitor-binding.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonitorBindingApi; });
/* harmony import */ var _controller_monitor_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/monitor-binding */ "./src/main/js/controller/monitor-binding.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MonitorBindingApi =
/*#__PURE__*/
function () {
  function MonitorBindingApi(bindingController) {
    _classCallCheck(this, MonitorBindingApi);

    this.controller = bindingController;
  }

  _createClass(MonitorBindingApi, [{
    key: "on",
    value: function on(eventName, handler) {
      var emitter = this.controller.binding.value.emitter;
      emitter.on(eventName, handler);
      return this;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      this.controller.binding.read();
    }
  }]);

  return MonitorBindingApi;
}();



/***/ }),

/***/ "./src/main/js/api/preset.js":
/*!***********************************!*\
  !*** ./src/main/js/api/preset.js ***!
  \***********************************/
/*! exports provided: exportJson, importJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportJson", function() { return exportJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importJson", function() { return importJson; });
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/target */ "./src/main/js/model/target.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function exportJson(targets) {
  return targets.reduce(function (result, target) {
    return Object.assign(result, _defineProperty({}, target.presetKey, target.read()));
  }, {});
}
function importJson(targets, preset) {
  targets.forEach(function (target) {
    var value = preset[target.presetKey];

    if (value !== undefined) {
      target.write(value);
    }
  });
}

/***/ }),

/***/ "./src/main/js/api/root.js":
/*!*********************************!*\
  !*** ./src/main/js/api/root.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RootApi; });
/* harmony import */ var _controller_binding_creators_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/binding-creators/input */ "./src/main/js/controller/binding-creators/input.js");
/* harmony import */ var _controller_binding_creators_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/binding-creators/monitor */ "./src/main/js/controller/binding-creators/monitor.js");
/* harmony import */ var _controller_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/button */ "./src/main/js/controller/button.js");
/* harmony import */ var _controller_folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/folder */ "./src/main/js/controller/folder.js");
/* harmony import */ var _controller_input_binding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/input-binding */ "./src/main/js/controller/input-binding.js");
/* harmony import */ var _controller_monitor_binding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/monitor-binding */ "./src/main/js/controller/monitor-binding.js");
/* harmony import */ var _controller_root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controller/root */ "./src/main/js/controller/root.js");
/* harmony import */ var _controller_separator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controller/separator */ "./src/main/js/controller/separator.js");
/* harmony import */ var _controller_ui_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../controller/ui-util */ "./src/main/js/controller/ui-util.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./button */ "./src/main/js/api/button.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./folder */ "./src/main/js/api/folder.js");
/* harmony import */ var _input_binding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input-binding */ "./src/main/js/api/input-binding.js");
/* harmony import */ var _monitor_binding__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./monitor-binding */ "./src/main/js/api/monitor-binding.js");
/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preset */ "./src/main/js/api/preset.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
















var TO_INTERNAL_EVENT_NAME_MAP = {
  change: 'inputchange',
  fold: 'fold',
  update: 'monitorupdate'
};

var RootApi =
/*#__PURE__*/
function () {
  function RootApi(rootController) {
    _classCallCheck(this, RootApi);

    this.controller = rootController;
  }

  _createClass(RootApi, [{
    key: "addInput",
    value: function addInput(object, key, opt_params) {
      var params = opt_params || {};
      var uc = _controller_binding_creators_input__WEBPACK_IMPORTED_MODULE_0__["create"](this.controller.document, new _model_target__WEBPACK_IMPORTED_MODULE_9__["default"](object, key, params.presetKey), params);
      this.controller.uiControllerList.append(uc);
      return new _input_binding__WEBPACK_IMPORTED_MODULE_12__["default"](uc);
    }
  }, {
    key: "addMonitor",
    value: function addMonitor(object, key, opt_params) {
      var params = opt_params || {};
      var uc = _controller_binding_creators_monitor__WEBPACK_IMPORTED_MODULE_1__["create"](this.controller.document, new _model_target__WEBPACK_IMPORTED_MODULE_9__["default"](object, key), params);
      this.controller.uiControllerList.append(uc);
      return new _monitor_binding__WEBPACK_IMPORTED_MODULE_13__["default"](uc);
    }
  }, {
    key: "addButton",
    value: function addButton(params) {
      var uc = new _controller_button__WEBPACK_IMPORTED_MODULE_2__["default"](this.controller.document, params);
      this.controller.uiControllerList.append(uc);
      return new _button__WEBPACK_IMPORTED_MODULE_10__["default"](uc);
    }
  }, {
    key: "addFolder",
    value: function addFolder(params) {
      var uc = new _controller_folder__WEBPACK_IMPORTED_MODULE_3__["default"](this.controller.document, params);
      this.controller.uiControllerList.append(uc);
      return new _folder__WEBPACK_IMPORTED_MODULE_11__["default"](uc);
    }
  }, {
    key: "addSeparator",
    value: function addSeparator() {
      var uc = new _controller_separator__WEBPACK_IMPORTED_MODULE_7__["default"](this.controller.document);
      this.controller.uiControllerList.append(uc);
    }
  }, {
    key: "importPreset",
    value: function importPreset(preset) {
      var targets = _controller_ui_util__WEBPACK_IMPORTED_MODULE_8__["findControllers"](this.controller.uiControllerList.items, _controller_input_binding__WEBPACK_IMPORTED_MODULE_4__["default"]).map(function (ibc) {
        return ibc.binding.target;
      });
      _preset__WEBPACK_IMPORTED_MODULE_14__["importJson"](targets, preset);
      this.refresh();
    }
  }, {
    key: "exportPreset",
    value: function exportPreset() {
      var targets = _controller_ui_util__WEBPACK_IMPORTED_MODULE_8__["findControllers"](this.controller.uiControllerList.items, _controller_input_binding__WEBPACK_IMPORTED_MODULE_4__["default"]).map(function (ibc) {
        return ibc.binding.target;
      });
      return _preset__WEBPACK_IMPORTED_MODULE_14__["exportJson"](targets);
    }
  }, {
    key: "on",
    value: function on(eventName, handler) {
      var internalEventName = TO_INTERNAL_EVENT_NAME_MAP[eventName];

      if (internalEventName) {
        var emitter = this.controller.emitter;
        emitter.on(internalEventName, handler);
      }

      return this;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      // Force-read all input bindings
      _controller_ui_util__WEBPACK_IMPORTED_MODULE_8__["findControllers"](this.controller.uiControllerList.items, _controller_input_binding__WEBPACK_IMPORTED_MODULE_4__["default"]).forEach(function (ibc) {
        ibc.binding.read();
      }); // Force-read all monitor bindings

      _controller_ui_util__WEBPACK_IMPORTED_MODULE_8__["findControllers"](this.controller.uiControllerList.items, _controller_monitor_binding__WEBPACK_IMPORTED_MODULE_5__["default"]).forEach(function (mbc) {
        mbc.binding.read();
      });
    }
  }, {
    key: "element",
    get: function get() {
      return this.controller.view.element;
    }
  }, {
    key: "expanded",
    get: function get() {
      var folder = this.controller.folder;
      return folder ? folder.expanded : true;
    },
    set: function set(expanded) {
      var folder = this.controller.folder;

      if (folder) {
        folder.expanded = expanded;
      }
    }
  }]);

  return RootApi;
}();



/***/ }),

/***/ "./src/main/js/binding/input.js":
/*!**************************************!*\
  !*** ./src/main/js/binding/input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputBinding; });
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/target */ "./src/main/js/model/target.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var InputBinding =
/*#__PURE__*/
function () {
  function InputBinding(config) {
    _classCallCheck(this, InputBinding);

    this.onValueChange_ = this.onValueChange_.bind(this);
    this.reader_ = config.reader;
    this.writer_ = config.writer;
    this.value = config.value;
    this.value.emitter.on('change', this.onValueChange_);
    this.target = config.target;
    this.read();
  }

  _createClass(InputBinding, [{
    key: "read",
    value: function read() {
      var targetValue = this.target.read();

      if (targetValue !== undefined) {
        this.value.rawValue = this.reader_(targetValue);
      }
    }
  }, {
    key: "write_",
    value: function write_(rawValue) {
      var value = this.writer_ ? this.writer_(rawValue) : rawValue;
      this.target.write(value);
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_(rawValue) {
      this.write_(rawValue);
    }
  }]);

  return InputBinding;
}();



/***/ }),

/***/ "./src/main/js/binding/monitor.js":
/*!****************************************!*\
  !*** ./src/main/js/binding/monitor.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonitorBinding; });
/* harmony import */ var _model_monitor_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/monitor-value */ "./src/main/js/model/monitor-value.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/target */ "./src/main/js/model/target.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var MonitorBinding =
/*#__PURE__*/
function () {
  function MonitorBinding(config) {
    _classCallCheck(this, MonitorBinding);

    this.onTick_ = this.onTick_.bind(this);
    this.reader_ = config.reader;
    this.target = config.target;
    this.value = config.value;
    this.ticker = config.ticker;
    this.ticker.emitter.on('tick', this.onTick_);
    this.read();
  }

  _createClass(MonitorBinding, [{
    key: "read",
    value: function read() {
      var targetValue = this.target.read();

      if (targetValue !== undefined) {
        this.value.append(this.reader_(targetValue));
      }
    }
  }, {
    key: "onTick_",
    value: function onTick_() {
      this.read();
    }
  }]);

  return MonitorBinding;
}();



/***/ }),

/***/ "./src/main/js/constraint/composite.js":
/*!*********************************************!*\
  !*** ./src/main/js/constraint/composite.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CompositeConstraint; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CompositeConstraint =
/*#__PURE__*/
function () {
  function CompositeConstraint(config) {
    _classCallCheck(this, CompositeConstraint);

    this.constraints_ = config.constraints;
  }

  _createClass(CompositeConstraint, [{
    key: "constrain",
    value: function constrain(value) {
      return this.constraints_.reduce(function (result, c) {
        return c.constrain(result);
      }, value);
    }
  }, {
    key: "constraints",
    get: function get() {
      return this.constraints_;
    }
  }]);

  return CompositeConstraint;
}();



/***/ }),

/***/ "./src/main/js/constraint/list.js":
/*!****************************************!*\
  !*** ./src/main/js/constraint/list.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListConstraint; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ListConstraint =
/*#__PURE__*/
function () {
  function ListConstraint(config) {
    _classCallCheck(this, ListConstraint);

    this.opts_ = config.options;
  }

  _createClass(ListConstraint, [{
    key: "constrain",
    value: function constrain(value) {
      var opts = this.opts_;

      if (opts.length === 0) {
        return value;
      }

      var matched = opts.filter(function (item) {
        return item.value === value;
      }).length > 0;
      return matched ? value : opts[0].value;
    }
  }, {
    key: "options",
    get: function get() {
      return this.opts_;
    }
  }]);

  return ListConstraint;
}();



/***/ }),

/***/ "./src/main/js/constraint/range.js":
/*!*****************************************!*\
  !*** ./src/main/js/constraint/range.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeConstraint; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RangeConstraint =
/*#__PURE__*/
function () {
  function RangeConstraint(config) {
    _classCallCheck(this, RangeConstraint);

    this.max_ = config.max;
    this.min_ = config.min;
  }

  _createClass(RangeConstraint, [{
    key: "constrain",
    value: function constrain(value) {
      var result = value;

      if (this.min_ !== null && this.min_ !== undefined) {
        result = Math.max(result, this.min_);
      }

      if (this.max_ !== null && this.max_ !== undefined) {
        result = Math.min(result, this.max_);
      }

      return result;
    }
  }, {
    key: "minValue",
    get: function get() {
      return this.min_;
    }
  }, {
    key: "maxValue",
    get: function get() {
      return this.max_;
    }
  }]);

  return RangeConstraint;
}();



/***/ }),

/***/ "./src/main/js/constraint/step.js":
/*!****************************************!*\
  !*** ./src/main/js/constraint/step.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StepConstraint; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StepConstraint =
/*#__PURE__*/
function () {
  function StepConstraint(config) {
    _classCallCheck(this, StepConstraint);

    this.step_ = config.step;
  }

  _createClass(StepConstraint, [{
    key: "constrain",
    value: function constrain(value) {
      var r = value < 0 ? -Math.round(-value / this.step_) : Math.round(value / this.step_);
      return r * this.step_;
    }
  }, {
    key: "step",
    get: function get() {
      return this.step_;
    }
  }]);

  return StepConstraint;
}();



/***/ }),

/***/ "./src/main/js/constraint/util.js":
/*!****************************************!*\
  !*** ./src/main/js/constraint/util.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _composite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composite */ "./src/main/js/constraint/composite.js");

var ConstraintUtil = {
  findConstraint: function findConstraint(c, constraintClass) {
    if (c instanceof constraintClass) {
      return c;
    }

    if (c instanceof _composite__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      var result = c.constraints.reduce(function (result, sc) {
        if (result) {
          return result;
        }

        return sc instanceof constraintClass ? sc : null;
      }, null);

      if (result) {
        return result;
      }
    }

    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ConstraintUtil);

/***/ }),

/***/ "./src/main/js/controller/binding-creators/boolean-input.js":
/*!******************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/boolean-input.js ***!
  \******************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _converter_boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../converter/boolean */ "./src/main/js/converter/boolean.js");
/* harmony import */ var _constraint_composite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.js");
/* harmony import */ var _constraint_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.js");
/* harmony import */ var _constraint_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.js");
/* harmony import */ var _binding_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _input_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input/checkbox */ "./src/main/js/controller/input/checkbox.js");
/* harmony import */ var _input_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../input/list */ "./src/main/js/controller/input/list.js");
/* harmony import */ var _input_binding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.js");











function createConstraint(params) {
  var constraints = [];

  if (params.options) {
    constraints.push(new _constraint_list__WEBPACK_IMPORTED_MODULE_2__["default"]({
      options: params.options
    }));
  }

  return new _constraint_composite__WEBPACK_IMPORTED_MODULE_1__["default"]({
    constraints: constraints
  });
}

function createController(document, value) {
  var c = value.constraint;

  if (c && _constraint_util__WEBPACK_IMPORTED_MODULE_3__["default"].findConstraint(c, _constraint_list__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    return new _input_list__WEBPACK_IMPORTED_MODULE_8__["default"](document, {
      stringifyValue: _converter_boolean__WEBPACK_IMPORTED_MODULE_0__["toString"],
      value: value
    });
  }

  return new _input_checkbox__WEBPACK_IMPORTED_MODULE_7__["default"](document, {
    value: value
  });
}

function create(document, target, params) {
  var value = new _model_input_value__WEBPACK_IMPORTED_MODULE_5__["default"](false, createConstraint(params));
  var binding = new _binding_input__WEBPACK_IMPORTED_MODULE_4__["default"]({
    reader: _converter_boolean__WEBPACK_IMPORTED_MODULE_0__["fromMixed"],
    target: target,
    value: value
  });
  return new _input_binding__WEBPACK_IMPORTED_MODULE_9__["default"](document, {
    binding: binding,
    controller: createController(document, value),
    label: params.label || target.key
  });
}

/***/ }),

/***/ "./src/main/js/controller/binding-creators/color-input.js":
/*!****************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/color-input.js ***!
  \****************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _converter_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.js");
/* harmony import */ var _binding_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.js");
/* harmony import */ var _formatter_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../formatter/color */ "./src/main/js/formatter/color.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _parser_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../parser/color */ "./src/main/js/parser/color.js");
/* harmony import */ var _input_color_swatch_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../input/color-swatch-text */ "./src/main/js/controller/input/color-swatch-text.js");
/* harmony import */ var _input_binding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.js");









function create(document, target, initialValue, params) {
  var value = new _model_input_value__WEBPACK_IMPORTED_MODULE_4__["default"](initialValue);
  return new _input_binding__WEBPACK_IMPORTED_MODULE_8__["default"](document, {
    binding: new _binding_input__WEBPACK_IMPORTED_MODULE_1__["default"]({
      reader: _converter_color__WEBPACK_IMPORTED_MODULE_0__["fromMixed"],
      target: target,
      value: value,
      writer: _converter_color__WEBPACK_IMPORTED_MODULE_0__["toString"]
    }),
    controller: new _input_color_swatch_text__WEBPACK_IMPORTED_MODULE_7__["default"](document, {
      formatter: new _formatter_color__WEBPACK_IMPORTED_MODULE_2__["default"](),
      parser: _parser_color__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: value
    }),
    label: params.label || target.key
  });
}

/***/ }),

/***/ "./src/main/js/controller/binding-creators/input.js":
/*!**********************************************************!*\
  !*** ./src/main/js/controller/binding-creators/input.js ***!
  \**********************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _converter_boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../converter/boolean */ "./src/main/js/converter/boolean.js");
/* harmony import */ var _converter_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../converter/number */ "./src/main/js/converter/number.js");
/* harmony import */ var _converter_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../converter/string */ "./src/main/js/converter/string.js");
/* harmony import */ var _misc_pane_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _parser_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../parser/color */ "./src/main/js/parser/color.js");
/* harmony import */ var _boolean_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boolean-input */ "./src/main/js/controller/binding-creators/boolean-input.js");
/* harmony import */ var _color_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-input */ "./src/main/js/controller/binding-creators/color-input.js");
/* harmony import */ var _number_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./number-input */ "./src/main/js/controller/binding-creators/number-input.js");
/* harmony import */ var _string_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./string-input */ "./src/main/js/controller/binding-creators/string-input.js");











function normalizeParams(p1, convert) {
  var p2 = {
    label: p1.label,
    max: p1.max,
    min: p1.min,
    step: p1.step
  };

  if (p1.options) {
    if (Array.isArray(p1.options)) {
      p2.options = p1.options.map(function (item) {
        return {
          text: item.text,
          value: convert(item.value)
        };
      });
    } else {
      var textToValueMap = p1.options;
      var texts = Object.keys(textToValueMap);
      p2.options = texts.reduce(function (options, text) {
        return options.concat({
          text: text,
          value: convert(textToValueMap[text])
        });
      }, []);
    }
  }

  return p2;
}

function create(document, target, params) {
  var initialValue = target.read();

  if (typeof initialValue === 'boolean') {
    return _boolean_input__WEBPACK_IMPORTED_MODULE_6__["create"](document, target, normalizeParams(params, _converter_boolean__WEBPACK_IMPORTED_MODULE_0__["fromMixed"]));
  }

  if (typeof initialValue === 'number') {
    return _number_input__WEBPACK_IMPORTED_MODULE_8__["create"](document, target, normalizeParams(params, _converter_number__WEBPACK_IMPORTED_MODULE_1__["fromMixed"]));
  }

  if (typeof initialValue === 'string') {
    var color = Object(_parser_color__WEBPACK_IMPORTED_MODULE_5__["default"])(initialValue);

    if (color) {
      return _color_input__WEBPACK_IMPORTED_MODULE_7__["create"](document, target, color, params);
    }

    return _string_input__WEBPACK_IMPORTED_MODULE_9__["create"](document, target, normalizeParams(params, _converter_string__WEBPACK_IMPORTED_MODULE_2__["fromMixed"]));
  }

  throw new _misc_pane_error__WEBPACK_IMPORTED_MODULE_3__["default"]({
    context: {
      key: target.key
    },
    type: 'nomatchingcontroller'
  });
}

/***/ }),

/***/ "./src/main/js/controller/binding-creators/monitor.js":
/*!************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/monitor.js ***!
  \************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _misc_pane_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/pane-error */ "./src/main/js/misc/pane-error.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _number_monitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-monitor */ "./src/main/js/controller/binding-creators/number-monitor.js");
/* harmony import */ var _string_monitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string-monitor */ "./src/main/js/controller/binding-creators/string-monitor.js");




function create(document, target, params) {
  var initialValue = target.read();

  if (typeof initialValue === 'number') {
    if (params.type === 'graph') {
      return _number_monitor__WEBPACK_IMPORTED_MODULE_2__["createGraphMonitor"](document, target, params);
    }

    return _number_monitor__WEBPACK_IMPORTED_MODULE_2__["createTextMonitor"](document, target, params);
  }

  if (typeof initialValue === 'string') {
    return _string_monitor__WEBPACK_IMPORTED_MODULE_3__["createTextMonitor"](document, target, params);
  }

  throw new _misc_pane_error__WEBPACK_IMPORTED_MODULE_0__["default"]({
    context: {
      key: target.key
    },
    type: 'nomatchingcontroller'
  });
}

/***/ }),

/***/ "./src/main/js/controller/binding-creators/number-input.js":
/*!*****************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/number-input.js ***!
  \*****************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _converter_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../converter/number */ "./src/main/js/converter/number.js");
/* harmony import */ var _constraint_composite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.js");
/* harmony import */ var _constraint_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.js");
/* harmony import */ var _constraint_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.js");
/* harmony import */ var _constraint_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constraint/range */ "./src/main/js/constraint/range.js");
/* harmony import */ var _constraint_step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constraint/step */ "./src/main/js/constraint/step.js");
/* harmony import */ var _binding_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.js");
/* harmony import */ var _formatter_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _parser_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../parser/number */ "./src/main/js/parser/number.js");
/* harmony import */ var _input_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../input/list */ "./src/main/js/controller/input/list.js");
/* harmony import */ var _input_number_text__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../input/number-text */ "./src/main/js/controller/input/number-text.js");
/* harmony import */ var _input_slider_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../input/slider-text */ "./src/main/js/controller/input/slider-text.js");
/* harmony import */ var _input_binding__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.js");

















function createConstraint(params) {
  var constraints = [];

  if (params.step !== null && params.step !== undefined) {
    constraints.push(new _constraint_step__WEBPACK_IMPORTED_MODULE_5__["default"]({
      step: params.step
    }));
  }

  if (params.max !== null && params.max !== undefined || params.min !== null && params.min !== undefined) {
    constraints.push(new _constraint_range__WEBPACK_IMPORTED_MODULE_4__["default"]({
      max: params.max,
      min: params.min
    }));
  }

  if (params.options) {
    constraints.push(new _constraint_list__WEBPACK_IMPORTED_MODULE_2__["default"]({
      options: params.options
    }));
  }

  return new _constraint_composite__WEBPACK_IMPORTED_MODULE_1__["default"]({
    constraints: constraints
  });
}

function getSuitableDecimalDigits(value) {
  var c = value.constraint;
  var sc = c && _constraint_util__WEBPACK_IMPORTED_MODULE_3__["default"].findConstraint(c, _constraint_step__WEBPACK_IMPORTED_MODULE_5__["default"]);

  if (sc) {
    return _misc_number_util__WEBPACK_IMPORTED_MODULE_8__["default"].getDecimalDigits(sc.step);
  }

  return Math.max(_misc_number_util__WEBPACK_IMPORTED_MODULE_8__["default"].getDecimalDigits(value.rawValue), 2);
}

function createController(document, value) {
  var c = value.constraint;

  if (c && _constraint_util__WEBPACK_IMPORTED_MODULE_3__["default"].findConstraint(c, _constraint_list__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    return new _input_list__WEBPACK_IMPORTED_MODULE_12__["default"](document, {
      stringifyValue: _converter_number__WEBPACK_IMPORTED_MODULE_0__["toString"],
      value: value
    });
  }

  if (c && _constraint_util__WEBPACK_IMPORTED_MODULE_3__["default"].findConstraint(c, _constraint_range__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return new _input_slider_text__WEBPACK_IMPORTED_MODULE_14__["default"](document, {
      formatter: new _formatter_number__WEBPACK_IMPORTED_MODULE_7__["default"](getSuitableDecimalDigits(value)),
      parser: _parser_number__WEBPACK_IMPORTED_MODULE_11__["default"],
      value: value
    });
  }

  return new _input_number_text__WEBPACK_IMPORTED_MODULE_13__["default"](document, {
    formatter: new _formatter_number__WEBPACK_IMPORTED_MODULE_7__["default"](getSuitableDecimalDigits(value)),
    parser: _parser_number__WEBPACK_IMPORTED_MODULE_11__["default"],
    value: value
  });
}

function create(document, target, params) {
  var value = new _model_input_value__WEBPACK_IMPORTED_MODULE_9__["default"](0, createConstraint(params));
  var binding = new _binding_input__WEBPACK_IMPORTED_MODULE_6__["default"]({
    reader: _converter_number__WEBPACK_IMPORTED_MODULE_0__["fromMixed"],
    target: target,
    value: value
  });
  return new _input_binding__WEBPACK_IMPORTED_MODULE_15__["default"](document, {
    binding: binding,
    controller: createController(document, value),
    label: params.label || target.key
  });
}

/***/ }),

/***/ "./src/main/js/controller/binding-creators/number-monitor.js":
/*!*******************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/number-monitor.js ***!
  \*******************************************************************/
/*! exports provided: createTextMonitor, createGraphMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextMonitor", function() { return createTextMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGraphMonitor", function() { return createGraphMonitor; });
/* harmony import */ var _converter_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../converter/number */ "./src/main/js/converter/number.js");
/* harmony import */ var _binding_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../binding/monitor */ "./src/main/js/binding/monitor.js");
/* harmony import */ var _formatter_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.js");
/* harmony import */ var _misc_ticker_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/ticker/interval */ "./src/main/js/misc/ticker/interval.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_monitor_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _monitor_multi_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../monitor/multi-log */ "./src/main/js/controller/monitor/multi-log.js");
/* harmony import */ var _monitor_single_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../monitor/single-log */ "./src/main/js/controller/monitor/single-log.js");
/* harmony import */ var _monitor_graph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../monitor/graph */ "./src/main/js/controller/monitor/graph.js");
/* harmony import */ var _monitor_binding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../monitor-binding */ "./src/main/js/controller/monitor-binding.js");












function createFormatter() {
  // TODO: formatter precision
  return new _formatter_number__WEBPACK_IMPORTED_MODULE_2__["default"](2);
}

function createTextMonitor(document, target, params) {
  var value = new _model_monitor_value__WEBPACK_IMPORTED_MODULE_5__["default"](_misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(params.count, 1));
  var controller = value.totalCount === 1 ? new _monitor_single_log__WEBPACK_IMPORTED_MODULE_8__["default"](document, {
    formatter: createFormatter(),
    value: value
  }) : new _monitor_multi_log__WEBPACK_IMPORTED_MODULE_7__["default"](document, {
    formatter: createFormatter(),
    value: value
  });
  var ticker = new _misc_ticker_interval__WEBPACK_IMPORTED_MODULE_3__["default"](document, _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(params.interval, 200));
  return new _monitor_binding__WEBPACK_IMPORTED_MODULE_10__["default"](document, {
    binding: new _binding_monitor__WEBPACK_IMPORTED_MODULE_1__["default"]({
      reader: _converter_number__WEBPACK_IMPORTED_MODULE_0__["fromMixed"],
      value: value,
      target: target,
      ticker: ticker
    }),
    controller: controller,
    label: params.label || target.key
  });
}
function createGraphMonitor(document, target, params) {
  var value = new _model_monitor_value__WEBPACK_IMPORTED_MODULE_5__["default"](_misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(params.count, 64));
  var ticker = new _misc_ticker_interval__WEBPACK_IMPORTED_MODULE_3__["default"](document, _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(params.interval, 200));
  return new _monitor_binding__WEBPACK_IMPORTED_MODULE_10__["default"](document, {
    binding: new _binding_monitor__WEBPACK_IMPORTED_MODULE_1__["default"]({
      reader: _converter_number__WEBPACK_IMPORTED_MODULE_0__["fromMixed"],
      value: value,
      target: target,
      ticker: ticker
    }),
    controller: new _monitor_graph__WEBPACK_IMPORTED_MODULE_9__["default"](document, {
      formatter: createFormatter(),
      maxValue: _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(params.max, 100),
      minValue: _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(params.min, 0),
      value: value
    }),
    label: params.label || target.key
  });
}

/***/ }),

/***/ "./src/main/js/controller/binding-creators/string-input.js":
/*!*****************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/string-input.js ***!
  \*****************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _converter_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../converter/string */ "./src/main/js/converter/string.js");
/* harmony import */ var _constraint_composite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.js");
/* harmony import */ var _constraint_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.js");
/* harmony import */ var _constraint_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.js");
/* harmony import */ var _binding_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../binding/input */ "./src/main/js/binding/input.js");
/* harmony import */ var _formatter_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../formatter/string */ "./src/main/js/formatter/string.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _input_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../input/list */ "./src/main/js/controller/input/list.js");
/* harmony import */ var _input_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../input/text */ "./src/main/js/controller/input/text.js");
/* harmony import */ var _input_binding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../input-binding */ "./src/main/js/controller/input-binding.js");












function createConstraint(params) {
  var constraints = [];

  if (params.options) {
    constraints.push(new _constraint_list__WEBPACK_IMPORTED_MODULE_2__["default"]({
      options: params.options
    }));
  }

  return new _constraint_composite__WEBPACK_IMPORTED_MODULE_1__["default"]({
    constraints: constraints
  });
}

function createController(document, value) {
  var c = value.constraint;

  if (c && _constraint_util__WEBPACK_IMPORTED_MODULE_3__["default"].findConstraint(c, _constraint_list__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    return new _input_list__WEBPACK_IMPORTED_MODULE_8__["default"](document, {
      stringifyValue: _converter_string__WEBPACK_IMPORTED_MODULE_0__["toString"],
      value: value
    });
  }

  return new _input_text__WEBPACK_IMPORTED_MODULE_9__["default"](document, {
    formatter: new _formatter_string__WEBPACK_IMPORTED_MODULE_5__["default"](),
    parser: _converter_string__WEBPACK_IMPORTED_MODULE_0__["toString"],
    value: value
  });
}

function create(document, target, params) {
  var value = new _model_input_value__WEBPACK_IMPORTED_MODULE_6__["default"]('', createConstraint(params));
  var binding = new _binding_input__WEBPACK_IMPORTED_MODULE_4__["default"]({
    reader: _converter_string__WEBPACK_IMPORTED_MODULE_0__["fromMixed"],
    target: target,
    value: value
  });
  return new _input_binding__WEBPACK_IMPORTED_MODULE_10__["default"](document, {
    binding: binding,
    controller: createController(document, value),
    label: params.label || target.key
  });
}

/***/ }),

/***/ "./src/main/js/controller/binding-creators/string-monitor.js":
/*!*******************************************************************!*\
  !*** ./src/main/js/controller/binding-creators/string-monitor.js ***!
  \*******************************************************************/
/*! exports provided: createTextMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextMonitor", function() { return createTextMonitor; });
/* harmony import */ var _converter_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../converter/string */ "./src/main/js/converter/string.js");
/* harmony import */ var _binding_monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../binding/monitor */ "./src/main/js/binding/monitor.js");
/* harmony import */ var _formatter_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../formatter/string */ "./src/main/js/formatter/string.js");
/* harmony import */ var _misc_ticker_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/ticker/interval */ "./src/main/js/misc/ticker/interval.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_monitor_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.js");
/* harmony import */ var _model_target__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/target */ "./src/main/js/model/target.js");
/* harmony import */ var _monitor_multi_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../monitor/multi-log */ "./src/main/js/controller/monitor/multi-log.js");
/* harmony import */ var _monitor_single_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../monitor/single-log */ "./src/main/js/controller/monitor/single-log.js");
/* harmony import */ var _monitor_binding__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../monitor-binding */ "./src/main/js/controller/monitor-binding.js");










function createTextMonitor(document, target, params) {
  var value = new _model_monitor_value__WEBPACK_IMPORTED_MODULE_5__["default"](_misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(params.count, 1));
  var multiline = value.totalCount > 1 || params.multiline;
  var controller = multiline ? new _monitor_multi_log__WEBPACK_IMPORTED_MODULE_7__["default"](document, {
    formatter: new _formatter_string__WEBPACK_IMPORTED_MODULE_2__["default"](),
    value: value
  }) : new _monitor_single_log__WEBPACK_IMPORTED_MODULE_8__["default"](document, {
    formatter: new _formatter_string__WEBPACK_IMPORTED_MODULE_2__["default"](),
    value: value
  });
  var ticker = new _misc_ticker_interval__WEBPACK_IMPORTED_MODULE_3__["default"](document, _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(params.interval, 200));
  return new _monitor_binding__WEBPACK_IMPORTED_MODULE_9__["default"](document, {
    binding: new _binding_monitor__WEBPACK_IMPORTED_MODULE_1__["default"]({
      reader: _converter_string__WEBPACK_IMPORTED_MODULE_0__["fromMixed"],
      value: value,
      target: target,
      ticker: ticker
    }),
    controller: controller,
    label: params.label || target.key
  });
}

/***/ }),

/***/ "./src/main/js/controller/button.js":
/*!******************************************!*\
  !*** ./src/main/js/controller/button.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonController; });
/* harmony import */ var _model_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/button */ "./src/main/js/model/button.js");
/* harmony import */ var _view_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/button */ "./src/main/js/view/button.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ButtonController =
/*#__PURE__*/
function () {
  function ButtonController(document, config) {
    _classCallCheck(this, ButtonController);

    this.onButtonClick_ = this.onButtonClick_.bind(this);
    this.button = new _model_button__WEBPACK_IMPORTED_MODULE_0__["default"](config.title);
    this.view = new _view_button__WEBPACK_IMPORTED_MODULE_1__["default"](document, {
      button: this.button
    });
    this.view.buttonElement.addEventListener('click', this.onButtonClick_);
  }

  _createClass(ButtonController, [{
    key: "onButtonClick_",
    value: function onButtonClick_() {
      this.button.click();
    }
  }]);

  return ButtonController;
}();



/***/ }),

/***/ "./src/main/js/controller/folder.js":
/*!******************************************!*\
  !*** ./src/main/js/controller/folder.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FolderController; });
/* harmony import */ var _misc_dom_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/dom-util */ "./src/main/js/misc/dom-util.js");
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_folder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/folder */ "./src/main/js/model/folder.js");
/* harmony import */ var _model_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/list */ "./src/main/js/model/list.js");
/* harmony import */ var _view_folder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/folder */ "./src/main/js/view/folder.js");
/* harmony import */ var _input_binding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-binding */ "./src/main/js/controller/input-binding.js");
/* harmony import */ var _monitor_binding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monitor-binding */ "./src/main/js/controller/monitor-binding.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










var FolderController =
/*#__PURE__*/
function () {
  function FolderController(document, config) {
    _classCallCheck(this, FolderController);

    this.onFolderChange_ = this.onFolderChange_.bind(this);
    this.onInputChange_ = this.onInputChange_.bind(this);
    this.onMonitorUpdate_ = this.onMonitorUpdate_.bind(this);
    this.onTitleClick_ = this.onTitleClick_.bind(this);
    this.onUiControllerListAppend_ = this.onUiControllerListAppend_.bind(this);
    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.folder = new _model_folder__WEBPACK_IMPORTED_MODULE_3__["default"](config.title, _misc_flow_util__WEBPACK_IMPORTED_MODULE_2__["default"].getOrDefault(config.expanded, true));
    this.folder.emitter.on('change', this.onFolderChange_);
    this.ucList_ = new _model_list__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.ucList_.emitter.on('append', this.onUiControllerListAppend_);
    this.doc_ = document;
    this.view = new _view_folder__WEBPACK_IMPORTED_MODULE_5__["default"](this.doc_, {
      folder: this.folder
    });
    this.view.titleElement.addEventListener('click', this.onTitleClick_);
  }

  _createClass(FolderController, [{
    key: "computeExpandedHeight_",
    value: function computeExpandedHeight_() {
      var _this = this;

      var elem = this.view.containerElement;
      var height = 0;
      _misc_dom_util__WEBPACK_IMPORTED_MODULE_0__["disableTransitionTemporarily"](elem, function () {
        // Expand folder
        var expanded = _this.folder.expanded;
        _this.folder.expandedHeight = null;
        _this.folder.expanded = true;
        _misc_dom_util__WEBPACK_IMPORTED_MODULE_0__["forceReflow"](elem); // Compute height

        height = elem.getBoundingClientRect().height; // Restore expanded

        _this.folder.expanded = expanded;
        _misc_dom_util__WEBPACK_IMPORTED_MODULE_0__["forceReflow"](elem);
      });
      return height;
    }
  }, {
    key: "onTitleClick_",
    value: function onTitleClick_() {
      this.folder.expanded = !this.folder.expanded;
    }
  }, {
    key: "onUiControllerListAppend_",
    value: function onUiControllerListAppend_(uc) {
      if (uc instanceof _input_binding__WEBPACK_IMPORTED_MODULE_6__["default"]) {
        var emitter = uc.binding.value.emitter;
        emitter.on('change', this.onInputChange_);
      } else if (uc instanceof _monitor_binding__WEBPACK_IMPORTED_MODULE_7__["default"]) {
        var _emitter = uc.binding.value.emitter;

        _emitter.on('update', this.onMonitorUpdate_);
      }

      this.view.containerElement.appendChild(uc.view.element);
      this.folder.expandedHeight = this.computeExpandedHeight_();
    }
  }, {
    key: "onInputChange_",
    value: function onInputChange_(value) {
      this.emitter.emit('inputchange', [value]);
    }
  }, {
    key: "onMonitorUpdate_",
    value: function onMonitorUpdate_(value) {
      this.emitter.emit('monitorupdate', [value]);
    }
  }, {
    key: "onFolderChange_",
    value: function onFolderChange_() {
      this.emitter.emit('fold');
    }
  }, {
    key: "document",
    get: function get() {
      return this.doc_;
    }
  }, {
    key: "uiControllerList",
    get: function get() {
      return this.ucList_;
    }
  }]);

  return FolderController;
}();



/***/ }),

/***/ "./src/main/js/controller/input-binding.js":
/*!*************************************************!*\
  !*** ./src/main/js/controller/input-binding.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputBindingController; });
/* harmony import */ var _binding_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../binding/input */ "./src/main/js/binding/input.js");
/* harmony import */ var _view_labeled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/labeled */ "./src/main/js/view/labeled.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var InputBindingController = function InputBindingController(document, config) {
  _classCallCheck(this, InputBindingController);

  this.binding = config.binding;
  this.controller = config.controller;
  this.view = new _view_labeled__WEBPACK_IMPORTED_MODULE_1__["default"](document, {
    label: config.label,
    view: this.controller.view
  });
};



/***/ }),

/***/ "./src/main/js/controller/input/checkbox.js":
/*!**************************************************!*\
  !*** ./src/main/js/controller/input/checkbox.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxInputController; });
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view_input_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view/input/checkbox */ "./src/main/js/view/input/checkbox.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var CheckboxInputController =
/*#__PURE__*/
function () {
  function CheckboxInputController(document, config) {
    _classCallCheck(this, CheckboxInputController);

    this.onInputChange_ = this.onInputChange_.bind(this);
    this.value = config.value;
    this.view = new _view_input_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"](document, {
      value: this.value
    });
    this.view.inputElement.addEventListener('change', this.onInputChange_);
  }

  _createClass(CheckboxInputController, [{
    key: "onInputChange_",
    value: function onInputChange_(e) {
      var inputElem = _misc_flow_util__WEBPACK_IMPORTED_MODULE_0__["default"].forceCast(e.currentTarget);
      this.value.rawValue = inputElem.checked;
      this.view.update();
    }
  }]);

  return CheckboxInputController;
}();



/***/ }),

/***/ "./src/main/js/controller/input/color-picker.js":
/*!******************************************************!*\
  !*** ./src/main/js/controller/input/color-picker.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPickerInputController; });
/* harmony import */ var _constraint_composite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constraint/composite */ "./src/main/js/constraint/composite.js");
/* harmony import */ var _constraint_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constraint/range */ "./src/main/js/constraint/range.js");
/* harmony import */ var _constraint_step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constraint/step */ "./src/main/js/constraint/step.js");
/* harmony import */ var _formatter_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_foldable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/foldable */ "./src/main/js/model/foldable.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _parser_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../parser/number */ "./src/main/js/parser/number.js");
/* harmony import */ var _view_input_color_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../view/input/color-picker */ "./src/main/js/view/input/color-picker.js");
/* harmony import */ var _number_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./number-text */ "./src/main/js/controller/input/number-text.js");
/* harmony import */ var _h_palette__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./h-palette */ "./src/main/js/controller/input/h-palette.js");
/* harmony import */ var _sv_palette__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sv-palette */ "./src/main/js/controller/input/sv-palette.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }














var COMPONENT_CONSTRAINT = new _constraint_composite__WEBPACK_IMPORTED_MODULE_0__["default"]({
  constraints: [new _constraint_range__WEBPACK_IMPORTED_MODULE_1__["default"]({
    max: 255,
    min: 0
  }), new _constraint_step__WEBPACK_IMPORTED_MODULE_2__["default"]({
    step: 1
  })]
});

var ColorPickerInputController =
/*#__PURE__*/
function () {
  function ColorPickerInputController(document, config) {
    var _this = this;

    _classCallCheck(this, ColorPickerInputController);

    this.onInputBlur_ = this.onInputBlur_.bind(this);
    this.onValueChange_ = this.onValueChange_.bind(this);
    this.value = config.value;
    this.value.emitter.on('change', this.onValueChange_);
    this.foldable = new _model_foldable__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.hPaletteIc_ = new _h_palette__WEBPACK_IMPORTED_MODULE_11__["default"](document, {
      value: this.value
    });
    this.svPaletteIc_ = new _sv_palette__WEBPACK_IMPORTED_MODULE_12__["default"](document, {
      value: this.value
    });
    var initialComps = this.value.rawValue.getComponents();
    var rgbValues = [0, 1, 2].map(function (index) {
      return new _model_input_value__WEBPACK_IMPORTED_MODULE_7__["default"](initialComps[index], COMPONENT_CONSTRAINT);
    });
    rgbValues.forEach(function (compValue, index) {
      compValue.emitter.on('change', function (rawValue) {
        var comps = _this.value.rawValue.getComponents();

        if (index === 0 || index === 1 || index === 2) {
          comps[index] = rawValue;
        }

        _this.value.rawValue = _construct(_model_color__WEBPACK_IMPORTED_MODULE_5__["default"], _toConsumableArray(comps));
      });
    });
    this.rgbIcs_ = rgbValues.map(function (compValue) {
      return new _number_text__WEBPACK_IMPORTED_MODULE_10__["default"](document, {
        formatter: new _formatter_number__WEBPACK_IMPORTED_MODULE_3__["default"](0),
        parser: _parser_number__WEBPACK_IMPORTED_MODULE_8__["default"],
        value: compValue
      });
    });
    this.view = new _view_input_color_picker__WEBPACK_IMPORTED_MODULE_9__["default"](document, {
      foldable: this.foldable,
      hPaletteInputView: this.hPaletteIc_.view,
      rgbInputViews: this.rgbIcs_.map(function (ic) {
        return ic.view;
      }),
      svPaletteInputView: this.svPaletteIc_.view,
      value: this.value
    });
    this.view.allFocusableElements.forEach(function (elem) {
      elem.addEventListener('blur', _this.onInputBlur_);
    });
  }

  _createClass(ColorPickerInputController, [{
    key: "onInputBlur_",
    value: function onInputBlur_(e) {
      var elem = this.view.element;
      var nextTarget = _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].forceCast(e.relatedTarget);

      if (!nextTarget || !elem.contains(nextTarget)) {
        this.foldable.expanded = false;
      }
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_() {
      var comps = this.value.rawValue.getComponents();
      this.rgbIcs_.forEach(function (ic, index) {
        ic.value.rawValue = comps[index];
      });
    }
  }]);

  return ColorPickerInputController;
}();



/***/ }),

/***/ "./src/main/js/controller/input/color-swatch-text.js":
/*!***********************************************************!*\
  !*** ./src/main/js/controller/input/color-swatch-text.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorSwatchTextInputController; });
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view_input_color_swatch_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view/input/color-swatch-text */ "./src/main/js/view/input/color-swatch-text.js");
/* harmony import */ var _input_color_swatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/color-swatch */ "./src/main/js/controller/input/color-swatch.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./src/main/js/controller/input/text.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var ColorSwatchTextInputController = function ColorSwatchTextInputController(document, config) {
  _classCallCheck(this, ColorSwatchTextInputController);

  this.value = config.value;
  this.swatchIc_ = new _input_color_swatch__WEBPACK_IMPORTED_MODULE_3__["default"](document, {
    value: this.value
  });
  this.textIc_ = new _text__WEBPACK_IMPORTED_MODULE_4__["default"](document, {
    formatter: config.formatter,
    parser: config.parser,
    value: this.value
  });
  this.view = new _view_input_color_swatch_text__WEBPACK_IMPORTED_MODULE_2__["default"](document, {
    swatchInputView: this.swatchIc_.view,
    textInputView: this.textIc_.view
  });
};



/***/ }),

/***/ "./src/main/js/controller/input/color-swatch.js":
/*!******************************************************!*\
  !*** ./src/main/js/controller/input/color-swatch.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorSwatchInputController; });
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view_input_color_swatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view/input/color-swatch */ "./src/main/js/view/input/color-swatch.js");
/* harmony import */ var _color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-picker */ "./src/main/js/controller/input/color-picker.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var ColorSwatchInputController =
/*#__PURE__*/
function () {
  function ColorSwatchInputController(document, config) {
    _classCallCheck(this, ColorSwatchInputController);

    this.onButtonBlur_ = this.onButtonBlur_.bind(this);
    this.onButtonClick_ = this.onButtonClick_.bind(this);
    this.value = config.value;
    this.pickerIc_ = new _color_picker__WEBPACK_IMPORTED_MODULE_4__["default"](document, {
      value: this.value
    });
    this.view = new _view_input_color_swatch__WEBPACK_IMPORTED_MODULE_3__["default"](document, {
      pickerInputView: this.pickerIc_.view,
      value: this.value
    });
    this.view.buttonElement.addEventListener('blur', this.onButtonBlur_);
    this.view.buttonElement.addEventListener('click', this.onButtonClick_);
  }

  _createClass(ColorSwatchInputController, [{
    key: "onButtonBlur_",
    value: function onButtonBlur_(e) {
      var elem = this.view.element;
      var nextTarget = _misc_flow_util__WEBPACK_IMPORTED_MODULE_0__["default"].forceCast(e.relatedTarget);

      if (!nextTarget || !elem.contains(nextTarget)) {
        this.pickerIc_.foldable.expanded = false;
      }
    }
  }, {
    key: "onButtonClick_",
    value: function onButtonClick_() {
      this.pickerIc_.foldable.expanded = !this.pickerIc_.foldable.expanded;
    }
  }]);

  return ColorSwatchInputController;
}();



/***/ }),

/***/ "./src/main/js/controller/input/h-palette.js":
/*!***************************************************!*\
  !*** ./src/main/js/controller/input/h-palette.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HPaletteInputController; });
/* harmony import */ var _misc_color_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/color-model */ "./src/main/js/misc/color-model.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _misc_pointer_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view_input_h_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../view/input/h-palette */ "./src/main/js/view/input/h-palette.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var HPaletteInputController =
/*#__PURE__*/
function () {
  function HPaletteInputController(document, config) {
    _classCallCheck(this, HPaletteInputController);

    this.onPointerDown_ = this.onPointerDown_.bind(this);
    this.onPointerMove_ = this.onPointerMove_.bind(this);
    this.onPointerUp_ = this.onPointerUp_.bind(this);
    this.value = config.value;
    this.view = new _view_input_h_palette__WEBPACK_IMPORTED_MODULE_5__["default"](document, {
      value: this.value
    });
    this.ptHandler_ = new _misc_pointer_handler__WEBPACK_IMPORTED_MODULE_2__["default"](document, this.view.canvasElement);
    this.ptHandler_.emitter.on('down', this.onPointerDown_);
    this.ptHandler_.emitter.on('move', this.onPointerMove_);
    this.ptHandler_.emitter.on('up', this.onPointerUp_);
  }

  _createClass(HPaletteInputController, [{
    key: "handlePointerEvent_",
    value: function handlePointerEvent_(d) {
      var hue = _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].map(d.py, 0, 1, 0, 360);
      var c = this.value.rawValue;

      var _ColorModel$rgbToHsv = _misc_color_model__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"].apply(_misc_color_model__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(c.getComponents())),
          _ColorModel$rgbToHsv2 = _slicedToArray(_ColorModel$rgbToHsv, 3),
          s = _ColorModel$rgbToHsv2[1],
          v = _ColorModel$rgbToHsv2[2];

      this.value.rawValue = _construct(_model_color__WEBPACK_IMPORTED_MODULE_3__["default"], _toConsumableArray(_misc_color_model__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"](hue, s, v)));
      this.view.update();
    }
  }, {
    key: "onPointerDown_",
    value: function onPointerDown_(d) {
      this.handlePointerEvent_(d);
    }
  }, {
    key: "onPointerMove_",
    value: function onPointerMove_(d) {
      this.handlePointerEvent_(d);
    }
  }, {
    key: "onPointerUp_",
    value: function onPointerUp_(d) {
      this.handlePointerEvent_(d);
    }
  }]);

  return HPaletteInputController;
}();



/***/ }),

/***/ "./src/main/js/controller/input/list.js":
/*!**********************************************!*\
  !*** ./src/main/js/controller/input/list.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListInputController; });
/* harmony import */ var _constraint_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constraint/list */ "./src/main/js/constraint/list.js");
/* harmony import */ var _constraint_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view_input_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view/input/list */ "./src/main/js/view/input/list.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







function findListItems(value) {
  var c = value.constraint ? _constraint_util__WEBPACK_IMPORTED_MODULE_1__["default"].findConstraint(value.constraint, _constraint_list__WEBPACK_IMPORTED_MODULE_0__["default"]) : null;

  if (!c) {
    return null;
  }

  return c.options;
}

var ListInputController =
/*#__PURE__*/
function () {
  function ListInputController(document, config) {
    _classCallCheck(this, ListInputController);

    this.onSelectChange_ = this.onSelectChange_.bind(this);
    this.value_ = config.value;
    this.listItems_ = findListItems(this.value_) || [];
    this.view_ = new _view_input_list__WEBPACK_IMPORTED_MODULE_4__["default"](document, {
      options: this.listItems_,
      stringifyValue: config.stringifyValue,
      value: this.value_
    });
    this.view_.selectElement.addEventListener('change', this.onSelectChange_);
  }

  _createClass(ListInputController, [{
    key: "onSelectChange_",
    value: function onSelectChange_(e) {
      var selectElem = _misc_flow_util__WEBPACK_IMPORTED_MODULE_2__["default"].forceCast(e.currentTarget);
      var optElem = selectElem.selectedOptions.item(0);

      if (!optElem) {
        return;
      }

      var itemIndex = Number(optElem.dataset.index);
      this.value_.rawValue = this.listItems_[itemIndex].value;
      this.view_.update();
    }
  }, {
    key: "value",
    get: function get() {
      return this.value_;
    }
  }, {
    key: "view",
    get: function get() {
      return this.view_;
    }
  }]);

  return ListInputController;
}();



/***/ }),

/***/ "./src/main/js/controller/input/number-text.js":
/*!*****************************************************!*\
  !*** ./src/main/js/controller/input/number-text.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberTextInputController; });
/* harmony import */ var _constraint_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.js");
/* harmony import */ var _constraint_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constraint/step */ "./src/main/js/constraint/step.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./src/main/js/controller/input/text.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







function findStep(value) {
  var c = value.constraint ? _constraint_util__WEBPACK_IMPORTED_MODULE_0__["default"].findConstraint(value.constraint, _constraint_step__WEBPACK_IMPORTED_MODULE_1__["default"]) : null;

  if (!c) {
    return null;
  }

  return c.step;
}

function estimateSuitableStep(value) {
  var step = findStep(value);
  return _misc_flow_util__WEBPACK_IMPORTED_MODULE_2__["default"].getOrDefault(step, 1);
}

var NumberTextInputController =
/*#__PURE__*/
function (_TextInputController) {
  _inherits(NumberTextInputController, _TextInputController);

  function NumberTextInputController(document, config) {
    var _this;

    _classCallCheck(this, NumberTextInputController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberTextInputController).call(this, document, config));
    _assertThisInitialized(_assertThisInitialized(_this)).onInputKeyDown_ = _this.onInputKeyDown_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.step_ = estimateSuitableStep(_this.value);

    _this.view.inputElement.addEventListener('keydown', _this.onInputKeyDown_);

    return _this;
  }

  _createClass(NumberTextInputController, [{
    key: "onInputKeyDown_",
    value: function onInputKeyDown_(e) {
      var step = this.step_ * (e.altKey ? 0.1 : 1) * (e.shiftKey ? 10 : 1);

      if (e.keyCode === 38) {
        this.value.rawValue += step;
        this.view.update();
      } else if (e.keyCode === 40) {
        this.value.rawValue -= step;
        this.view.update();
      }
    }
  }]);

  return NumberTextInputController;
}(_text__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/main/js/controller/input/slider-text.js":
/*!*****************************************************!*\
  !*** ./src/main/js/controller/input/slider-text.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderTextInputController; });
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view_input_slider_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view/input/slider-text */ "./src/main/js/view/input/slider-text.js");
/* harmony import */ var _number_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-text */ "./src/main/js/controller/input/number-text.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./src/main/js/controller/input/slider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var SliderTextInputController =
/*#__PURE__*/
function () {
  function SliderTextInputController(document, config) {
    _classCallCheck(this, SliderTextInputController);

    this.value_ = config.value;
    this.sliderIc_ = new _slider__WEBPACK_IMPORTED_MODULE_3__["default"](document, {
      value: config.value
    });
    this.textIc_ = new _number_text__WEBPACK_IMPORTED_MODULE_2__["default"](document, {
      formatter: config.formatter,
      parser: config.parser,
      value: config.value
    });
    this.view_ = new _view_input_slider_text__WEBPACK_IMPORTED_MODULE_1__["default"](document, {
      sliderInputView: this.sliderIc_.view,
      textInputView: this.textIc_.view
    });
  }

  _createClass(SliderTextInputController, [{
    key: "value",
    get: function get() {
      return this.value_;
    }
  }, {
    key: "view",
    get: function get() {
      return this.view_;
    }
  }]);

  return SliderTextInputController;
}();



/***/ }),

/***/ "./src/main/js/controller/input/slider.js":
/*!************************************************!*\
  !*** ./src/main/js/controller/input/slider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderInputController; });
/* harmony import */ var _constraint_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constraint/util */ "./src/main/js/constraint/util.js");
/* harmony import */ var _constraint_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constraint/range */ "./src/main/js/constraint/range.js");
/* harmony import */ var _misc_pointer_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view_input_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../view/input/slider */ "./src/main/js/view/input/slider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function findRange(value) {
  var c = value.constraint ? _constraint_util__WEBPACK_IMPORTED_MODULE_0__["default"].findConstraint(value.constraint, _constraint_range__WEBPACK_IMPORTED_MODULE_1__["default"]) : null;

  if (!c) {
    return [null, null];
  }

  return [c.minValue, c.maxValue];
}

function estimateSuitableRange(value) {
  var _findRange = findRange(value),
      _findRange2 = _slicedToArray(_findRange, 2),
      min = _findRange2[0],
      max = _findRange2[1];

  return [_misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(min, 0), _misc_flow_util__WEBPACK_IMPORTED_MODULE_4__["default"].getOrDefault(max, 100)];
}

var SliderInputController =
/*#__PURE__*/
function () {
  function SliderInputController(document, config) {
    _classCallCheck(this, SliderInputController);

    this.onPointerDown_ = this.onPointerDown_.bind(this);
    this.onPointerMove_ = this.onPointerMove_.bind(this);
    this.onPointerUp_ = this.onPointerUp_.bind(this);
    this.value = config.value;

    var _estimateSuitableRang = estimateSuitableRange(this.value),
        _estimateSuitableRang2 = _slicedToArray(_estimateSuitableRang, 2),
        min = _estimateSuitableRang2[0],
        max = _estimateSuitableRang2[1];

    this.minValue_ = min;
    this.maxValue_ = max;
    this.view = new _view_input_slider__WEBPACK_IMPORTED_MODULE_6__["default"](document, {
      maxValue: this.maxValue_,
      minValue: this.minValue_,
      value: this.value
    });
    this.ptHandler_ = new _misc_pointer_handler__WEBPACK_IMPORTED_MODULE_2__["default"](document, this.view.outerElement);
    this.ptHandler_.emitter.on('down', this.onPointerDown_);
    this.ptHandler_.emitter.on('move', this.onPointerMove_);
    this.ptHandler_.emitter.on('up', this.onPointerUp_);
  }

  _createClass(SliderInputController, [{
    key: "onPointerDown_",
    value: function onPointerDown_(d) {
      this.value.rawValue = _misc_number_util__WEBPACK_IMPORTED_MODULE_3__["default"].map(d.px, 0, 1, this.minValue_, this.maxValue_);
      this.view.update();
    }
  }, {
    key: "onPointerMove_",
    value: function onPointerMove_(d) {
      this.value.rawValue = _misc_number_util__WEBPACK_IMPORTED_MODULE_3__["default"].map(d.px, 0, 1, this.minValue_, this.maxValue_);
      this.view.update();
    }
  }, {
    key: "onPointerUp_",
    value: function onPointerUp_(d) {
      this.value.rawValue = _misc_number_util__WEBPACK_IMPORTED_MODULE_3__["default"].map(d.px, 0, 1, this.minValue_, this.maxValue_);
      this.view.update();
    }
  }]);

  return SliderInputController;
}();



/***/ }),

/***/ "./src/main/js/controller/input/sv-palette.js":
/*!****************************************************!*\
  !*** ./src/main/js/controller/input/sv-palette.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvPaletteInputController; });
/* harmony import */ var _misc_color_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/color-model */ "./src/main/js/misc/color-model.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _misc_pointer_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/pointer-handler */ "./src/main/js/misc/pointer-handler.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view_input_sv_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../view/input/sv-palette */ "./src/main/js/view/input/sv-palette.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var SvPaletteInputController =
/*#__PURE__*/
function () {
  function SvPaletteInputController(document, config) {
    _classCallCheck(this, SvPaletteInputController);

    this.onPointerDown_ = this.onPointerDown_.bind(this);
    this.onPointerMove_ = this.onPointerMove_.bind(this);
    this.onPointerUp_ = this.onPointerUp_.bind(this);
    this.value = config.value;
    this.view = new _view_input_sv_palette__WEBPACK_IMPORTED_MODULE_5__["default"](document, {
      value: this.value
    });
    this.ptHandler_ = new _misc_pointer_handler__WEBPACK_IMPORTED_MODULE_2__["default"](document, this.view.canvasElement);
    this.ptHandler_.emitter.on('down', this.onPointerDown_);
    this.ptHandler_.emitter.on('move', this.onPointerMove_);
    this.ptHandler_.emitter.on('up', this.onPointerUp_);
  }

  _createClass(SvPaletteInputController, [{
    key: "handlePointerEvent_",
    value: function handlePointerEvent_(d) {
      var saturation = _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].map(d.px, 0, 1, 0, 100);
      var value = _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].map(d.py, 0, 1, 100, 0);
      var c = this.value.rawValue;

      var _ColorModel$rgbToHsv = _misc_color_model__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"].apply(_misc_color_model__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(c.getComponents())),
          _ColorModel$rgbToHsv2 = _slicedToArray(_ColorModel$rgbToHsv, 1),
          h = _ColorModel$rgbToHsv2[0];

      this.value.rawValue = _construct(_model_color__WEBPACK_IMPORTED_MODULE_3__["default"], _toConsumableArray(_misc_color_model__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"](h, saturation, value)));
      this.view.update();
    }
  }, {
    key: "onPointerDown_",
    value: function onPointerDown_(d) {
      this.handlePointerEvent_(d);
    }
  }, {
    key: "onPointerMove_",
    value: function onPointerMove_(d) {
      this.handlePointerEvent_(d);
    }
  }, {
    key: "onPointerUp_",
    value: function onPointerUp_(d) {
      this.handlePointerEvent_(d);
    }
  }]);

  return SvPaletteInputController;
}();



/***/ }),

/***/ "./src/main/js/controller/input/text.js":
/*!**********************************************!*\
  !*** ./src/main/js/controller/input/text.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextInputController; });
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view_input_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view/input/text */ "./src/main/js/view/input/text.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var TextInputController =
/*#__PURE__*/
function () {
  function TextInputController(document, config) {
    _classCallCheck(this, TextInputController);

    this.onInputChange_ = this.onInputChange_.bind(this);
    this.parser_ = config.parser;
    this.value = config.value;
    this.view = new _view_input_text__WEBPACK_IMPORTED_MODULE_2__["default"](document, {
      formatter: config.formatter,
      value: this.value
    });
    this.view.inputElement.addEventListener('change', this.onInputChange_);
  }

  _createClass(TextInputController, [{
    key: "onInputChange_",
    value: function onInputChange_(e) {
      var _this = this;

      var inputElem = _misc_flow_util__WEBPACK_IMPORTED_MODULE_0__["default"].forceCast(e.currentTarget);
      var value = inputElem.value;
      _misc_flow_util__WEBPACK_IMPORTED_MODULE_0__["default"].ifNotEmpty(this.parser_(value), function (parsedValue) {
        _this.value.rawValue = parsedValue;
      });
      this.view.update();
    }
  }]);

  return TextInputController;
}();



/***/ }),

/***/ "./src/main/js/controller/monitor-binding.js":
/*!***************************************************!*\
  !*** ./src/main/js/controller/monitor-binding.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonitorBindingController; });
/* harmony import */ var _binding_monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../binding/monitor */ "./src/main/js/binding/monitor.js");
/* harmony import */ var _view_labeled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/labeled */ "./src/main/js/view/labeled.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var MonitorBindingController = function MonitorBindingController(document, config) {
  _classCallCheck(this, MonitorBindingController);

  this.binding = config.binding;
  this.controller = config.controller;
  this.view = new _view_labeled__WEBPACK_IMPORTED_MODULE_1__["default"](document, {
    label: config.label,
    view: this.controller.view
  });
};



/***/ }),

/***/ "./src/main/js/controller/monitor/graph.js":
/*!*************************************************!*\
  !*** ./src/main/js/controller/monitor/graph.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphMonitorController; });
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _model_graph_cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/graph-cursor */ "./src/main/js/model/graph-cursor.js");
/* harmony import */ var _model_monitor_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.js");
/* harmony import */ var _view_monitor_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view/monitor/graph */ "./src/main/js/view/monitor/graph.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var GraphMonitorController =
/*#__PURE__*/
function () {
  function GraphMonitorController(document, config) {
    _classCallCheck(this, GraphMonitorController);

    this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this);
    this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this);
    this.value = config.value;
    this.cursor_ = new _model_graph_cursor__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.view = new _view_monitor_graph__WEBPACK_IMPORTED_MODULE_3__["default"](document, {
      cursor: this.cursor_,
      formatter: config.formatter,
      maxValue: config.maxValue,
      minValue: config.minValue,
      value: this.value
    });
    this.view.graphElement.addEventListener('mouseleave', this.onGraphMouseLeave_);
    this.view.graphElement.addEventListener('mousemove', this.onGraphMouseMove_);
  }

  _createClass(GraphMonitorController, [{
    key: "onGraphMouseLeave_",
    value: function onGraphMouseLeave_() {
      this.cursor_.index = -1;
    }
  }, {
    key: "onGraphMouseMove_",
    value: function onGraphMouseMove_(e) {
      var bounds = this.view.graphElement.getBoundingClientRect();
      var x = e.offsetX;
      this.cursor_.index = Math.floor(_misc_number_util__WEBPACK_IMPORTED_MODULE_0__["default"].map(x, 0, bounds.width, 0, this.value.totalCount));
    }
  }]);

  return GraphMonitorController;
}();



/***/ }),

/***/ "./src/main/js/controller/monitor/multi-log.js":
/*!*****************************************************!*\
  !*** ./src/main/js/controller/monitor/multi-log.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiLogMonitorController; });
/* harmony import */ var _model_monitor_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.js");
/* harmony import */ var _view_monitor_multi_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view/monitor/multi-log */ "./src/main/js/view/monitor/multi-log.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var MultiLogMonitorController = function MultiLogMonitorController(document, config) {
  _classCallCheck(this, MultiLogMonitorController);

  this.value = config.value;
  this.view = new _view_monitor_multi_log__WEBPACK_IMPORTED_MODULE_1__["default"](document, {
    formatter: config.formatter,
    value: this.value
  });
};



/***/ }),

/***/ "./src/main/js/controller/monitor/single-log.js":
/*!******************************************************!*\
  !*** ./src/main/js/controller/monitor/single-log.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleLogMonitorController; });
/* harmony import */ var _model_monitor_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.js");
/* harmony import */ var _view_monitor_single_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../view/monitor/single-log */ "./src/main/js/view/monitor/single-log.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SingleLogMonitorController = function SingleLogMonitorController(document, config) {
  _classCallCheck(this, SingleLogMonitorController);

  this.value = config.value;
  this.view = new _view_monitor_single_log__WEBPACK_IMPORTED_MODULE_1__["default"](document, {
    formatter: config.formatter,
    value: this.value
  });
};



/***/ }),

/***/ "./src/main/js/controller/root.js":
/*!****************************************!*\
  !*** ./src/main/js/controller/root.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RootController; });
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/folder */ "./src/main/js/model/folder.js");
/* harmony import */ var _model_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/list */ "./src/main/js/model/list.js");
/* harmony import */ var _view_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/root */ "./src/main/js/view/root.js");
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder */ "./src/main/js/controller/folder.js");
/* harmony import */ var _input_binding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-binding */ "./src/main/js/controller/input-binding.js");
/* harmony import */ var _monitor_binding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monitor-binding */ "./src/main/js/controller/monitor-binding.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }










function createFolder(config) {
  if (!config.title) {
    return null;
  }

  return new _model_folder__WEBPACK_IMPORTED_MODULE_2__["default"](config.title, _misc_flow_util__WEBPACK_IMPORTED_MODULE_1__["default"].getOrDefault(config.expanded, true));
}

var RootController =
/*#__PURE__*/
function () {
  function RootController(document, config) {
    _classCallCheck(this, RootController);

    this.onFolderChange_ = this.onFolderChange_.bind(this);
    this.onRootFolderChange_ = this.onRootFolderChange_.bind(this);
    this.onTitleClick_ = this.onTitleClick_.bind(this);
    this.onUiControllerListAppend_ = this.onUiControllerListAppend_.bind(this);
    this.onInputChange_ = this.onInputChange_.bind(this);
    this.onMonitorUpdate_ = this.onMonitorUpdate_.bind(this);
    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.folder = createFolder(config);
    this.ucList_ = new _model_list__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.ucList_.emitter.on('append', this.onUiControllerListAppend_);
    this.doc_ = document;
    this.view = new _view_root__WEBPACK_IMPORTED_MODULE_4__["default"](this.doc_, {
      folder: this.folder
    });

    if (this.view.titleElement) {
      this.view.titleElement.addEventListener('click', this.onTitleClick_);
    }

    if (this.folder) {
      this.folder.emitter.on('change', this.onRootFolderChange_);
    }
  }

  _createClass(RootController, [{
    key: "onUiControllerListAppend_",
    value: function onUiControllerListAppend_(uc) {
      if (uc instanceof _input_binding__WEBPACK_IMPORTED_MODULE_6__["default"]) {
        var emitter = uc.binding.value.emitter;
        emitter.on('change', this.onInputChange_);
      } else if (uc instanceof _monitor_binding__WEBPACK_IMPORTED_MODULE_7__["default"]) {
        var _emitter = uc.binding.value.emitter;

        _emitter.on('update', this.onMonitorUpdate_);
      } else if (uc instanceof _folder__WEBPACK_IMPORTED_MODULE_5__["default"]) {
        var _emitter2 = uc.emitter;

        _emitter2.on('fold', this.onFolderChange_);

        _emitter2.on('inputchange', this.onInputChange_);

        _emitter2.on('monitorupdate', this.onMonitorUpdate_);
      }

      this.view.containerElement.appendChild(uc.view.element);
    }
  }, {
    key: "onTitleClick_",
    value: function onTitleClick_() {
      if (this.folder) {
        this.folder.expanded = !this.folder.expanded;
      }
    }
  }, {
    key: "onInputChange_",
    value: function onInputChange_(value) {
      this.emitter.emit('inputchange', [value]);
    }
  }, {
    key: "onMonitorUpdate_",
    value: function onMonitorUpdate_(value) {
      this.emitter.emit('monitorupdate', [value]);
    }
  }, {
    key: "onFolderChange_",
    value: function onFolderChange_() {
      this.emitter.emit('fold');
    }
  }, {
    key: "onRootFolderChange_",
    value: function onRootFolderChange_() {
      this.emitter.emit('fold');
    }
  }, {
    key: "document",
    get: function get() {
      return this.doc_;
    }
  }, {
    key: "uiControllerList",
    get: function get() {
      return this.ucList_;
    }
  }]);

  return RootController;
}();



/***/ }),

/***/ "./src/main/js/controller/separator.js":
/*!*********************************************!*\
  !*** ./src/main/js/controller/separator.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeparatorController; });
/* harmony import */ var _view_separator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/separator */ "./src/main/js/view/separator.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var SeparatorController = function SeparatorController(document) {
  _classCallCheck(this, SeparatorController);

  this.view = new _view_separator__WEBPACK_IMPORTED_MODULE_0__["default"](document);
};



/***/ }),

/***/ "./src/main/js/controller/ui-util.js":
/*!*******************************************!*\
  !*** ./src/main/js/controller/ui-util.js ***!
  \*******************************************/
/*! exports provided: findControllers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findControllers", function() { return findControllers; });
/* harmony import */ var _folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder */ "./src/main/js/controller/folder.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


function findControllers(uiControllers, controllerClass) {
  return uiControllers.reduce(function (results, uc) {
    if (uc instanceof _folder__WEBPACK_IMPORTED_MODULE_0__["default"]) {
      // eslint-disable-next-line no-use-before-define
      results.push.apply(results, _toConsumableArray(findControllers(uc.uiControllerList.items, controllerClass)));
    }

    if (uc instanceof controllerClass) {
      results.push(uc);
    }

    return results;
  }, []);
}

/***/ }),

/***/ "./src/main/js/converter/boolean.js":
/*!******************************************!*\
  !*** ./src/main/js/converter/boolean.js ***!
  \******************************************/
/*! exports provided: fromMixed, toString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMixed", function() { return fromMixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
function fromMixed(value) {
  if (value === 'false') {
    return false;
  }

  return !!value;
}
function toString(value) {
  return String(value);
}

/***/ }),

/***/ "./src/main/js/converter/color.js":
/*!****************************************!*\
  !*** ./src/main/js/converter/color.js ***!
  \****************************************/
/*! exports provided: fromMixed, toString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMixed", function() { return fromMixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _parser_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser/color */ "./src/main/js/parser/color.js");



function fromMixed(value) {
  if (typeof value === 'string') {
    var cv = Object(_parser_color__WEBPACK_IMPORTED_MODULE_2__["default"])(value);

    if (cv) {
      return cv;
    }
  }

  return new _model_color__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0, 0);
}
function toString(value) {
  var hexes = value.getComponents().map(function (comp) {
    var hex = _misc_number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(Math.floor(comp), 0, 255).toString(16);
    return hex.length === 1 ? "0".concat(hex) : hex;
  }).join('');
  return "#".concat(hexes);
}

/***/ }),

/***/ "./src/main/js/converter/number.js":
/*!*****************************************!*\
  !*** ./src/main/js/converter/number.js ***!
  \*****************************************/
/*! exports provided: fromMixed, toString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMixed", function() { return fromMixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony import */ var _parser_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parser/number */ "./src/main/js/parser/number.js");

function fromMixed(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    var pv = Object(_parser_number__WEBPACK_IMPORTED_MODULE_0__["default"])(value);

    if (pv !== null && pv !== undefined) {
      return pv;
    }
  }

  return 0;
}
function toString(value) {
  return String(value);
}

/***/ }),

/***/ "./src/main/js/converter/string.js":
/*!*****************************************!*\
  !*** ./src/main/js/converter/string.js ***!
  \*****************************************/
/*! exports provided: fromMixed, toString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMixed", function() { return fromMixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
function fromMixed(value) {
  return String(value);
}
function toString(value) {
  return value;
}

/***/ }),

/***/ "./src/main/js/formatter/color.js":
/*!****************************************!*\
  !*** ./src/main/js/formatter/color.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorFormatter; });
/* harmony import */ var _converter_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../converter/color */ "./src/main/js/converter/color.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/color */ "./src/main/js/model/color.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ColorFormatter =
/*#__PURE__*/
function () {
  function ColorFormatter() {
    _classCallCheck(this, ColorFormatter);
  }

  _createClass(ColorFormatter, [{
    key: "format",
    value: function format(value) {
      return _converter_color__WEBPACK_IMPORTED_MODULE_0__["toString"](value);
    }
  }], [{
    key: "rgb",
    value: function rgb(r, g, b) {
      var compsText = [_misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].constrain(Math.floor(r), 0, 255), _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].constrain(Math.floor(g), 0, 255), _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].constrain(Math.floor(b), 0, 255)].join(', ');
      return "rgb(".concat(compsText, ")");
    }
  }, {
    key: "hsl",
    value: function hsl(h, s, l) {
      var compsText = [(Math.floor(h) % 360 + 360) % 360, "".concat(_misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].constrain(Math.floor(s), 0, 100), "%"), "".concat(_misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].constrain(Math.floor(l), 0, 100), "%")].join(', ');
      return "hsl(".concat(compsText, ")");
    }
  }]);

  return ColorFormatter;
}();



/***/ }),

/***/ "./src/main/js/formatter/number.js":
/*!*****************************************!*\
  !*** ./src/main/js/formatter/number.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberFormatter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NumberFormatter =
/*#__PURE__*/
function () {
  function NumberFormatter(digits) {
    _classCallCheck(this, NumberFormatter);

    this.digits_ = digits;
  }

  _createClass(NumberFormatter, [{
    key: "format",
    value: function format(value) {
      return value.toFixed(this.digits_);
    }
  }, {
    key: "digits",
    get: function get() {
      return this.digits_;
    }
  }]);

  return NumberFormatter;
}();



/***/ }),

/***/ "./src/main/js/formatter/string.js":
/*!*****************************************!*\
  !*** ./src/main/js/formatter/string.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringFormatter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StringFormatter =
/*#__PURE__*/
function () {
  function StringFormatter() {
    _classCallCheck(this, StringFormatter);
  }

  _createClass(StringFormatter, [{
    key: "format",
    value: function format(value) {
      return value;
    }
  }]);

  return StringFormatter;
}();



/***/ }),

/***/ "./src/main/js/index.js":
/*!******************************!*\
  !*** ./src/main/js/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./tweakpane */ "./src/main/js/tweakpane.js").default;

/***/ }),

/***/ "./src/main/js/misc/class-name.js":
/*!****************************************!*\
  !*** ./src/main/js/misc/class-name.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return className; });
var PREFIX = 'tp';
var TYPE_TO_POSTFIX_MAP = {
  input: 'iv',
  monitor: 'mv',
  '': 'v'
};
function className(viewName, opt_viewType) {
  var viewType = opt_viewType || '';
  var postfix = TYPE_TO_POSTFIX_MAP[viewType];
  return function (opt_elementName, opt_modifier) {
    return [PREFIX, '-', viewName, postfix, opt_elementName ? "_".concat(opt_elementName) : '', opt_modifier ? "-".concat(opt_modifier) : ''].join('');
  };
}

/***/ }),

/***/ "./src/main/js/misc/color-model.js":
/*!*****************************************!*\
  !*** ./src/main/js/misc/color-model.js ***!
  \*****************************************/
/*! exports provided: rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return rgbToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony import */ var _number_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-util */ "./src/main/js/misc/number-util.js");

function rgbToHsl(r, g, b) {
  var rp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(r / 255, 0, 1);
  var gp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(g / 255, 0, 1);
  var bp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(b / 255, 0, 1);
  var cmax = Math.max(rp, gp, bp);
  var cmin = Math.min(rp, gp, bp);
  var c = cmax - cmin;
  var h = 0;
  var s = 0;
  var l = (cmin + cmax) / 2;

  if (c !== 0) {
    s = l > 0.5 ? c / (2 - cmin - cmax) : c / (cmax + cmin);

    if (rp === cmax) {
      h = (gp - bp) / c;
    } else if (gp === cmax) {
      h = 2 + (bp - rp) / c;
    } else {
      h = 4 + (rp - gp) / c;
    }

    h = h / 6 + (h < 0 ? 1 : 0);
  }

  return [h * 360, s * 100, l * 100];
}
function hslToRgb(h, s, l) {
  var hp = (h % 360 + 360) % 360;
  var sp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(s / 100, 0, 1);
  var lp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(l / 100, 0, 1);
  var c = (1 - Math.abs(2 * lp - 1)) * sp;
  var x = c * (1 - Math.abs(hp / 60 % 2 - 1));
  var m = lp - c / 2;
  var rp, gp, bp;

  if (hp >= 0 && hp < 60) {
    rp = c;
    gp = x;
    bp = 0;
  } else if (hp >= 60 && hp < 120) {
    rp = x;
    gp = c;
    bp = 0;
  } else if (hp >= 120 && hp < 180) {
    rp = 0;
    gp = c;
    bp = x;
  } else if (hp >= 180 && hp < 240) {
    rp = 0;
    gp = x;
    bp = c;
  } else if (hp >= 240 && hp < 300) {
    rp = x;
    gp = 0;
    bp = c;
  } else {
    rp = c;
    gp = 0;
    bp = x;
  }

  return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
}
function rgbToHsv(r, g, b) {
  var rp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(r / 255, 0, 1);
  var gp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(g / 255, 0, 1);
  var bp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(b / 255, 0, 1);
  var cmax = Math.max(rp, gp, bp);
  var cmin = Math.min(rp, gp, bp);
  var d = cmax - cmin;
  var h;

  if (d === 0) {
    h = 0;
  } else if (cmax === rp) {
    h = 60 * (((gp - bp) / d % 6 + 6) % 6);
  } else if (cmax === gp) {
    h = 60 * ((bp - rp) / d + 2);
  } else {
    h = 60 * ((rp - gp) / d + 4);
  }

  var s = cmax === 0 ? 0 : d / cmax;
  var v = cmax;
  return [h, s * 100, v * 100];
}
function hsvToRgb(h, s, v) {
  var hp = (h % 360 + 360) % 360;
  var sp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(s / 100, 0, 1);
  var vp = _number_util__WEBPACK_IMPORTED_MODULE_0__["default"].constrain(v / 100, 0, 1);
  var c = vp * sp;
  var x = c * (1 - Math.abs(hp / 60 % 2 - 1));
  var m = vp - c;
  var rp, gp, bp;

  if (hp >= 0 && hp < 60) {
    rp = c;
    gp = x;
    bp = 0;
  } else if (hp >= 60 && hp < 120) {
    rp = x;
    gp = c;
    bp = 0;
  } else if (hp >= 120 && hp < 180) {
    rp = 0;
    gp = c;
    bp = x;
  } else if (hp >= 180 && hp < 240) {
    rp = 0;
    gp = x;
    bp = c;
  } else if (hp >= 240 && hp < 300) {
    rp = x;
    gp = 0;
    bp = c;
  } else {
    rp = c;
    gp = 0;
    bp = x;
  }

  return [(rp + m) * 255, (gp + m) * 255, (bp + m) * 255];
}

/***/ }),

/***/ "./src/main/js/misc/dom-util.js":
/*!**************************************!*\
  !*** ./src/main/js/misc/dom-util.js ***!
  \**************************************/
/*! exports provided: forceReflow, disableTransitionTemporarily, supportsTouch, getWindowDocument, getCanvasContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceReflow", function() { return forceReflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableTransitionTemporarily", function() { return disableTransitionTemporarily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsTouch", function() { return supportsTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowDocument", function() { return getWindowDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanvasContext", function() { return getCanvasContext; });
/* harmony import */ var _flow_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flow-util */ "./src/main/js/misc/flow-util.js");

function forceReflow(element) {
  element.offsetHeight;
}
function disableTransitionTemporarily(element, callback) {
  var t = element.style.transition;
  element.style.transition = 'none';
  callback();
  element.style.transition = t;
}
function supportsTouch(document) {
  return document.ontouchstart !== undefined;
}
function getWindowDocument() {
  var globalObj = _flow_util__WEBPACK_IMPORTED_MODULE_0__["default"].forceCast(new Function('return this')());
  return globalObj.document;
}

function isBrowser() {
  // Webpack defines process.browser = true;
  // https://github.com/webpack/node-libs-browser
  // https://github.com/defunctzombie/node-process
  return !!process.browser;
}

function getCanvasContext(canvasElement) {
  // HTMLCanvasElement.prototype.getContext is not defined on testing environment
  return isBrowser() ? canvasElement.getContext('2d') : null;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/main/js/misc/emitter.js":
/*!*************************************!*\
  !*** ./src/main/js/misc/emitter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Emitter; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Emitter =
/*#__PURE__*/
function () {
  function Emitter() {
    _classCallCheck(this, Emitter);

    this.observers_ = {};
  }

  _createClass(Emitter, [{
    key: "on",
    value: function on(eventName, handler) {
      var observers = this.observers_[eventName];

      if (!observers) {
        observers = this.observers_[eventName] = [];
      }

      observers.push({
        handler: handler
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(eventName, handler) {
      this.observers_[eventName] = this.observers_[eventName].filter(function (observer) {
        return observer.handler !== handler;
      });
      return this;
    }
  }, {
    key: "emit",
    value: function emit(eventName, opt_args) {
      var observers = this.observers_[eventName];

      if (!observers) {
        return;
      }

      observers.forEach(function (observer) {
        var handlerArgs = opt_args || [];
        observer.handler.apply(observer, _toConsumableArray(handlerArgs));
      });
    }
  }]);

  return Emitter;
}();



/***/ }),

/***/ "./src/main/js/misc/flow-util.js":
/*!***************************************!*\
  !*** ./src/main/js/misc/flow-util.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var FlowUtil = {
  forceCast: function forceCast(v) {
    return v;
  },
  getOrDefault: function getOrDefault(value, defaultValue) {
    return value !== null && value !== undefined ? value : defaultValue;
  },
  ifNotEmpty: function ifNotEmpty(value, thenFn, elseFn) {
    if (value !== null && value !== undefined) {
      thenFn(value);
    } else if (elseFn) {
      elseFn();
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FlowUtil);

/***/ }),

/***/ "./src/main/js/misc/number-util.js":
/*!*****************************************!*\
  !*** ./src/main/js/misc/number-util.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NumberUtil = {
  map: function map(value, start1, end1, start2, end2) {
    var p = (value - start1) / (end1 - start1);
    return start2 + p * (end2 - start2);
  },
  getDecimalDigits: function getDecimalDigits(value) {
    var text = String(value.toFixed(10));
    var frac = text.split('.')[1];
    return frac.replace(/0+$/, '').length;
  },
  constrain: function constrain(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (NumberUtil);

/***/ }),

/***/ "./src/main/js/misc/pane-error.js":
/*!****************************************!*\
  !*** ./src/main/js/misc/pane-error.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaneError; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createMessage(config) {
  if (config.type === 'invalidparams') {
    return "Invalid parameters for ".concat(config.context.name);
  }

  if (config.type === 'nomatchingcontroller') {
    return "No matching controller for ".concat(config.context.key);
  }

  return 'Unexpected error';
}

var PaneError = function PaneError(config) {
  _classCallCheck(this, PaneError);

  this.message = createMessage(config);
  this.name = this.constructor.name;
  this.stack = new Error(this.message).stack;
  this.type = config.type;
};


PaneError.prototype = Object.create(Error.prototype);
PaneError.prototype.constructor = PaneError;

/***/ }),

/***/ "./src/main/js/misc/pointer-handler.js":
/*!*********************************************!*\
  !*** ./src/main/js/misc/pointer-handler.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PointerHandler; });
/* harmony import */ var _dom_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-util */ "./src/main/js/misc/dom-util.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./src/main/js/misc/emitter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




// Handles both mouse and touch events
var PointerHandler =
/*#__PURE__*/
function () {
  function PointerHandler(document, element) {
    _classCallCheck(this, PointerHandler);

    this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this);
    this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this);
    this.onMouseDown_ = this.onMouseDown_.bind(this);
    this.onTouchMove_ = this.onTouchMove_.bind(this);
    this.onTouchStart_ = this.onTouchStart_.bind(this);
    this.document = document;
    this.element = element;
    this.emitter = new _emitter__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.pressed_ = false;

    if (_dom_util__WEBPACK_IMPORTED_MODULE_0__["supportsTouch"](this.document)) {
      element.addEventListener('touchstart', this.onTouchStart_);
      element.addEventListener('touchmove', this.onTouchMove_);
    } else {
      element.addEventListener('mousedown', this.onMouseDown_);
      this.document.addEventListener('mousemove', this.onDocumentMouseMove_);
      this.document.addEventListener('mouseup', this.onDocumentMouseUp_);
    }
  }

  _createClass(PointerHandler, [{
    key: "computePosition_",
    value: function computePosition_(offsetX, offsetY) {
      var rect = this.element.getBoundingClientRect();
      return {
        px: offsetX / rect.width,
        py: offsetY / rect.height
      };
    }
  }, {
    key: "onMouseDown_",
    value: function onMouseDown_(e) {
      // Prevent native text selection
      e.preventDefault();
      this.pressed_ = true;
      this.emitter.emit('down', [this.computePosition_(e.offsetX, e.offsetY)]);
    }
  }, {
    key: "onDocumentMouseMove_",
    value: function onDocumentMouseMove_(e) {
      if (!this.pressed_) {
        return;
      }

      var win = this.document.defaultView;
      var rect = this.element.getBoundingClientRect();
      this.emitter.emit('move', [this.computePosition_(e.pageX - (win.scrollX + rect.left), e.pageY - (win.scrollY + rect.top))]);
    }
  }, {
    key: "onDocumentMouseUp_",
    value: function onDocumentMouseUp_(e) {
      if (!this.pressed_) {
        return;
      }

      this.pressed_ = false;
      var win = this.document.defaultView;
      var rect = this.element.getBoundingClientRect();
      this.emitter.emit('up', [this.computePosition_(e.pageX - (win.scrollX + rect.left), e.pageY - (win.scrollY + rect.top))]);
    }
  }, {
    key: "onTouchStart_",
    value: function onTouchStart_(e) {
      // Prevent native page scroll
      e.preventDefault();
      var touch = e.targetTouches[0];
      var rect = this.element.getBoundingClientRect();
      this.emitter.emit('down', [this.computePosition_(touch.clientX - rect.left, touch.clientY - rect.top)]);
    }
  }, {
    key: "onTouchMove_",
    value: function onTouchMove_(e) {
      var touch = e.targetTouches[0];
      var rect = this.element.getBoundingClientRect();
      this.emitter.emit('move', [this.computePosition_(touch.clientX - rect.left, touch.clientY - rect.top)]);
    }
  }]);

  return PointerHandler;
}();



/***/ }),

/***/ "./src/main/js/misc/ticker/interval.js":
/*!*********************************************!*\
  !*** ./src/main/js/misc/ticker/interval.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntervalTicker; });
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emitter */ "./src/main/js/misc/emitter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var IntervalTicker =
/*#__PURE__*/
function () {
  function IntervalTicker(_document, interval) {
    var _this = this;

    _classCallCheck(this, IntervalTicker);

    this.onTick_ = this.onTick_.bind(this);
    this.onWindowBlur_ = this.onWindowBlur_.bind(this);
    this.onWindowFocus_ = this.onWindowFocus_.bind(this);
    this.active_ = true;
    this.emitter = new _emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();

    if (interval > 0) {
      this.id_ = setInterval(function () {
        if (!_this.active_) {
          return;
        }

        _this.onTick_();
      }, interval);
    } // TODO: Stop on blur?
    //		const win = document.defaultView;
    //		if (win) {
    //			win.addEventListener('blur', this.onWindowBlur_);
    //			win.addEventListener('focus', this.onWindowFocus_);
    //		}

  }

  _createClass(IntervalTicker, [{
    key: "dispose",
    value: function dispose() {
      if (this.id_) {
        clearInterval(this.id_);
        this.id_ = null;
      }
    }
  }, {
    key: "onTick_",
    value: function onTick_() {
      this.emitter.emit('tick');
    }
  }, {
    key: "onWindowBlur_",
    value: function onWindowBlur_() {
      this.active_ = false;
    }
  }, {
    key: "onWindowFocus_",
    value: function onWindowFocus_() {
      this.active_ = true;
    }
  }]);

  return IntervalTicker;
}();



/***/ }),

/***/ "./src/main/js/model/button.js":
/*!*************************************!*\
  !*** ./src/main/js/model/button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Button =
/*#__PURE__*/
function () {
  function Button(title) {
    _classCallCheck(this, Button);

    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.title = title;
  }

  _createClass(Button, [{
    key: "click",
    value: function click() {
      this.emitter.emit('click');
    }
  }]);

  return Button;
}();



/***/ }),

/***/ "./src/main/js/model/color.js":
/*!************************************!*\
  !*** ./src/main/js/model/color.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Color; });
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/number-util */ "./src/main/js/misc/number-util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




function constrainComponent(comp) {
  return _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].constrain(comp, 0, 255);
}

var Color =
/*#__PURE__*/
function () {
  function Color(r, g, b) {
    _classCallCheck(this, Color);

    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.comps_ = [constrainComponent(r), constrainComponent(g), constrainComponent(b)];
  }

  _createClass(Color, [{
    key: "getComponents",
    value: function getComponents() {
      return this.comps_;
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        r: this.comps_[0],
        g: this.comps_[1],
        b: this.comps_[2]
      };
    }
  }]);

  return Color;
}();



/***/ }),

/***/ "./src/main/js/model/foldable.js":
/*!***************************************!*\
  !*** ./src/main/js/model/foldable.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Foldable; });
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Foldable =
/*#__PURE__*/
function () {
  function Foldable() {
    _classCallCheck(this, Foldable);

    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.expanded_ = false;
  }

  _createClass(Foldable, [{
    key: "expanded",
    get: function get() {
      return this.expanded_;
    },
    set: function set(expanded) {
      var changed = this.expanded_ !== expanded;

      if (changed) {
        this.expanded_ = expanded;
        this.emitter.emit('change');
      }
    }
  }]);

  return Foldable;
}();



/***/ }),

/***/ "./src/main/js/model/folder.js":
/*!*************************************!*\
  !*** ./src/main/js/model/folder.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Folder; });
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Folder =
/*#__PURE__*/
function () {
  function Folder(title, expanded) {
    _classCallCheck(this, Folder);

    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.expanded_ = expanded;
    this.expandedHeight_ = null;
    this.title = title;
  }

  _createClass(Folder, [{
    key: "expanded",
    get: function get() {
      return this.expanded_;
    },
    set: function set(expanded) {
      var changed = this.expanded_ !== expanded;

      if (changed) {
        this.expanded_ = expanded;
        this.emitter.emit('change');
      }
    }
  }, {
    key: "expandedHeight",
    get: function get() {
      return this.expandedHeight_;
    },
    set: function set(expandedHeight) {
      var changed = this.expandedHeight_ !== expandedHeight;

      if (changed) {
        this.expandedHeight_ = expandedHeight;
        this.emitter.emit('change');
      }
    }
  }]);

  return Folder;
}();



/***/ }),

/***/ "./src/main/js/model/graph-cursor.js":
/*!*******************************************!*\
  !*** ./src/main/js/model/graph-cursor.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphCursor; });
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GraphCursor =
/*#__PURE__*/
function () {
  function GraphCursor() {
    _classCallCheck(this, GraphCursor);

    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.index_ = -1;
  }

  _createClass(GraphCursor, [{
    key: "index",
    get: function get() {
      return this.index_;
    },
    set: function set(index) {
      var changed = this.index_ !== index;

      if (changed) {
        this.index_ = index;
        this.emitter.emit('change', [index]);
      }
    }
  }]);

  return GraphCursor;
}();



/***/ }),

/***/ "./src/main/js/model/input-value.js":
/*!******************************************!*\
  !*** ./src/main/js/model/input-value.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputValue; });
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var InputValue =
/*#__PURE__*/
function () {
  function InputValue(initialValue, constraint) {
    _classCallCheck(this, InputValue);

    this.constraint_ = constraint;
    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.rawValue_ = initialValue;
  }

  _createClass(InputValue, [{
    key: "constraint",
    get: function get() {
      return this.constraint_;
    }
  }, {
    key: "rawValue",
    get: function get() {
      return this.rawValue_;
    },
    set: function set(rawValue) {
      var constrainedValue = this.constraint_ ? this.constraint_.constrain(rawValue) : rawValue;
      var changed = !this.constructor.equalsValue(this.rawValue_, constrainedValue);

      if (changed) {
        this.rawValue_ = constrainedValue;
        this.emitter.emit('change', [constrainedValue]);
      }
    }
  }], [{
    key: "equalsValue",
    value: function equalsValue(v1, v2) {
      return v1 === v2;
    }
  }]);

  return InputValue;
}();



/***/ }),

/***/ "./src/main/js/model/list.js":
/*!***********************************!*\
  !*** ./src/main/js/model/list.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.items_ = [];
  }

  _createClass(List, [{
    key: "append",
    value: function append(item) {
      this.items_.push(item);
      this.emitter.emit('append', [item]);
    }
  }, {
    key: "items",
    get: function get() {
      return this.items_;
    }
  }]);

  return List;
}();



/***/ }),

/***/ "./src/main/js/model/monitor-value.js":
/*!********************************************!*\
  !*** ./src/main/js/model/monitor-value.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonitorValue; });
/* harmony import */ var _misc_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/emitter */ "./src/main/js/misc/emitter.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MonitorValue =
/*#__PURE__*/
function () {
  function MonitorValue(totalCount) {
    _classCallCheck(this, MonitorValue);

    this.emitter = new _misc_emitter__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.rawValues_ = [];
    this.totalCount_ = totalCount;
  }

  _createClass(MonitorValue, [{
    key: "append",
    value: function append(rawValue) {
      this.rawValues_.push(rawValue);

      if (this.rawValues_.length > this.totalCount_) {
        this.rawValues_.splice(0, this.rawValues_.length - this.totalCount_);
      }

      this.emitter.emit('update', [rawValue]);
    }
  }, {
    key: "rawValues",
    get: function get() {
      return this.rawValues_;
    }
  }, {
    key: "totalCount",
    get: function get() {
      return this.totalCount_;
    }
  }]);

  return MonitorValue;
}();



/***/ }),

/***/ "./src/main/js/model/target.js":
/*!*************************************!*\
  !*** ./src/main/js/model/target.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Target; });
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/flow-util */ "./src/main/js/misc/flow-util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Target =
/*#__PURE__*/
function () {
  function Target(object, key, opt_id) {
    _classCallCheck(this, Target);

    this.obj_ = object;
    this.key_ = key;
    this.presetKey_ = _misc_flow_util__WEBPACK_IMPORTED_MODULE_0__["default"].getOrDefault(opt_id, key);
  }

  _createClass(Target, [{
    key: "read",
    value: function read() {
      return this.obj_[this.key_];
    }
  }, {
    key: "write",
    value: function write(value) {
      this.obj_[this.key_] = value;
    }
  }, {
    key: "key",
    get: function get() {
      return this.key_;
    }
  }, {
    key: "presetKey",
    get: function get() {
      return this.presetKey_;
    }
  }]);

  return Target;
}();



/***/ }),

/***/ "./src/main/js/parser/color.js":
/*!*************************************!*\
  !*** ./src/main/js/parser/color.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/color */ "./src/main/js/model/color.js");

var SUB_PARSERS = [// #aabbcc
function (text) {
  var matches = text.match(/^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);

  if (!matches) {
    return null;
  }

  return new _model_color__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(matches[1], 16), parseInt(matches[2], 16), parseInt(matches[3], 16));
}, // #abc
function (text) {
  var matches = text.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);

  if (!matches) {
    return null;
  }

  return new _model_color__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(matches[1] + matches[1], 16), parseInt(matches[2] + matches[2], 16), parseInt(matches[3] + matches[3], 16));
},,];

var ColorParser = function ColorParser(text) {
  return SUB_PARSERS.reduce(function (result, subparser) {
    return result ? result : subparser(text);
  }, null);
};

/* harmony default export */ __webpack_exports__["default"] = (ColorParser);

/***/ }),

/***/ "./src/main/js/parser/number.js":
/*!**************************************!*\
  !*** ./src/main/js/parser/number.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NumberParser = function NumberParser(text) {
  var num = parseFloat(text);

  if (isNaN(num)) {
    return null;
  }

  return num;
};

/* harmony default export */ __webpack_exports__["default"] = (NumberParser);

/***/ }),

/***/ "./src/main/js/tweakpane.js":
/*!**********************************!*\
  !*** ./src/main/js/tweakpane.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tweakpane; });
/* harmony import */ var _sass_bundle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/bundle.scss */ "./src/main/sass/bundle.scss");
/* harmony import */ var _sass_bundle_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_bundle_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/root */ "./src/main/js/api/root.js");
/* harmony import */ var _controller_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/root */ "./src/main/js/controller/root.js");
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _misc_dom_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./misc/dom-util */ "./src/main/js/misc/dom-util.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./misc/flow-util */ "./src/main/js/misc/flow-util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








function createDefaultWrapperElement(document) {
  var elem = document.createElement('div');
  elem.classList.add(Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_3__["default"])('dfw')());

  if (document.body) {
    document.body.appendChild(elem);
  }

  return elem;
}

function embedDefaultStyleIfNeeded(document) {
  var MARKER = 'tweakpane';

  if (document.querySelector("style[data-for=".concat(MARKER, "]"))) {
    return;
  }

  var styleElem = document.createElement('style');
  styleElem.dataset.for = MARKER;
  styleElem.textContent = _sass_bundle_scss__WEBPACK_IMPORTED_MODULE_0___default.a.toString();

  if (document.head) {
    document.head.appendChild(styleElem);
  }
}

var Tweakpane =
/*#__PURE__*/
function (_RootApi) {
  _inherits(Tweakpane, _RootApi);

  function Tweakpane(opt_config) {
    var _this;

    _classCallCheck(this, Tweakpane);

    var config = opt_config || {};
    var document = _misc_flow_util__WEBPACK_IMPORTED_MODULE_5__["default"].getOrDefault(config.document, _misc_dom_util__WEBPACK_IMPORTED_MODULE_4__["getWindowDocument"]());
    embedDefaultStyleIfNeeded(document);
    var rootController = new _controller_root__WEBPACK_IMPORTED_MODULE_2__["default"](document, {
      title: config.title
    });
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tweakpane).call(this, rootController));
    var containerElem = config.container || createDefaultWrapperElement(document);
    containerElem.appendChild(_this.element);
    return _this;
  }

  return Tweakpane;
}(_api_root__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/main/js/view/button.js":
/*!************************************!*\
  !*** ./src/main/js/view/button.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/button */ "./src/main/js/model/button.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('btn');

var ButtonView =
/*#__PURE__*/
function (_View) {
  _inherits(ButtonView, _View);

  function ButtonView(document, config) {
    var _this;

    _classCallCheck(this, ButtonView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonView).call(this, document));
    _this.button = config.button;

    _this.element.classList.add(className());

    var buttonElem = document.createElement('button');
    buttonElem.classList.add(className('b'));
    buttonElem.textContent = _this.button.title;

    _this.element.appendChild(buttonElem);

    _this.buttonElem_ = buttonElem;
    return _this;
  }

  _createClass(ButtonView, [{
    key: "buttonElement",
    get: function get() {
      return this.buttonElem_;
    }
  }]);

  return ButtonView;
}(_view__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/main/js/view/folder.js":
/*!************************************!*\
  !*** ./src/main/js/view/folder.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FolderView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _misc_flow_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../misc/flow-util */ "./src/main/js/misc/flow-util.js");
/* harmony import */ var _model_folder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/folder */ "./src/main/js/model/folder.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('fld');

var FolderView =
/*#__PURE__*/
function (_View) {
  _inherits(FolderView, _View);

  function FolderView(document, config) {
    var _this;

    _classCallCheck(this, FolderView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FolderView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onFolderChange_ = _this.onFolderChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.folder_ = config.folder;

    _this.folder_.emitter.on('change', _this.onFolderChange_);

    _this.element.classList.add(className());

    var titleElem = document.createElement('button');
    titleElem.classList.add(className('t'));
    titleElem.textContent = _this.folder_.title;

    _this.element.appendChild(titleElem);

    _this.titleElem_ = titleElem;
    var markElem = document.createElement('div');
    markElem.classList.add(className('m'));

    _this.titleElem_.appendChild(markElem);

    var containerElem = document.createElement('div');
    containerElem.classList.add(className('c'));

    _this.element.appendChild(containerElem);

    _this.containerElem_ = containerElem;

    _this.applyModel_();

    return _this;
  }

  _createClass(FolderView, [{
    key: "applyModel_",
    value: function applyModel_() {
      var _this2 = this;

      var expanded = this.folder_.expanded;
      var expandedClass = className(null, 'expanded');

      if (expanded) {
        this.element.classList.add(expandedClass);
      } else {
        this.element.classList.remove(expandedClass);
      }

      _misc_flow_util__WEBPACK_IMPORTED_MODULE_1__["default"].ifNotEmpty(this.folder_.expandedHeight, function (expandedHeight) {
        var containerHeight = expanded ? expandedHeight : 0;
        _this2.containerElem_.style.height = "".concat(containerHeight, "px");
      }, function () {
        _this2.containerElem_.style.height = expanded ? 'auto' : '0px';
      });
    }
  }, {
    key: "onFolderChange_",
    value: function onFolderChange_() {
      this.applyModel_();
    }
  }, {
    key: "titleElement",
    get: function get() {
      return this.titleElem_;
    }
  }, {
    key: "containerElement",
    get: function get() {
      return this.containerElem_;
    }
  }]);

  return FolderView;
}(_view__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/checkbox.js":
/*!********************************************!*\
  !*** ./src/main/js/view/input/checkbox.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxInputView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('ckb', 'input');

var CheckboxInputView =
/*#__PURE__*/
function (_View) {
  _inherits(CheckboxInputView, _View);

  function CheckboxInputView(document, config) {
    var _this;

    _classCallCheck(this, CheckboxInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxInputView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueChange_ = _this.onValueChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.element.classList.add(className());

    var labelElem = document.createElement('label');
    labelElem.classList.add(className('l'));

    _this.element.appendChild(labelElem);

    var inputElem = document.createElement('input');
    inputElem.classList.add(className('i'));
    inputElem.type = 'checkbox';
    labelElem.appendChild(inputElem);
    _this.inputElem_ = inputElem;
    var markElem = document.createElement('div');
    markElem.classList.add(className('m'));
    labelElem.appendChild(markElem);
    config.value.emitter.on('change', _this.onValueChange_);
    _this.value = config.value;

    _this.update();

    return _this;
  }

  _createClass(CheckboxInputView, [{
    key: "update",
    value: function update() {
      this.inputElem_.checked = this.value.rawValue;
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_() {
      this.update();
    }
  }, {
    key: "inputElement",
    get: function get() {
      return this.inputElem_;
    }
  }]);

  return CheckboxInputView;
}(_view__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/color-picker.js":
/*!************************************************!*\
  !*** ./src/main/js/view/input/color-picker.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPickerInputView; });
/* harmony import */ var _formatter_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../formatter/number */ "./src/main/js/formatter/number.js");
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_foldable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/foldable */ "./src/main/js/model/foldable.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
/* harmony import */ var _h_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./h-palette */ "./src/main/js/view/input/h-palette.js");
/* harmony import */ var _sv_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sv-palette */ "./src/main/js/view/input/sv-palette.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./text */ "./src/main/js/view/input/text.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_1__["default"])('clp', 'input');

var ColorPickerInputView =
/*#__PURE__*/
function (_View) {
  _inherits(ColorPickerInputView, _View);

  function ColorPickerInputView(document, config) {
    var _this;

    _classCallCheck(this, ColorPickerInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorPickerInputView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onFoldableChange_ = _this.onFoldableChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueChange_ = _this.onValueChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.compFormatter_ = new _formatter_number__WEBPACK_IMPORTED_MODULE_0__["default"](0);
    _this.value = config.value;

    _this.value.emitter.on('change', _this.onValueChange_);

    _this.foldable = config.foldable;

    _this.foldable.emitter.on('change', _this.onFoldableChange_);

    _this.element.classList.add(className());

    var plElem = document.createElement('div');
    plElem.classList.add(className('pl'));
    var svElem = document.createElement('div');
    svElem.classList.add(className('sv'));
    _this.svPaletteView_ = config.svPaletteInputView;
    svElem.appendChild(_this.svPaletteView_.element);
    plElem.appendChild(svElem);
    var hElem = document.createElement('div');
    hElem.classList.add(className('h'));
    _this.hPaletteView_ = config.hPaletteInputView;
    hElem.appendChild(_this.hPaletteView_.element);
    plElem.appendChild(hElem);

    _this.element.appendChild(plElem);

    var inputElems = document.createElement('div');
    inputElems.classList.add(className('is'));
    _this.rgbInputViews_ = config.rgbInputViews;

    _this.rgbInputViews_.forEach(function (iv, index) {
      var elem = document.createElement('div');
      elem.classList.add(className('iw'));
      var labelElem = document.createElement('label');
      labelElem.classList.add(className('il'));
      labelElem.textContent = ['R', 'G', 'B'][index];
      elem.appendChild(labelElem);
      elem.appendChild(iv.element);
      inputElems.appendChild(elem);
    });

    _this.element.appendChild(inputElems);

    _this.update();

    return _this;
  }

  _createClass(ColorPickerInputView, [{
    key: "update",
    value: function update() {
      if (this.foldable.expanded) {
        this.element.classList.add(className(null, 'expanded'));
      } else {
        this.element.classList.remove(className(null, 'expanded'));
      }

      this.rgbInputViews_.forEach(function (iv) {
        iv.update();
      });
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_() {
      this.update();
    }
  }, {
    key: "onFoldableChange_",
    value: function onFoldableChange_() {
      this.update();
    }
  }, {
    key: "allFocusableElements",
    get: function get() {
      return [].concat(this.hPaletteView_.canvasElement, this.svPaletteView_.canvasElement, this.rgbInputViews_.map(function (iv) {
        return iv.inputElement;
      }));
    }
  }]);

  return ColorPickerInputView;
}(_view__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/color-swatch-text.js":
/*!*****************************************************!*\
  !*** ./src/main/js/view/input/color-swatch-text.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorSwatchTextInputView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _input_color_swatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/color-swatch */ "./src/main/js/view/input/color-swatch.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./src/main/js/view/input/text.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('cswtxt', 'input');

var ColorSwatchTextInputView =
/*#__PURE__*/
function (_View) {
  _inherits(ColorSwatchTextInputView, _View);

  function ColorSwatchTextInputView(document, config) {
    var _this;

    _classCallCheck(this, ColorSwatchTextInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorSwatchTextInputView).call(this, document));

    _this.element.classList.add(className());

    var swatchElem = document.createElement('div');
    swatchElem.classList.add(className('s'));
    _this.swatchInputView_ = config.swatchInputView;
    swatchElem.appendChild(_this.swatchInputView_.element);

    _this.element.appendChild(swatchElem);

    var textElem = document.createElement('div');
    textElem.classList.add(className('t'));
    _this.textInputView_ = config.textInputView;
    textElem.appendChild(_this.textInputView_.element);

    _this.element.appendChild(textElem);

    return _this;
  }

  _createClass(ColorSwatchTextInputView, [{
    key: "update",
    value: function update() {
      this.swatchInputView_.update();
      this.textInputView_.update();
    }
  }, {
    key: "value",
    get: function get() {
      return this.textInputView_.value;
    }
  }]);

  return ColorSwatchTextInputView;
}(_view__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/color-swatch.js":
/*!************************************************!*\
  !*** ./src/main/js/view/input/color-swatch.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorSwatchInputView; });
/* harmony import */ var _converter_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../converter/color */ "./src/main/js/converter/color.js");
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
/* harmony import */ var _color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-picker */ "./src/main/js/view/input/color-picker.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_1__["default"])('csw', 'input');

var ColorSwatchInputView =
/*#__PURE__*/
function (_View) {
  _inherits(ColorSwatchInputView, _View);

  function ColorSwatchInputView(document, config) {
    var _this;

    _classCallCheck(this, ColorSwatchInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorSwatchInputView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueChange_ = _this.onValueChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    config.value.emitter.on('change', _this.onValueChange_);
    _this.value = config.value;

    _this.element.classList.add(className());

    var swatchElem = document.createElement('div');
    swatchElem.classList.add(className('sw'));

    _this.element.appendChild(swatchElem);

    _this.swatchElem_ = swatchElem;
    var buttonElem = document.createElement('button');
    buttonElem.classList.add(className('b'));

    _this.element.appendChild(buttonElem);

    _this.buttonElem_ = buttonElem;
    var pickerElem = document.createElement('div');
    pickerElem.classList.add(className('p'));
    _this.pickerView_ = config.pickerInputView;
    pickerElem.appendChild(_this.pickerView_.element);

    _this.element.appendChild(pickerElem);

    _this.update();

    return _this;
  }

  _createClass(ColorSwatchInputView, [{
    key: "update",
    value: function update() {
      var value = this.value.rawValue;
      this.swatchElem_.style.backgroundColor = _converter_color__WEBPACK_IMPORTED_MODULE_0__["toString"](value);
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_() {
      this.update();
    }
  }, {
    key: "buttonElement",
    get: function get() {
      return this.buttonElem_;
    }
  }]);

  return ColorSwatchInputView;
}(_view__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/h-palette.js":
/*!*********************************************!*\
  !*** ./src/main/js/view/input/h-palette.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HPaletteInputView; });
/* harmony import */ var _formatter_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../formatter/color */ "./src/main/js/formatter/color.js");
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _misc_color_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/color-model */ "./src/main/js/misc/color-model.js");
/* harmony import */ var _misc_dom_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_1__["default"])('hpl', 'input');

var HPaletteInputView =
/*#__PURE__*/
function (_View) {
  _inherits(HPaletteInputView, _View);

  function HPaletteInputView(document, config) {
    var _this;

    _classCallCheck(this, HPaletteInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HPaletteInputView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueChange_ = _this.onValueChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.value = config.value;

    _this.value.emitter.on('change', _this.onValueChange_);

    _this.element.classList.add(className());

    var canvasElem = document.createElement('canvas');
    canvasElem.classList.add(className('c'));
    canvasElem.tabIndex = -1;

    _this.element.appendChild(canvasElem);

    _this.canvasElement = canvasElem;
    var markerElem = document.createElement('div');
    markerElem.classList.add(className('m'));

    _this.element.appendChild(markerElem);

    _this.markerElem_ = markerElem;

    _this.update();

    return _this;
  }

  _createClass(HPaletteInputView, [{
    key: "update",
    value: function update() {
      var ctx = _misc_dom_util__WEBPACK_IMPORTED_MODULE_3__["getCanvasContext"](this.canvasElement);

      if (!ctx) {
        return;
      }

      var width = this.canvasElement.width;
      var height = this.canvasElement.height;
      var cellCount = 64;
      var ch = Math.ceil(height / cellCount);

      for (var iy = 0; iy < cellCount; iy++) {
        var hue = _misc_number_util__WEBPACK_IMPORTED_MODULE_4__["default"].map(iy, 0, cellCount - 1, 0, 360);
        var rgbComps = _misc_color_model__WEBPACK_IMPORTED_MODULE_2__["hsvToRgb"](hue, 100, 100);
        ctx.fillStyle = _formatter_color__WEBPACK_IMPORTED_MODULE_0__["default"].rgb.apply(_formatter_color__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(rgbComps));
        var y = Math.floor(_misc_number_util__WEBPACK_IMPORTED_MODULE_4__["default"].map(iy, 0, cellCount - 1, 0, height - ch));
        ctx.fillRect(0, y, width, ch);
      }

      var c = this.value.rawValue;
      var hsvComps = _misc_color_model__WEBPACK_IMPORTED_MODULE_2__["rgbToHsv"].apply(_misc_color_model__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(c.getComponents()));
      var top = _misc_number_util__WEBPACK_IMPORTED_MODULE_4__["default"].map(hsvComps[0], 0, 360, 0, 100);
      this.markerElem_.style.top = "".concat(top, "%");
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_() {
      this.update();
    }
  }]);

  return HPaletteInputView;
}(_view__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/list.js":
/*!****************************************!*\
  !*** ./src/main/js/view/input/list.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListInputView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('lst', 'input');

var ListInputView =
/*#__PURE__*/
function (_View) {
  _inherits(ListInputView, _View);

  function ListInputView(document, config) {
    var _this;

    _classCallCheck(this, ListInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListInputView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueChange_ = _this.onValueChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.element.classList.add(className());

    _this.stringifyValue_ = config.stringifyValue;
    var selectElem = document.createElement('select');
    selectElem.classList.add(className('s'));
    config.options.forEach(function (item, index) {
      var optionElem = document.createElement('option');
      optionElem.dataset.index = String(index);
      optionElem.textContent = item.text;
      optionElem.value = _this.stringifyValue_(item.value);
      selectElem.appendChild(optionElem);
    });

    _this.element.appendChild(selectElem);

    _this.selectElem_ = selectElem;
    var markElem = document.createElement('div');
    markElem.classList.add(className('m'));

    _this.element.appendChild(markElem);

    config.value.emitter.on('change', _this.onValueChange_);
    _this.value = config.value;

    _this.update();

    return _this;
  }

  _createClass(ListInputView, [{
    key: "update",
    value: function update() {
      this.selectElem_.value = this.stringifyValue_(this.value.rawValue);
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_() {
      this.update();
    }
  }, {
    key: "selectElement",
    get: function get() {
      return this.selectElem_;
    }
  }]);

  return ListInputView;
}(_view__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/slider-text.js":
/*!***********************************************!*\
  !*** ./src/main/js/view/input/slider-text.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderTextInputView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./src/main/js/view/input/slider.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./src/main/js/view/input/text.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('sldtxt', 'input');

var SliderTextInputView =
/*#__PURE__*/
function (_View) {
  _inherits(SliderTextInputView, _View);

  function SliderTextInputView(document, config) {
    var _this;

    _classCallCheck(this, SliderTextInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SliderTextInputView).call(this, document));

    _this.element.classList.add(className());

    var sliderElem = document.createElement('div');
    sliderElem.classList.add(className('s'));
    _this.sliderInputView_ = config.sliderInputView;
    sliderElem.appendChild(_this.sliderInputView_.element);

    _this.element.appendChild(sliderElem);

    var textElem = document.createElement('div');
    textElem.classList.add(className('t'));
    _this.textInputView_ = config.textInputView;
    textElem.appendChild(_this.textInputView_.element);

    _this.element.appendChild(textElem);

    return _this;
  }

  _createClass(SliderTextInputView, [{
    key: "update",
    value: function update() {
      this.sliderInputView_.update();
      this.textInputView_.update();
    }
  }, {
    key: "value",
    get: function get() {
      return this.sliderInputView_.value;
    }
  }]);

  return SliderTextInputView;
}(_view__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/slider.js":
/*!******************************************!*\
  !*** ./src/main/js/view/input/slider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SliderInputView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('sld', 'input');

var SliderInputView =
/*#__PURE__*/
function (_View) {
  _inherits(SliderInputView, _View);

  function SliderInputView(document, config) {
    var _this;

    _classCallCheck(this, SliderInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SliderInputView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueChange_ = _this.onValueChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.minValue_ = config.minValue;
    _this.maxValue_ = config.maxValue;

    _this.element.classList.add(className());

    var outerElem = document.createElement('div');
    outerElem.classList.add(className('o'));

    _this.element.appendChild(outerElem);

    _this.outerElem_ = outerElem;
    var innerElem = document.createElement('div');
    innerElem.classList.add(className('i'));

    _this.outerElem_.appendChild(innerElem);

    _this.innerElem_ = innerElem;
    config.value.emitter.on('change', _this.onValueChange_);
    _this.value = config.value;

    _this.update();

    return _this;
  }

  _createClass(SliderInputView, [{
    key: "update",
    value: function update() {
      var p = _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].map(this.value.rawValue, this.minValue_, this.maxValue_, 0, 100);
      this.innerElem_.style.width = "".concat(p, "%");
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_() {
      this.update();
    }
  }, {
    key: "outerElement",
    get: function get() {
      return this.outerElem_;
    }
  }, {
    key: "innerElement",
    get: function get() {
      return this.innerElem_;
    }
  }]);

  return SliderInputView;
}(_view__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/sv-palette.js":
/*!**********************************************!*\
  !*** ./src/main/js/view/input/sv-palette.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvPaletteInputView; });
/* harmony import */ var _formatter_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../formatter/color */ "./src/main/js/formatter/color.js");
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _misc_color_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../misc/color-model */ "./src/main/js/misc/color-model.js");
/* harmony import */ var _misc_dom_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../misc/dom-util */ "./src/main/js/misc/dom-util.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _model_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/color */ "./src/main/js/model/color.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_1__["default"])('svp', 'input');

var SvPaletteInputView =
/*#__PURE__*/
function (_View) {
  _inherits(SvPaletteInputView, _View);

  function SvPaletteInputView(document, config) {
    var _this;

    _classCallCheck(this, SvPaletteInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SvPaletteInputView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueChange_ = _this.onValueChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.value = config.value;

    _this.value.emitter.on('change', _this.onValueChange_);

    _this.element.classList.add(className());

    var canvasElem = document.createElement('canvas');
    canvasElem.classList.add(className('c'));
    canvasElem.tabIndex = -1;

    _this.element.appendChild(canvasElem);

    _this.canvasElement = canvasElem;
    var markerElem = document.createElement('div');
    markerElem.classList.add(className('m'));

    _this.element.appendChild(markerElem);

    _this.markerElem_ = markerElem;

    _this.update();

    return _this;
  }

  _createClass(SvPaletteInputView, [{
    key: "update",
    value: function update() {
      var ctx = _misc_dom_util__WEBPACK_IMPORTED_MODULE_3__["getCanvasContext"](this.canvasElement);

      if (!ctx) {
        return;
      }

      var c = this.value.rawValue;
      var hsvComps = _misc_color_model__WEBPACK_IMPORTED_MODULE_2__["rgbToHsv"].apply(_misc_color_model__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(c.getComponents()));
      var width = this.canvasElement.width;
      var height = this.canvasElement.height;
      var cellCount = 64;
      var cw = Math.ceil(width / cellCount);
      var ch = Math.ceil(height / cellCount);

      for (var iy = 0; iy < cellCount; iy++) {
        for (var ix = 0; ix < cellCount; ix++) {
          var s = _misc_number_util__WEBPACK_IMPORTED_MODULE_4__["default"].map(ix, 0, cellCount - 1, 0, 100);
          var v = _misc_number_util__WEBPACK_IMPORTED_MODULE_4__["default"].map(iy, 0, cellCount - 1, 100, 0);
          var rgbComps = _misc_color_model__WEBPACK_IMPORTED_MODULE_2__["hsvToRgb"](hsvComps[0], s, v);
          ctx.fillStyle = _formatter_color__WEBPACK_IMPORTED_MODULE_0__["default"].rgb.apply(_formatter_color__WEBPACK_IMPORTED_MODULE_0__["default"], _toConsumableArray(rgbComps));
          var x = Math.floor(_misc_number_util__WEBPACK_IMPORTED_MODULE_4__["default"].map(ix, 0, cellCount - 1, 0, width - cw));
          var y = Math.floor(_misc_number_util__WEBPACK_IMPORTED_MODULE_4__["default"].map(iy, 0, cellCount - 1, 0, height - ch));
          ctx.fillRect(x, y, cw, ch);
        }
      }

      var left = _misc_number_util__WEBPACK_IMPORTED_MODULE_4__["default"].map(hsvComps[1], 0, 100, 0, 100);
      this.markerElem_.style.left = "".concat(left, "%");
      var top = _misc_number_util__WEBPACK_IMPORTED_MODULE_4__["default"].map(hsvComps[2], 0, 100, 100, 0);
      this.markerElem_.style.top = "".concat(top, "%");
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_() {
      this.update();
    }
  }]);

  return SvPaletteInputView;
}(_view__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./src/main/js/view/input/text.js":
/*!****************************************!*\
  !*** ./src/main/js/view/input/text.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextInputView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_input_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/input-value */ "./src/main/js/model/input-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('txt', 'input');

var TextInputView =
/*#__PURE__*/
function (_View) {
  _inherits(TextInputView, _View);

  function TextInputView(document, config) {
    var _this;

    _classCallCheck(this, TextInputView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInputView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueChange_ = _this.onValueChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.formatter_ = config.formatter;

    _this.element.classList.add(className());

    var inputElem = document.createElement('input');
    inputElem.classList.add(className('i'));
    inputElem.type = 'text';

    _this.element.appendChild(inputElem);

    _this.inputElem_ = inputElem;
    config.value.emitter.on('change', _this.onValueChange_);
    _this.value = config.value;

    _this.update();

    return _this;
  }

  _createClass(TextInputView, [{
    key: "update",
    value: function update() {
      this.inputElem_.value = this.formatter_.format(this.value.rawValue);
    }
  }, {
    key: "onValueChange_",
    value: function onValueChange_() {
      this.update();
    }
  }, {
    key: "inputElement",
    get: function get() {
      return this.inputElem_;
    }
  }]);

  return TextInputView;
}(_view__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/main/js/view/labeled.js":
/*!*************************************!*\
  !*** ./src/main/js/view/labeled.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LabeledView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('lbl');

var LabeledView =
/*#__PURE__*/
function (_View) {
  _inherits(LabeledView, _View);

  function LabeledView(document, config) {
    var _this;

    _classCallCheck(this, LabeledView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LabeledView).call(this, document));
    _this.label = config.label;

    _this.element.classList.add(className());

    var labelElem = document.createElement('div');
    labelElem.classList.add(className('l'));
    labelElem.textContent = _this.label;

    _this.element.appendChild(labelElem);

    var viewElem = document.createElement('div');
    viewElem.classList.add(className('v'));
    viewElem.appendChild(config.view.element);

    _this.element.appendChild(viewElem);

    return _this;
  }

  return LabeledView;
}(_view__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/main/js/view/monitor/graph.js":
/*!*******************************************!*\
  !*** ./src/main/js/view/monitor/graph.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphMonitorView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _misc_number_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../misc/number-util */ "./src/main/js/misc/number-util.js");
/* harmony import */ var _model_graph_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/graph-cursor */ "./src/main/js/model/graph-cursor.js");
/* harmony import */ var _model_monitor_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var SVG_NS = 'http://www.w3.org/2000/svg';
var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('grp', 'monitor');

var GraphMonitorView =
/*#__PURE__*/
function (_View) {
  _inherits(GraphMonitorView, _View);

  function GraphMonitorView(document, config) {
    var _this;

    _classCallCheck(this, GraphMonitorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GraphMonitorView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onCursorChange_ = _this.onCursorChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueUpdate_ = _this.onValueUpdate_.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.element.classList.add(className());

    _this.formatter_ = config.formatter;
    _this.minValue_ = config.minValue;
    _this.maxValue_ = config.maxValue;
    _this.cursor_ = config.cursor;

    _this.cursor_.emitter.on('change', _this.onCursorChange_);

    var svgElem = document.createElementNS(SVG_NS, 'svg');
    svgElem.classList.add(className('g'));

    _this.element.appendChild(svgElem);

    _this.svgElem_ = svgElem;
    var lineElem = document.createElementNS(SVG_NS, 'polyline');

    _this.svgElem_.appendChild(lineElem);

    _this.lineElem_ = lineElem;
    var tooltipElem = document.createElement('div');
    tooltipElem.classList.add(className('t'));

    _this.element.appendChild(tooltipElem);

    _this.tooltipElem_ = tooltipElem;
    config.value.emitter.on('update', _this.onValueUpdate_);
    _this.value = config.value;

    _this.update();

    return _this;
  }

  _createClass(GraphMonitorView, [{
    key: "update",
    value: function update() {
      var bounds = this.svgElem_.getBoundingClientRect(); // Graph

      var maxIndex = this.value.totalCount - 1;
      var min = this.minValue_;
      var max = this.maxValue_;
      this.lineElem_.setAttributeNS(null, 'points', this.value.rawValues.map(function (value, index) {
        var x = _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].map(index, 0, maxIndex, 0, bounds.width);
        var y = _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].map(value, min, max, bounds.height, 0);
        return [x, y].join(',');
      }).join(' ')); // Cursor

      var tooltipElem = this.tooltipElem_;
      var value = this.value.rawValues[this.cursor_.index];

      if (value === undefined) {
        tooltipElem.classList.remove(className('t', 'valid'));
        return;
      }

      tooltipElem.classList.add(className('t', 'valid'));
      var tx = _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].map(this.cursor_.index, 0, maxIndex, 0, bounds.width);
      var ty = _misc_number_util__WEBPACK_IMPORTED_MODULE_1__["default"].map(value, min, max, bounds.height, 0);
      tooltipElem.style.left = "".concat(tx, "px");
      tooltipElem.style.top = "".concat(ty, "px");
      this.tooltipElem_.textContent = "".concat(this.formatter_.format(value));
    }
  }, {
    key: "onValueUpdate_",
    value: function onValueUpdate_() {
      this.update();
    }
  }, {
    key: "onCursorChange_",
    value: function onCursorChange_() {
      this.update();
    }
  }, {
    key: "graphElement",
    get: function get() {
      return this.svgElem_;
    }
  }]);

  return GraphMonitorView;
}(_view__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/main/js/view/monitor/multi-log.js":
/*!***********************************************!*\
  !*** ./src/main/js/view/monitor/multi-log.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiLogMonitorView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_monitor_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('mll', 'monitor');

var MultiLogMonitorView =
/*#__PURE__*/
function (_View) {
  _inherits(MultiLogMonitorView, _View);

  function MultiLogMonitorView(document, config) {
    var _this;

    _classCallCheck(this, MultiLogMonitorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiLogMonitorView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueUpdate_ = _this.onValueUpdate_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.formatter_ = config.formatter;

    _this.element.classList.add(className());

    var textareaElem = document.createElement('textarea');
    textareaElem.classList.add(className('i'));
    textareaElem.readOnly = true;

    _this.element.appendChild(textareaElem);

    _this.textareaElem_ = textareaElem;
    config.value.emitter.on('update', _this.onValueUpdate_);
    _this.value = config.value;

    _this.update();

    return _this;
  }

  _createClass(MultiLogMonitorView, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      var elem = this.textareaElem_;
      var shouldScroll = elem.scrollTop === elem.scrollHeight - elem.clientHeight;
      elem.textContent = this.value.rawValues.map(function (value) {
        return _this2.formatter_.format(value);
      }).join('\n');

      if (shouldScroll) {
        elem.scrollTop = elem.scrollHeight;
      }
    }
  }, {
    key: "onValueUpdate_",
    value: function onValueUpdate_() {
      this.update();
    }
  }]);

  return MultiLogMonitorView;
}(_view__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/main/js/view/monitor/single-log.js":
/*!************************************************!*\
  !*** ./src/main/js/view/monitor/single-log.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleLogMonitorView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_monitor_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/monitor-value */ "./src/main/js/model/monitor-value.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('sgl', 'monitor');

var SingleLogMonitorView =
/*#__PURE__*/
function (_View) {
  _inherits(SingleLogMonitorView, _View);

  function SingleLogMonitorView(document, config) {
    var _this;

    _classCallCheck(this, SingleLogMonitorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleLogMonitorView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onValueUpdate_ = _this.onValueUpdate_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.formatter_ = config.formatter;

    _this.element.classList.add(className());

    var inputElem = document.createElement('input');
    inputElem.classList.add(className('i'));
    inputElem.readOnly = true;
    inputElem.type = 'text';

    _this.element.appendChild(inputElem);

    _this.inputElem_ = inputElem;
    config.value.emitter.on('update', _this.onValueUpdate_);
    _this.value = config.value;

    _this.update();

    return _this;
  }

  _createClass(SingleLogMonitorView, [{
    key: "update",
    value: function update() {
      var values = this.value.rawValues;
      this.inputElem_.value = values.length > 0 ? this.formatter_.format(values[values.length - 1]) : '';
    }
  }, {
    key: "onValueUpdate_",
    value: function onValueUpdate_() {
      this.update();
    }
  }]);

  return SingleLogMonitorView;
}(_view__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/main/js/view/root.js":
/*!**********************************!*\
  !*** ./src/main/js/view/root.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RootView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _model_folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/folder */ "./src/main/js/model/folder.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('rot');

var RootView =
/*#__PURE__*/
function (_View) {
  _inherits(RootView, _View);

  function RootView(document, config) {
    var _this;

    _classCallCheck(this, RootView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RootView).call(this, document));
    _assertThisInitialized(_assertThisInitialized(_this)).onFolderChange_ = _this.onFolderChange_.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.folder_ = config.folder;

    if (_this.folder_) {
      _this.folder_.emitter.on('change', _this.onFolderChange_);
    }

    _this.element.classList.add(className());

    var folder = _this.folder_;

    if (folder) {
      var titleElem = document.createElement('button');
      titleElem.classList.add(className('t'));
      titleElem.textContent = folder.title;

      _this.element.appendChild(titleElem);

      var markElem = document.createElement('div');
      markElem.classList.add(className('m'));
      titleElem.appendChild(markElem);
      _this.titleElem_ = titleElem;
    }

    var containerElem = document.createElement('div');
    containerElem.classList.add(className('c'));

    _this.element.appendChild(containerElem);

    _this.containerElem_ = containerElem;

    _this.applyModel_();

    return _this;
  }

  _createClass(RootView, [{
    key: "applyModel_",
    value: function applyModel_() {
      var expanded = this.folder_ ? this.folder_.expanded : true;
      var expandedClass = className(null, 'expanded');

      if (expanded) {
        this.element.classList.add(expandedClass);
      } else {
        this.element.classList.remove(expandedClass);
      } // TODO: Animate

    }
  }, {
    key: "onFolderChange_",
    value: function onFolderChange_() {
      this.applyModel_();
    }
  }, {
    key: "titleElement",
    get: function get() {
      return this.titleElem_;
    }
  }, {
    key: "containerElement",
    get: function get() {
      return this.containerElem_;
    }
  }]);

  return RootView;
}(_view__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/main/js/view/separator.js":
/*!***************************************!*\
  !*** ./src/main/js/view/separator.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeparatorView; });
/* harmony import */ var _misc_class_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/class-name */ "./src/main/js/misc/class-name.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/main/js/view/view.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var className = Object(_misc_class_name__WEBPACK_IMPORTED_MODULE_0__["default"])('spt');

var SeparatorView =
/*#__PURE__*/
function (_View) {
  _inherits(SeparatorView, _View);

  function SeparatorView(document) {
    var _this;

    _classCallCheck(this, SeparatorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SeparatorView).call(this, document));

    _this.element.classList.add(className());

    var hrElem = document.createElement('hr');
    hrElem.classList.add(className('r'));

    _this.element.appendChild(hrElem);

    return _this;
  }

  return SeparatorView;
}(_view__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/main/js/view/view.js":
/*!**********************************!*\
  !*** ./src/main/js/view/view.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function View(document) {
  _classCallCheck(this, View);

  this.document = document;
  this.element = this.document.createElement('div');
};



/***/ }),

/***/ "./src/main/sass/bundle.scss":
/*!***********************************!*\
  !*** ./src/main/sass/bundle.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tp-fldv_t,.tp-rotv_t{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:rgba(200,202,208,0.1);color:#c8cad0;cursor:pointer;display:block;height:24px;line-height:24px;overflow:hidden;padding-left:30px;position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.tp-fldv_t:hover,.tp-rotv_t:hover{background-color:rgba(200,202,208,0.15)}.tp-fldv_t:focus,.tp-rotv_t:focus{background-color:rgba(200,202,208,0.2)}.tp-fldv_t:active,.tp-rotv_t:active{background-color:rgba(200,202,208,0.25)}.tp-fldv_m,.tp-rotv_m{background:linear-gradient(to left, #c8cad0, #c8cad0 2px, transparent 2px, transparent 4px, #c8cad0 4px, #c8cad0);border-radius:2px;bottom:0;content:'';display:block;height:6px;left:12px;margin:auto;position:absolute;top:0;-webkit-transform:rotate(90deg);transform:rotate(90deg);transition:-webkit-transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out;transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;width:6px}.tp-fldv.tp-fldv-expanded .tp-fldv_m,.tp-rotv.tp-rotv-expanded .tp-rotv_m{-webkit-transform:none;transform:none}.tp-fldv_c>.tp-fldv:first-child,.tp-rotv_c>.tp-fldv:first-child{margin-top:-4px}.tp-fldv_c>.tp-fldv:last-child,.tp-rotv_c>.tp-fldv:last-child{margin-bottom:-4px}.tp-fldv_c>*+*,.tp-rotv_c>*+*{margin-top:4px}.tp-fldv_c>.tp-fldv+.tp-fldv,.tp-rotv_c>.tp-fldv+.tp-fldv{margin-top:0}.tp-fldv_c>.tp-sptv+.tp-sptv,.tp-rotv_c>.tp-sptv+.tp-sptv{margin-top:0}.tp-btnv{padding:0 4px}.tp-btnv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:#adafb8;border-radius:2px;color:#2f3137;cursor:pointer;display:block;font-weight:bold;height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.tp-btnv_b:hover{background-color:#bbbcc4}.tp-btnv_b:focus{background-color:#c8cad0}.tp-btnv_b:active{background-color:#d6d7db}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv_c{border-left:rgba(200,202,208,0.1) solid 4px;box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height 0.2s ease-in-out, opacity 0.2s linear, padding 0.2s ease-in-out}.tp-fldv_t:hover+.tp-fldv_c{border-left-color:rgba(200,202,208,0.15)}.tp-fldv_t:focus+.tp-fldv_c{border-left-color:rgba(200,202,208,0.2)}.tp-fldv_t:active+.tp-fldv_c{border-left-color:rgba(200,202,208,0.25)}.tp-fldv.tp-fldv-expanded .tp-fldv_c{opacity:1;overflow:visible;padding-bottom:4px;padding-top:4px;-webkit-transform:none;transform:none;transition:height 0.2s ease-in-out, opacity 0.2s linear 0.2s, padding 0.2s ease-in-out}.tp-ckbiv_l{display:block;position:relative}.tp-ckbiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background:red;left:0;opacity:0;position:absolute;top:0}.tp-ckbiv_m{background-color:rgba(200,202,208,0.15);border-radius:2px;cursor:pointer;display:block;height:20px;position:relative;width:20px}.tp-ckbiv_m::before{background-color:#c8cad0;border-radius:2px;bottom:4px;content:'';display:block;left:4px;opacity:0;position:absolute;right:4px;top:4px}.tp-ckbiv_i:hover+.tp-ckbiv_m{background-color:rgba(200,202,208,0.15)}.tp-ckbiv_i:focus+.tp-ckbiv_m{background-color:rgba(200,202,208,0.25)}.tp-ckbiv_i:active+.tp-ckbiv_m{background-color:rgba(200,202,208,0.35)}.tp-ckbiv_i:checked+.tp-ckbiv_m::before{opacity:1}.tp-clpiv{background-color:#2f3137;border-radius:6px;box-shadow:0 2px 4px rgba(0,0,0,0.2);display:none;padding:4px;position:relative;visibility:hidden;z-index:1000}.tp-clpiv.tp-clpiv-expanded{display:block;visibility:visible}.tp-clpiv_pl{display:flex}.tp-clpiv_h{margin-left:4px}.tp-clpiv_is{display:flex;margin-top:4px}.tp-clpiv_iw{align-items:center;display:flex}.tp-clpiv_iw+.tp-clpiv_iw{margin-left:4px}.tp-clpiv_il{color:rgba(200,202,208,0.8);margin-left:4px;margin-right:8px}.tp-clpiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:rgba(200,202,208,0.15);border-radius:2px;box-sizing:border-box;color:#c8cad0;font-family:inherit;height:20px;line-height:20px;width:100%;padding:0 4px;width:100%}.tp-clpiv_i:hover{background-color:rgba(200,202,208,0.15)}.tp-clpiv_i:focus{background-color:rgba(200,202,208,0.25)}.tp-clpiv_i:active{background-color:rgba(200,202,208,0.35)}.tp-hpliv{border-radius:2px;overflow:hidden;position:relative}.tp-hpliv_c{cursor:crosshair;display:block;height:80px;width:20px}.tp-hpliv_m{border-radius:100%;border:rgba(255,255,255,0.75) solid 1px;box-shadow:0 1px 2px rgba(0,0,0,0.1);height:4px;left:50%;margin-left:-3px;margin-top:-3px;pointer-events:none;position:absolute;width:4px}.tp-svpiv{border-radius:2px;overflow:hidden;position:relative}.tp-svpiv_c{cursor:crosshair;display:block;height:80px;width:100%}.tp-svpiv_m{border-radius:100%;border:rgba(255,255,255,0.75) solid 1px;box-shadow:0 1px 2px rgba(0,0,0,0.1);height:4px;margin-left:-3px;margin-top:-3px;pointer-events:none;position:absolute;width:4px}.tp-lstiv{color:#c8cad0;display:block;padding:0;position:relative}.tp-lstiv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:#adafb8;border-radius:2px;color:#2f3137;cursor:pointer;display:block;height:20px;line-height:20px;padding:0 4px;width:100%}.tp-lstiv_s:hover{background-color:#bbbcc4}.tp-lstiv_s:focus{background-color:#c8cad0}.tp-lstiv_s:active{background-color:#d6d7db}.tp-lstiv_m{border-color:#2f3137 transparent transparent;border-style:solid;border-width:3px;bottom:0;box-sizing:border-box;height:6px;margin:auto;pointer-events:none;position:absolute;right:6px;top:3px;width:6px}.tp-sldiv{color:#c8cad0;display:block;padding:0}.tp-sldiv_o{box-sizing:border-box;cursor:pointer;height:20px;margin:0 6px;position:relative}.tp-sldiv_o::before{background-color:rgba(200,202,208,0.2);border-radius:1px;bottom:0;content:'';display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldiv_i{height:100%;left:0;position:absolute;top:0}.tp-sldiv_i::before{background-color:#adafb8;border-radius:2px;bottom:0;content:'';display:block;height:12px;margin:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldiv_o:hover .tp-sldiv_i::before{background-color:#bbbcc4}.tp-sldiv_o:focus .tp-sldiv_i::before{background-color:#c8cad0}.tp-sldiv_o:active .tp-sldiv_i::before{background-color:#d6d7db}.tp-txtiv{color:#c8cad0;display:block;padding:0}.tp-txtiv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:rgba(200,202,208,0.15);border-radius:2px;box-sizing:border-box;color:#c8cad0;font-family:inherit;height:20px;line-height:20px;width:100%;padding:0 4px}.tp-txtiv_i:hover{background-color:rgba(200,202,208,0.15)}.tp-txtiv_i:focus{background-color:rgba(200,202,208,0.25)}.tp-txtiv_i:active{background-color:rgba(200,202,208,0.35)}.tp-cswiv_sw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:rgba(200,202,208,0.15);border-radius:2px;box-sizing:border-box;color:#c8cad0;font-family:inherit;height:20px;line-height:20px;width:100%}.tp-cswiv_sw:hover{background-color:rgba(200,202,208,0.15)}.tp-cswiv_sw:focus{background-color:rgba(200,202,208,0.25)}.tp-cswiv_sw:active{background-color:rgba(200,202,208,0.35)}.tp-cswiv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:20px;left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:20px}.tp-cswiv_b:focus::after{border:rgba(255,255,255,0.75) solid 2px;border-radius:2px;bottom:0;content:'';display:block;left:0;position:absolute;right:0;top:0}.tp-cswiv_p{left:-4px;position:absolute;right:-4px;top:20px}.tp-cswtxtiv{display:flex;position:relative}.tp-cswtxtiv_s{flex-grow:0;flex-shrink:0;width:20px}.tp-cswtxtiv_t{flex:1;margin-left:4px}.tp-sldtxtiv{display:flex}.tp-sldtxtiv_s{flex:2}.tp-sldtxtiv_t{flex:1;margin-left:4px}.tp-lblv{align-items:center;display:flex;padding-left:4px;padding-right:4px}.tp-lblv_l{color:rgba(200,202,208,0.8);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;padding-left:4px;padding-right:16px}.tp-lblv_v{flex-grow:0;flex-shrink:0;width:160px}.tp-grpmv{color:#c8cad0;display:block;padding:0;position:relative}.tp-grpmv_g{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:rgba(24,24,27,0.5);border-radius:2px;box-sizing:border-box;color:rgba(200,202,208,0.7);height:20px;width:100%;display:block;height:60px}.tp-grpmv_g polyline{fill:none;stroke:rgba(200,202,208,0.7);stroke-linejoin:round}.tp-grpmv_t{font-size:0.9em;left:0;pointer-events:none;position:absolute;text-indent:4px;top:0;visibility:hidden}.tp-grpmv_t.tp-grpmv_t-valid{visibility:visible}.tp-grpmv_t::before{background-color:rgba(200,202,208,0.7);border-radius:100%;content:'';display:block;height:4px;left:-2px;position:absolute;top:-2px;width:4px}.tp-sglmv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:rgba(24,24,27,0.5);border-radius:2px;box-sizing:border-box;color:rgba(200,202,208,0.7);height:20px;width:100%;padding:0 4px}.tp-mllmv_i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:rgba(24,24,27,0.5);border-radius:2px;box-sizing:border-box;color:rgba(200,202,208,0.7);height:20px;width:100%;display:block;height:60px;line-height:20px;padding:0 4px;resize:none;white-space:pre}.tp-cswmv_sw{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0;background-color:rgba(24,24,27,0.5);border-radius:2px;box-sizing:border-box;color:rgba(200,202,208,0.7);height:20px;width:100%}.tp-rotv{background-color:#2f3137;border-radius:6px;box-shadow:0 2px 4px rgba(0,0,0,0.2);font-family:\"Roboto Mono\",\"Source Code Pro\",Menlo,Courier,monospace;font-size:11px;font-weight:500;text-align:left}.tp-rotv_t{border-top-left-radius:6px;border-top-right-radius:6px}.tp-rotv_m{transition:none}.tp-rotv_c{box-sizing:border-box;height:0;overflow:hidden;padding-bottom:0;padding-top:0}.tp-rotv_c>.tp-fldv:first-child .tp-fldv_t{border-top-left-radius:6px;border-top-right-radius:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_c{height:auto;overflow:visible;padding-bottom:4px;padding-top:4px}.tp-sptv_r{background-color:rgba(24,24,27,0.3);border-width:0;display:block;height:4px;margin:0;width:100%}\n", ""]);

// exports


/***/ })

/******/ });
});