import { randomBytes } from "crypto";

'use strict';
export default class createImageObject{

  
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

    // return;
    
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
