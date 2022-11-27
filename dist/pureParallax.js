"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function pureParallax(customOptions) {
  // pureParallax V.1.0 -- Peter Ballasiotes -- 2022-11-26

  var options = {
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
  };
  for (var property in customOptions) {
    options[property] = customOptions[property];
  }
  var screenWidth, hdHeight;

  // Load, Resize, Scroll
  window.addEventListener('load', onLoadFunction);
  function onLoadFunction() {
    startParallax();
    onResizeFunction();
    window.addEventListener('resize', onResizeFunction);
    window.addEventListener('scroll', startParallax);
  }
  function onResizeFunction() {
    screenWidth = EMsize();
    startParallax(screenWidth);
  }

  // Set header height
  if (options.offsetHeader != false && document.getElementById(options.headerId) != null) {
    hdHeight = document.getElementById(options.headerId).offsetHeight;
  } else {
    hdHeight = 0;
  }

  // Returns screen size in EM
  function EMsize() {
    return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / parseFloat(getComputedStyle(document.querySelector('html')).fontSize);
  }

  // Checks if element is in viewport
  function isInViewport(e) {
    var offset = 0;
    var rect = e.getBoundingClientRect();
    return rect.bottom + offset > 0 && rect.right > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.top - offset < (window.innerHeight || document.documentElement.clientHeight);
  }

  // Find the calculated element BG size
  function getBgSize(e) {
    var computedStyle = getComputedStyle(e),
      image = new Image(),
      src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2'),
      cssSize = computedStyle.backgroundSize,
      elemW = parseInt(computedStyle.width.replace('px', ''), 10),
      elemH = parseInt(computedStyle.height.replace('px', ''), 10),
      elemDim = [elemW, elemH],
      computedDim = [],
      ratio;
    image.src = src;
    ratio = image.width > image.height ? image.width / image.height : image.height / image.width;
    cssSize = cssSize.split(' ');
    computedDim[0] = cssSize[0];
    computedDim[1] = cssSize.length > 1 ? cssSize[1] : 'auto';
    if (cssSize[0] === 'cover') {
      if (elemDim[0] > elemDim[1]) {
        if (elemDim[0] / elemDim[1] >= ratio) {
          computedDim[0] = elemDim[0];
          computedDim[1] = 'auto';
        } else {
          computedDim[0] = 'auto';
          computedDim[1] = elemDim[1];
        }
      } else {
        computedDim[0] = 'auto';
        computedDim[1] = elemDim[1];
      }
    } else if (cssSize[0] === 'contain') {
      if (elemDim[0] < elemDim[1]) {
        computedDim[0] = elemDim[0];
        computedDim[1] = 'auto';
      } else {
        if (elemDim[0] / elemDim[1] >= ratio) {
          computedDim[0] = 'auto';
          computedDim[1] = elemDim[1];
        } else {
          computedDim[1] = 'auto';
          computedDim[0] = elemDim[0];
        }
      }
    } else {
      for (var i = cssSize.length; i--;) {
        if (cssSize[i].indexOf('px') > -1) {
          computedDim[i] = cssSize[i].replace('px', '');
        } else if (cssSize[i].indexOf('%') > -1) {
          computedDim[i] = elemDim[i] * (cssSize[i].replace('%', '') / 100);
        }
      }
    }
    if (computedDim[0] === 'auto' && computedDim[1] === 'auto') {
      computedDim[0] = image.width;
      computedDim[1] = image.height;
    } else {
      ratio = computedDim[0] === 'auto' ? image.height / computedDim[1] : image.width / computedDim[0];
      computedDim[0] = computedDim[0] === 'auto' ? image.width / ratio : computedDim[0];
      computedDim[1] = computedDim[1] === 'auto' ? image.height / ratio : computedDim[1];
    }
    return {
      width: Math.round(computedDim[0]),
      height: Math.round(computedDim[1])
    };
  }

  // Get element distance to top of viewport
  function elemtoTop(e) {
    return e.getBoundingClientRect().top;
  }

  // Check if in viewport and screen width
  function checkConditions(e) {
    return isInViewport(e) && screenWidth >= options.minWidth;
  }

  // Main Parallax Function
  function startParallax() {
    var elements = document.querySelectorAll(options.selector);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var movement = 0;
    var depth, i, len, translate3d, translateBg, bgHeightSized, offsetDistTop, container, startPos, containerSelector;

    // Loop through elements
    //elements.forEach(element => {
    var _iterator = _createForOfIteratorHelper(elements),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var element = _step.value;
        if (element.hasAttribute('data-container')) {
          containerSelector = '.' + element.getAttribute('data-container');
        } else {
          containerSelector = '.' + options.container;
        }
        if (element.closest(containerSelector)) {
          container = element.closest(containerSelector);
        } else {
          container = element.parentElement;
        }
        if (element.hasAttribute('data-start-position')) {
          startPos = element.getAttribute('data-start-position');
        } else {
          startPos = .5;
        }
        var computedStyle = getComputedStyle(element);
        var outerHeightBg = element.offsetHeight;
        outerHeightBg -= parseFloat(computedStyle.borderTop) + parseFloat(computedStyle.borderBottom);
        offsetDistTop = window.pageYOffset;
        depth = element.getAttribute('data-depth');

        // Check if element container visible and for screen width
        if (checkConditions(container)) {
          // -- BG Elements
          if (element.classList.contains(options.bgSelector) || element.classList.contains(options.bgTopSelector) && checkConditions(element)) {
            var bgSized = getBgSize(element);
            var whRatio = (bgSized.width / bgSized.height).toFixed(3);
            if (element.classList.contains(options.bgTopSelector)) {
              movement = offsetDistTop * depth;
              translateBg = '50% ' + Math.round(movement) + 'px';
              element.style.backgroundPosition = translateBg;
            } else {
              movement = -(elemtoTop(element) * depth - hdHeight * depth);
              translateBg = '50% ' + Math.round(movement) + 'px';
              element.style.backgroundPosition = translateBg;
              bgHeightSized = Math.round(outerHeightBg + (windowHeight * depth - outerHeightBg * depth));
              var bgWidthSized = bgHeightSized * whRatio;
              if (bgWidthSized < container.offsetWidth) {
                element.style.backgroundSize = 'cover';
              } else {
                element.style.backgroundSize = 'auto ' + bgHeightSized + 'px';
              }
            }
          }

          // -- Not BG Elements 
          else {
            // Bottom Elements
            if (element.classList.contains(options.btmSelector)) {
              movement = -(document.body.scrollHeight - window.innerHeight - window.scrollY) * depth;
            }
            // Default Elements
            else {
              if (element.classList.contains(options.topSelector)) {
                movement = offsetDistTop * depth;
              } else {
                var outerToTop = -(elemtoTop(container) - hdHeight);
                var outerHeightWindow = (windowHeight - hdHeight - container.offsetHeight) * startPos;
                movement = (outerToTop + outerHeightWindow) * depth;
              }
            }

            // Movement Axis
            if (element.classList.contains(options.axisSelector)) {
              translate3d = 'translate3d(' + Math.round(movement) + 'px, 0, 0)';
            } else {
              translate3d = 'translate3d(0, ' + Math.round(movement) + 'px, 0)';
            }

            // -- Apply Movement
            if (options.oldBrowserSupport == 'true') {
              element.style['-webkit-transform'] = translate3d;
              element.style['-moz-transform'] = translate3d;
              element.style['-ms-transform'] = translate3d;
              element.style['-o-transform'] = translate3d;
              element.style.transform = translate3d;
            } else {
              element.style['-webkit-transform'] = translate3d;
              element.style.transform = translate3d;
            }
          }
        }

        // If not visible or small screen widths
        else {
          if (element.classList.contains(options.bgSelector) || element.classList.contains(options.bgTopSelector) && checkConditions(element)) {
            element.style.backgroundPosition = '50% 50%';
            element.style.backgroundSize = 'cover';
          } else {
            element.style.transform = 'translate3d(0,0,0)';
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}