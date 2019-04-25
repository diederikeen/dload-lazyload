'use strict';
import createImageObject from './createImageObject';
import { throttle } from 'throttle-debounce';

const dload = parameters => {
  /**
   * Set default classes if none is given in the parameters;
  */

  const options = setDefaultOptions(parameters);
  const lazyElements = Array.prototype.slice.call(document.getElementsByClassName(options.className));

  /**
   * Throw error if there no elements, but classname exits;
   */
  if (!lazyElements.length) { return; };
  setImageSources(lazyElements, options.loadedClass, options.singleSource);
  
  /**
   * Check if there still images after init
   * if so, add eventlistener;
   */
  if (!lazyElements.length) { return false; };

  window.addEventListener('scroll', throttle(50, () => {
    setImageSources(lazyElements, options.loadedClass, options.singleSource);
  }));
  
  window.addEventListener('touchmove', throttle(50, () => {
    setImageSources(lazyElements, options.loadedClass, options.singleSource);
  }));
};

/**
 * Set Default options
 */
const setDefaultOptions = (parameters) => {
  const options = {};
  

  if (!parameters) {
    return {
      className: "lazy-load",
      loadedClass: "lazy-loaded",
      singleSource: false,
    }
  };

  if (!parameters['className']) { 
    options.className = "lazy-load";
  } else {
    options.className = parameters.className;
  }

  if (!parameters['loadedClass']) {
    options.loadedClass="lazy-loaded";
  } else {
    options.loadedClass = parameters.loadedClass;
  }

  if (!parameters['singleSource']) {
    options.singleSource = false;
  } else {
    options.singleSource = parameters.singleSource;
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
const setImageSources = (elements, className, singleSource) => {
  for (let i = elements.length -1; i >= 0; i--) {
    const el = elements[i];
    if(isElementInView(el)) {
      new createImageObject(el, className, singleSource);
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

export default dload;
