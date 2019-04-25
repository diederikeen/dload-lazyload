'use strict';
export default class createImageObject{

  /**
   * 
   * @param {Element to be animated} el 
   * @param {ClassName to be added once loaded} className 
   */

  constructor(el, className, singleSource) {
    this.className = className;
    this.item = el;
    this.isSingleSource = singleSource;
    this.mobile = this.isMobile();
    this.tablet = this.isTablet();
    this.retina = this.isRetina();
    this.delay = this.setDelay();
    this.type = el.tagName;

    
    /**
     * If type not equals an image tag or figure tag, we just add the class 
     * to trigger the animation / load. 
     */

    if (this.type !== 'IMG' && this.type !== 'FIGURE') {
      setTimeout( () => {
        this.item.classList.add(this.className);
      }, this.delay);
      
      return false;
    }

    /**
     * If everthing passed, create new image Instance;
     */
    this.source = this.setSource();
    
    /**
     * Throw error if image cannot be loaded due a undefined image url;
     */
    if (this.type === 'IMG' && this.source === undefined || this.type === 'FIGURE' && this.source === undefined) {
      throw Error ("Couldn't load image source. Please check source");
    }

    this.createImage();

  };

  setDelay() {
    if (! this.item.classList.contains('reveal--random')) return 0;
    
    const rand = Math.floor(Math.random() * 700) + 100;
    return rand;
  }

  createImage() {
    this.image = new Image();
    this.image.src = this.source;
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
      this.item.classList.add(this.className);
      // console.error(error);
    }
  }

  setSource() {
    const { srcset } = this.item.dataset;
    if (this.isSingleSource) return this.setSingleSource(srcset)
    else return this.setMultipleSources(srcset);
  }

  setSingleSource(src) {
    return src;
  }

  setMultipleSources(src) {
    const object = JSON.parse(src);
    const sources = ['default', 'tablet', 'mobile'];
    let srcString;
    
    sources.map(source => {

      if (this.retina) {
        if (this[source]) {
          srcString = object[`${source}Retina`] || object[source];
          if (!srcString) srcString = object['defaultRetina'] || object['default'];
          return srcString;
        } else if (!srcString) {
          srcString = object[`defaultRetina`] || object['default'];
          return srcString;
        }
      } else {
        if (this[source]) {
          srcString = object[source] || object['default'];
        } else {
          srcString = object['default'];
        }
      }
    });

    return srcString;
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
