----
# Dload-lazy-load

Dload is a lazy-load plugin for elements and images. It's easily adjustable and easy in use

----
## Installation
    npm i dload-lazyload

### In your js.
    @import dload from 'dload-lazyload';
    
    document.addEventListener('DOMContentLoaded', () => {
      dload();
    });

Or with custom settings

    @import dload from 'dload-lazyload';
    
    document.addEventListener('DOMContentLoaded', () => {
      dload({
        className: 'your-custom-class',
        loadedClass: 'classname-when-in-view'
      });
    });
    

### In your scss.

    @import 'dload-lazyload/src/styles/variables';
    @import 'dload-lazyload/src/styles/dload-lazyload';


### Your HTML markup
For the basic setup you can use the following snippet

    <figure 
        class="lazy-load"
        data-srcset="
          'base':'https://example.com/dir/to/img/folder/',
          'default':'img.jpg',        "
      >

But there are some other images avaiable to. For optimal performance for mobile/tablet we've added a couple more sources, which you can devide by a `,`.

In the following example you can see all of the possible `options`.

    <figure
        class="lazy-load"
        data-srcset="
          'base':'https://example.com/dir/to/img/folder/',
          'default':'image1.jpg',
          'defaultRetina': 'image1@retina.jpg',
          'mobile':'image2.jpg',
          'mobileRetina':'image2@retina.jpg',
          'tablet':'image3.jpg',
          'tabletRetina':'image3@retina.jpg'
        "
      >

And now you're ready to go.


## Transition classes

For transition classes I've decided to go with `reveal`.

#### Example:

    <figure 
      class="lazy-load reveal reveal--up"
      data-srcset="
        'base':'https://example.com/dir/to/img/folder/',
        'default':'image1.jpg'
      "
    >

There are multiple pre made classes for you to use and change.

* `reveal--fade` (can be used with any other class)
* `reveal--up` (transforms bottom to top)
* `reveal--left` (transforms right to left)
* `reveal--right` (transforms left to right)


There are some classes also that you're able to change: Simply reset the variable to your liking.

* `$dload-transition: cubic-bezier(0.165, 0.84, 0.44, 1) !default`;
* `$dload-transition-speed: 600ms !default;`
* `$dload-transform-value: 40px !default;`
* `$dload-delays: 100 300 600 900 !default;`


### Delays

If you want delays on your animations you can either set a class like `reveal--500`. This class is generated by the `$delays` variable. Simply add or remove values to create extra classes.


#### Example:

    <figure 
      class="lazy-load reveal reveal--up reveal--600"
      data-srcset="
        'base':'https://example.com/dir/to/img/folder/',
        'default':'image1.jpg'
      "
    >

If you want a random delay you can add the class `reveal--random` and a random valye between 0 and 500ms will be set on the element


#### Example:

    <figure 
      class="lazy-load reveal reveal--up reveal--random"
      data-srcset="
        'base':'https://example.com/dir/to/img/folder/',
        'default':'image1.jpg'
      "
    >
