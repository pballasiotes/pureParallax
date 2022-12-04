# pureParallax.js

pureParallax.js is an easy to use, high-performance and lightweight (only 4.8 Kb) vanilla JS plugin that adds parallax animations on backgrounds, images and elements.

What stands out with pureParallax.js is it's ease of use and customization. Adding parallax effects to elements or images can be done quickly and easily, all without having to touch any JS. It can be used on elements with any type of positioning (relative, absolute, fixed, ...). It works on css background images,  inline images, and any type of html element.

## How it works
pureParallax.js works by adjusting the translateY or translateX value for CSS transform property of the element. For background images it adjusts the background-postition and background-size (if needed). The default starting point for the element/background parallax effect is the center of the element in the center of the element container. The starting point can be adjusted anywhere in the container. The top selectors' starting point is always the top of the page, with offset for the header (if option is set). It's pretty rad! 


## Installation

### Via script link

First add this script below snippet just before your closing `</body>` tag :

```html
<script src="pureParallax.js"></script>
```


## Initialization

JS: Then start pureParallax.js by including the following JavaScript code :

```javascript
pureParallax({
  //-- Optional Settings --//
});
```

HTML: Add a 'data-depth' attribute to any element. (The selector can be changed in the options)

```html
  <div>
    <div data-depth=".3">Parallax Element</div>
  </div>
```

and you'll be running!

___

## HTML

### Default Usage
```html
<div data-depth=".3">
```

### Background Images
```html
<div data-depth=".3" class="parallax-bg">
```

### Top of Page Elements
```html
<div data-depth=".3" class="parallax-top">
```

### Top of Page background Images
```html
<div data-depth=".3" class="parallax-bg-top">
```

### Change the parallax axis by adding a 'parallax-x' class
```html
  <div data-depth=".3" class="parallax-x">
```

### Choose parent section for a specific element (selector is a class name)
```html
  <div data-depth=".3" data-container="titletext">
```

## Options (JS)

### Change the selectors and options
By default, the selector is [data-depth] attribute. The rest of the selectors are class names.
  
```javascript
pureParallax({
    selector: '[data-depth]',
    axisSelector: 'parallax-x',
    bgSelector: 'parallax-bg',
    bgTopSelector: 'parallax-bg-top',
    topSelector: 'parallax-top',
    btmSelector: 'parallax-btm',
    container: 'section',
    offsetHeader: true, 
    headerId: 'hd',
    minWidth: 64,
    oldBrowserSupport: 'false'
});
```

### Minimum Window Width

Change the minimum screen width to use pureParallax, width size is in EM's (64em = 1024px)
  
```javascript
pureParallax({
  minWidth: 64 // Minimum window width in EMs
});
```
 

## Examples
You can find all the examples [here](http://www.pbalweb.com/pureParallax/).

## Compatibility
| Edge | Firefox | Chrome | Safari | Opera | iOS Safari |
|---|---|---|---|---|---|
| 16+ | 55+ | 58+ | 12.1+ | 45+ | 12.2+ |

Full Browser Support Edge and Safari.

## Author

[Peter Ballasiotes](https://github.com/pballasiotes/)

## Contributing

Open an issue or a pull request to suggest changes or additions.
