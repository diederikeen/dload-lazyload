/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/crypto-browserify/index.js":
/*!*************************************************!*\
  !*** ./node_modules/crypto-browserify/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/diederik/projects/d-load/node_modules/crypto-browserify/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/crypto-browserify/index.js?");

/***/ }),

/***/ "./node_modules/throttle-debounce/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/index.esm.js ***!
  \*****************************************************/
/*! exports provided: throttle, debounce */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/diederik/projects/d-load/node_modules/throttle-debounce/index.esm.js'\");\n\n//# sourceURL=webpack:///./node_modules/throttle-debounce/index.esm.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_d_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/d-load */ \"./src/assets/js/partials/d-load.js\");\n\n\nObject(_partials_d_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  className: 'lazy-load',\n  loadedClass: 'lazy-loaded',\n});\n\n//# sourceURL=webpack:///./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/partials/createImageObject.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/partials/createImageObject.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createImageObject; });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"./node_modules/crypto-browserify/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\n\n'use strict';\nclass createImageObject{\n\n  \n  /**\n   * \n   * @param {Element to be animated} el \n   * @param {ClassName to be added once loaded} className \n   */\n\n\n  constructor(el, className) {\n    this.className = className;\n    this.item = el;\n    this.mobile = this.isMobile();\n    this.tablet = this.isTablet();\n    this.retina = this.isRetina();\n    this.delay = this.setDelay();\n    this.type = el.tagName;\n    this.source = this.setSource();\n\n    // return;\n    \n    /**\n     * Throw error if image cannot be loaded due a undefined image url;\n     */\n\n    if (this.type === 'IMG' && this.source === undefined || this.type === 'FIGURE' && this.source === undefined) {\n      throw Error (\"Couldn't load image source. Please check again\");\n    }\n    \n    /**\n     * If type not equals an image tag or figure tag, we just add the class \n     * to trigger the animation / load. \n     */\n\n    if (this.type !== 'IMG' && this.type !== 'FIGURE') {\n      setTimeout( () => {\n        this.item.classList.add(this.className);\n      }, this.delay);\n      return ;\n    }\n\n    /**\n     * If everthing passed, create new image Instance;\n     */\n    \n    this.createImage();\n  };\n\n  setDelay() {\n\n    if (this.item.classList.contains('reveal--random')) {\n      const rand = Math.floor(Math.random() * 500) + 100;\n      \n      return rand;\n    };\n\n    return 0;\n  }\n\n  createImage() {\n    this.image = new Image();\n    this.image.src = this.source;\n    console.log(this.source);\n    this.image.onload = () => {\n\n      if (this.type === 'IMG') {\n        this.item.src = this.source;\n      } else {\n        this.item.style.backgroundImage = `url(${this.source})`;\n      }\n      setTimeout( () => {\n        this.item.classList.add(this.className);\n      }, this.delay);\n      \n    };\n\n    this.image.onerror = (error) => {\n      throw Error(\"Couldn't find image\");\n    }\n  }\n\n  setSource() {\n    const srcObject = eval(`({${this.item.dataset.srcset}})`);\n    let base = srcObject.base;\n    let dadum;\n    \n    let sources = ['default', 'mobile', 'tablet'];\n\n    sources.map(source => {\n      if( this.retina ) {\n      \n        if (this.mobile) {\n          dadum = srcObject.mobileRetina || srcObject.tablet\n        }\n\n        if (this.tablet) {\n          dadum = srcObject.tabletRetina || srcObject.default\n        }\n\n        dadum = srcObject.defaultRetina;\n\n        return source;\n      }\n\n      if (this.mobile) {\n        dadum = srcObject.mobile || srcObject.tablet\n      }\n\n      if (this.tablet) {\n        dadum = srcObject.tablet || srcObject.default\n      }\n\n      dadum = srcObject.default;\n\n      return dadum;\n\n    }, this);\n\n    return base+dadum;\n  }\n\n  isMobile() {\n    if (window.innerWidth < 768) {  return true; };\n    return false;\n  }\n\n  isTablet() {\n    if (window.innerWidth >= 768 && window.innerWidth < 970) {  return true; };\n    \n    return false;\n  }\n\n  isRetina() {\n    const mediaQuery = \"(-webkit-min-device-pixel-ratio: 1.5),\\\n            (min--moz-device-pixel-ratio: 1.5),\\\n            (-o-min-device-pixel-ratio: 3/2),\\\n            (min-resolution: 1.5dppx)\";\n\n    if (window.devicePixelRatio > 1) { return true; };\n\n    if (window.matchMedia && window.matchMedia(mediaQuery).matches) { return true; }\n    \n    return false;\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/assets/js/partials/createImageObject.js?");

/***/ }),

/***/ "./src/assets/js/partials/d-load.js":
/*!******************************************!*\
  !*** ./src/assets/js/partials/d-load.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createImageObject */ \"./src/assets/js/partials/createImageObject.js\");\n/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! throttle-debounce */ \"./node_modules/throttle-debounce/index.esm.js\");\n\n\n\n\nconst initDLoad = parameters => {\n  const options = parameters;\n\n  /**\n   * Set default classes if none is given in the parameters;\n  */\n\n  setDefaultOptions(parameters, options);\n  \n  const lazyElements = Array.prototype.slice.call(document.getElementsByClassName(options.className));\n\n  /**\n   * Throw error if there no elements, but classname exits;\n   */\n  if (!lazyElements.length) { throw 'No elements are found'; };\n  setImageSources(lazyElements, options.loadedClass);\n  \n  /**\n   * Check if there still images after init\n   * if so, add eventlistener;\n   */\n  if (!lazyElements.length) { return false; };\n\n  window.addEventListener('scroll', Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__[\"throttle\"])(50, () => {\n    setImageSources(lazyElements, options.loadedClass);\n  }));\n  \n  window.addEventListener('touchmove', Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__[\"throttle\"])(50, () => {\n    setImageSources(lazyElements, options.loadedClass);\n  }));\n};\n\n/**\n * Set Default options\n */\nconst setDefaultOptions = (parameters, options) => {\n  \n  if (!parameters['className']) { \n    options.className=\"lazy-load\";\n  }\n\n  if (!parameters['loadedClass']) {\n    options.loadedClass=\"lazy-loaded\";\n  }\n\n  if (!options.loadedClass || !options.className) {\n    throw Error('Either the default class name or loaded class name failed to set.');\n  }\n\n  return options;\n}\n\n/**\n * Check if element is in view\n */\nconst isElementInView = (el) => {\n  const rect = el.getBoundingClientRect();\n  return (\n    rect.top >= 0\n    && rect.bottom <= (window.innerHeight + el.clientHeight || document.documentElement.clientHeight + el.clientHeight)\n  );\n};\n\n/**\n * Create image instance\n */\nconst setImageSources = (elements, className) => {\n  for (let i = elements.length -1; i >= 0; i--) {\n    const el = elements[i];\n    if(isElementInView(el)) {\n      new _createImageObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"](el, className);\n      removeItemFromArray(el, elements);\n    }\n  }\n}\n\nconst removeItemFromArray = (el, elements) => {  \n  const i = elements.indexOf(el);\n  if (i > -1) {\n    elements.splice(i, 1);\n  };\n\n  return elements;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initDLoad);\n\n\n//# sourceURL=webpack:///./src/assets/js/partials/d-load.js?");

/***/ })

/******/ });