# pureParallax.js

pureParallax.js is an easy to use and extremely lightweight (Only 1.4 Kb) Vanilla JS library that adds parallax animations on any images or elements.

What stands out with pureParallax.js is it's ease of use and implementation. Adding parallax effects to elements or images can be done quickly and easily, all without having to touch any JS. It can be used on elements with any type of positioning (relative, absolute, fixed, ...). It works on css background images,  inline images, and any type of html element.

## How it works
pureParallax.js works by adjusting the translateY or translateX value for CSS transform proporty of the element. And on background images it adjusts the background-postition. It's pretty rad! 


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

HTML: Add a 'data-depth' attribute to any element. Note:The element should be in a container

```html
  <div>
    <div data-depth=".3">Parallax Element</div>
  </div>
```

and you'll be running!

___

Change the parallax axis by adding a 'parallax-x' class to the element

```html
  <div data-depth=".3" class="parallax-x">
```

Parallax a background image on a element

```html
  <div data-depth=".35" class="parallax-bg">
```

Parallax an element or background image at the top of a page like this:

```html
  <div data-depth=".35" class="parallax-bg-top"></div>
  <div data-depth=".35" class="parallax-top"></div>
```

### Default Usage
```html
<div data-depth=".3">
```

### Background Images
```html
<div data-depth=".35" class="parallax-bg">
```

### Top of Page Elements
  
When elements are at the top of the page. To prevent any lag, add the 'parallax-top' class. 
  
```html
<div data-depth=".35" class="parallax-top">
```

### Top of Page background Images
```html
<div data-depth=".35" class="parallax-bg-top">
```

When backgrounds are at the top of page, add the 'parallax-bg-top' class.


## Methods

### Change Selectors
By default, the selector is [data-depth] attribute
  
```javascript
pureParallax({
  selector: '[data-depth]', // Default Selector
  axisSelector: '.parallax-x', // Default Axis Selector
  bgSelector: '.parallax-bg', // Default BG Selector
  bgTopSelector: '.parallax-bg-top', // Default BG Top Selector
  topSelector: '.parallax-top' // Default Top Selector
});
```

### Minimum Window Width

Change the minimum screen width to use pureParallax, width size is in EM's (64em = 1024px)
  
```javascript
pureParallax({
  minWidth: 64 // Minimum window width in EMs
});
```
  
### Example Usage (Default) -- Settings are optional

```javascript
pureParallax({
  selector: '[data-depth]',
  minWidth: 64
});
```


## Examples
You can find all the examples [here](https://pbalweb.com/pureParallax).

## Compatibility
| IE | Edge | Firefox | Chrome | Safari | Opera | iOS Safari |
|---|---|---|---|---|---|---|
| 9+ | 16+ | 55+ | 58+ | 12.1+ | 45+ | 12.2+ |

Extra Wide Browser Support Including IE9 and Edge!

## Author

[Peter Ballasiotes](https://github.com/pballasiotes/)

## Contributing

Open an issue or a pull request to suggest changes or additions.
