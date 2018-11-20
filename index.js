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

/***/ "./node_modules/throttle-debounce/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/index.esm.js ***!
  \*****************************************************/
/*! exports provided: throttle, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle ( delay, noTrailing, callback, debounceMode ) {

	/*
	 * After wrapper has stopped being called, this timeout ensures that
	 * `callback` is executed at the proper times in `throttle` and `end`
	 * debounce modes.
	 */
	var timeoutID;

	// Keep track of the last time `callback` was executed.
	var lastExec = 0;

	// `noTrailing` defaults to falsy.
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	/*
	 * The `wrapper` function encapsulates all of the throttling / debouncing
	 * functionality and when executed will limit the rate at which `callback`
	 * is executed.
	 */
	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// Execute `callback` and update the `lastExec` timestamp.
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		/*
		 * If `debounceMode` is true (at begin) this is used to clear the flag
		 * to allow future `callback` executions.
		 */
		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			/*
			 * Since `wrapper` is being called for the first time and
			 * `debounceMode` is true (at begin), execute `callback`.
			 */
			exec();
		}

		// Clear any existing timeout.
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}

		if ( debounceMode === undefined && elapsed > delay ) {
			/*
			 * In throttle mode, if `delay` time has been exceeded, execute
			 * `callback`.
			 */
			exec();

		} else if ( noTrailing !== true ) {
			/*
			 * In trailing throttle mode, since `delay` time has not been
			 * exceeded, schedule `callback` to execute `delay` ms after most
			 * recent execution.
			 *
			 * If `debounceMode` is true (at begin), schedule `clear` to execute
			 * after `delay` ms.
			 *
			 * If `debounceMode` is false (at end), schedule `callback` to
			 * execute after `delay` ms.
			 */
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}

	// Return the wrapper function.
	return wrapper;

}

/* eslint-disable no-undefined */

/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */
function debounce ( delay, atBegin, callback ) {
	return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}




/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_d_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/d-load */ "./src/assets/js/partials/d-load.js");


/* harmony default export */ __webpack_exports__["default"] = (_partials_d_load__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/assets/js/partials/createImageObject.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/partials/createImageObject.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createImageObject; });

class createImageObject{

  /**
   * 
   * @param {Element to be animated} el 
   * @param {ClassName to be added once loaded} className 
   */

  constructor(el, className) {
    this.className = className;
    this.item = el;
    this.mobile = this.isMobile();
    this.tablet = this.isTablet();
    this.retina = this.isRetina();
    this.delay = this.setDelay();
    this.type = el.tagName;
    this.source = this.setSource();

    /**
     * Throw error if image cannot be loaded due a undefined image url;
     */

    if (this.type === 'IMG' && this.source === undefined || this.type === 'FIGURE' && this.source === undefined) {
      throw Error ("Couldn't load image source. Please check again");
    }
    
    /**
     * If type not equals an image tag or figure tag, we just add the class 
     * to trigger the animation / load. 
     */

    if (this.type !== 'IMG' && this.type !== 'FIGURE') {
      setTimeout( () => {
        this.item.classList.add(this.className);
      }, this.delay);
      return ;
    }

    /**
     * If everthing passed, create new image Instance;
     */
    
    this.createImage();
  };

  setDelay() {

    if (this.item.classList.contains('reveal--random')) {
      const rand = Math.floor(Math.random() * 500) + 100;
      
      return rand;
    };

    return 0;
  }

  createImage() {
    this.image = new Image();
    this.image.src = this.source;
    console.log(this.source);
    this.image.onload = () => {

      if (this.type === 'IMG') {
        this.item.src = this.source;
      } else {
        this.item.style.backgroundImage = `url(${this.source})`;
      }
      setTimeout( () => {
        this.item.classList.add(this.className);
      }, this.delay);
      
    };

    this.image.onerror = (error) => {
      throw Error("Couldn't find image");
    }
  }

  setSource() {
    const srcObject = eval(`({${this.item.dataset.srcset}})`);
    let base = srcObject.base;
    let dadum;
    
    let sources = ['default', 'mobile', 'tablet'];

    sources.map(source => {
      if( this.retina ) {
      
        if (this.mobile) {
          dadum = srcObject.mobileRetina || srcObject.tablet
        }

        if (this.tablet) {
          dadum = srcObject.tabletRetina || srcObject.default
        }

        dadum = srcObject.defaultRetina;

        return source;
      }

      if (this.mobile) {
        dadum = srcObject.mobile || srcObject.tablet
      }

      if (this.tablet) {
        dadum = srcObject.tablet || srcObject.default
      }

      dadum = srcObject.default;

      return dadum;

    }, this);

    return base+dadum;
  }

  isMobile() {
    if (window.innerWidth < 768) {  return true; };
    return false;
  }

  isTablet() {
    if (window.innerWidth >= 768 && window.innerWidth < 970) {  return true; };
    
    return false;
  }

  isRetina() {
    const mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
            (min--moz-device-pixel-ratio: 1.5),\
            (-o-min-device-pixel-ratio: 3/2),\
            (min-resolution: 1.5dppx)";

    if (window.devicePixelRatio > 1) { return true; };

    if (window.matchMedia && window.matchMedia(mediaQuery).matches) { return true; }
    
    return false;
  }

}


/***/ }),

/***/ "./src/assets/js/partials/d-load.js":
/*!******************************************!*\
  !*** ./src/assets/js/partials/d-load.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createImageObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createImageObject */ "./src/assets/js/partials/createImageObject.js");
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/index.esm.js");




const dload = parameters => {
  const options = parameters;

  /**
   * Set default classes if none is given in the parameters;
  */

  setDefaultOptions(parameters, options);
  
  const lazyElements = Array.prototype.slice.call(document.getElementsByClassName(options.className));

  /**
   * Throw error if there no elements, but classname exits;
   */
  if (!lazyElements.length) { throw 'No elements are found'; };
  setImageSources(lazyElements, options.loadedClass);
  
  /**
   * Check if there still images after init
   * if so, add eventlistener;
   */
  if (!lazyElements.length) { return false; };

  window.addEventListener('scroll', Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__["throttle"])(50, () => {
    setImageSources(lazyElements, options.loadedClass);
  }));
  
  window.addEventListener('touchmove', Object(throttle_debounce__WEBPACK_IMPORTED_MODULE_1__["throttle"])(50, () => {
    setImageSources(lazyElements, options.loadedClass);
  }));
};

/**
 * Set Default options
 */
const setDefaultOptions = (parameters, options) => {
  
  if (!parameters['className']) { 
    options.className="lazy-load";
  }

  if (!parameters['loadedClass']) {
    options.loadedClass="lazy-loaded";
  }

  if (!options.loadedClass || !options.className) {
    throw Error('Either the default class name or loaded class name failed to set.');
  }

  return options;
}

/**
 * Check if element is in view
 */
const isElementInView = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0
    && rect.bottom <= (window.innerHeight + el.clientHeight || document.documentElement.clientHeight + el.clientHeight)
  );
};

/**
 * Create image instance
 */
const setImageSources = (elements, className) => {
  for (let i = elements.length -1; i >= 0; i--) {
    const el = elements[i];
    if(isElementInView(el)) {
      new _createImageObject__WEBPACK_IMPORTED_MODULE_0__["default"](el, className);
      removeItemFromArray(el, elements);
    }
  }
}

const removeItemFromArray = (el, elements) => {  
  const i = elements.indexOf(el);
  if (i > -1) {
    elements.splice(i, 1);
  };

  return elements;
}

/* harmony default export */ __webpack_exports__["default"] = (dload);


/***/ })

/******/ });
//# sourceMappingURL=index.js.map