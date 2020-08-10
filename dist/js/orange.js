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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/src/dom/polyfills.js":
/*!*************************************!*\
  !*** ./src/js/src/dom/polyfills.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) {
        return el;
      }

      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

/***/ }),

/***/ "./src/js/src/dropdown.js":
/*!********************************!*\
  !*** ./src/js/src/dropdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/dropdown.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */
const Dropdown = function () {
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const Classes = {
    _value_class: 'has-value',
    _open_class: 'is-open',
    _search_class: 'o-form-dropdown--search'
  };
  const Selectors = {
    dropdown: '.o-form-dropdown',
    dropdown_search: 'o-form-dropdown--search',
    _input: '.o-form-dropdown__input',
    _option: '.o-form-dropdown__menu li',
    _text: '.o-form-dropdown__text'
  };
  let dropdowns;
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  /**
  * Private
  */
  // Function to check if dropdown is opened

  function _isOpen(dropdown_el) {
    return dropdown_el.classList.contains(Classes._open_class);
  } // Function to select option


  function _selectDropdownOption(event) {
    event.stopPropagation();
    let option = event.target;
    let option_value = option.innerText;
    let current_dropdown = option.closest(Selectors.dropdown);
    current_dropdown.querySelector(Selectors._input).value = option_value;
    current_dropdown.querySelector(Selectors._text).innerText = option_value;
    current_dropdown.classList.add(Classes._value_class);
    current_dropdown.classList.remove(Classes._open_class);
  } // Function to check if dropdown is search


  function _isSearch(dropdown_el) {
    return dropdown_el.classList.contains(Classes._search_class);
  }
  /**
  * Public
  */
  // Function to get all dropdowns


  function getDropdowns() {
    dropdowns = document.querySelectorAll(Selectors.dropdown);
  } // Function to activate all dropdowns


  function activateDropdowns() {
    getDropdowns();

    for (let i = 0; i < dropdowns.length; i++) {
      let dropdown = dropdowns[i];
      let current_value = dropdown.querySelector(Selectors._input).value;

      if (typeof current_value === 'string' && current_value !== '') {
        dropdown.querySelector(Selectors._text).innerText = current_value;
        dropdown.classList.add(Classes._value_class);
      } // List items


      let options = dropdown.querySelectorAll(Selectors._option);

      for (let ii = 0; ii < options.length; ii++) {
        let dropdown_option = options[ii];
        let dropdown_option_text = dropdown_option.textContent || dropdown_option.innerText; // Add event listener to search trough the list

        if (_isSearch(dropdown)) {
          dropdown.addEventListener('keyup', function () {
            let repeat_current_value = dropdown.querySelector(Selectors._input).value;
            let filter_value = repeat_current_value.toUpperCase();

            if (dropdown_option_text.toUpperCase().indexOf(filter_value) > -1) {
              dropdown_option.style.display = "";
            } else {
              dropdown_option.style.display = "none";
            }
          });
        }

        dropdown_option.addEventListener('click', _selectDropdownOption, {
          once: true
        });
      }
    }

    document.addEventListener('click', function (event) {
      if (!event.target.closest(Selectors.dropdown)) {
        event.stopPropagation();
        closeDropdowns();
      }
    }, {
      once: true
    });
  } // Function to toggle dropdown active class


  function toggleDropdown(event) {
    let dropdown = event.target;
    let current_dropdown = dropdown.closest(Selectors.dropdown);

    if (_isOpen(current_dropdown)) {
      current_dropdown.classList.remove(Classes._open_class);
    } else {
      current_dropdown.classList.add(Classes._open_class);
    }
  } // Function to close dropdowns


  function closeDropdowns() {
    if (dropdowns === undefined || dropdowns.length === 0) {
      getDropdowns();
    }

    for (let i = 0; i < dropdowns.length; i++) {
      let dropdown = dropdowns[i];
      dropdown.classList.remove(Classes._open_class);
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Expose public variables and functions
  * ------------------------------------------------------------------------
  */


  return {
    dropdowns: dropdowns,
    getDropdowns: getDropdowns,
    activateDropdowns: activateDropdowns,
    toggleDropdown: toggleDropdown,
    closeDropdowns: closeDropdowns,
    dropdown: Selectors.dropdown
  };
}(); // On init run getDropdowns


Dropdown.getDropdowns(); // On init run activateToggles if they exist

Dropdown.activateDropdowns(); // Add click event

document.addEventListener('click', function (event) {
  if (!Dropdown.dropdowns) {
    Dropdown.activateDropdowns();
  }

  const isDropdownLabel = event.target.classList.contains('o-form-dropdown__label') || event.target.classList.contains('o-form-dropdown__text') || event.target.classList.contains('o-form-dropdown__input');

  if (isDropdownLabel) {
    Dropdown.closeDropdowns();
    Dropdown.toggleDropdown(event);
  }

  if (!event.target.closest(Dropdown.dropdown)) {
    event.stopPropagation();
    Dropdown.closeDropdowns();
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./src/js/src/input.js":
/*!*****************************!*\
  !*** ./src/js/src/input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/input.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */
const Input = function () {
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const Classes = {
    _focus_class: 'has-focus',
    _value_class: 'has-value'
  };
  const Selectors = {
    _input: '.o-form .o-form__input'
  };
  const text_inputs = document.querySelectorAll(Selectors._input);
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  /**
  * Public
  */
  // Function to activate all inputs

  function activateTextInputs() {
    for (var i = 0; i < text_inputs.length; i++) {
      let text_input = text_inputs[i];

      if (typeof text_input.value === 'string' && text_input.value !== '') {
        text_input.classList.add(Classes._value_class);
      }
    }
  } // Function to toggle active class


  function toggleFocusClass(event) {
    let input = event.target;

    if (input.classList.contains('o-form__input')) {
      return event.type === 'focusin' && input.getAttribute('readonly') === null ? input.classList.add(Classes._focus_class) : input.classList.remove(Classes._focus_class);
    }
  }

  function toggleValueClass(event) {
    let input = event.target;
    let input_has_text = input.value !== '' && input.value !== null;

    if (input.classList.contains('o-form__input')) {
      return input_has_text ? input.classList.add(Classes._value_class) : input.classList.remove(Classes._value_class);
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Expose public variables and functions
  * ------------------------------------------------------------------------
  */


  return {
    text_inputs: text_inputs,
    activateTextInputs: activateTextInputs,
    toggleFocusClass: toggleFocusClass,
    toggleValueClass: toggleValueClass
  };
}(); // On init run activateTextInputs if they exist


if (Input.text_inputs.length) {
  Input.activateTextInputs();
} // Add input event (check if typing inside input)


document.addEventListener('input', Input.toggleValueClass, false); // Add focusin event

document.addEventListener('focusin', Input.toggleFocusClass, false); // Add focusout event

document.addEventListener('focusout', Input.toggleFocusClass, false);
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/js/src/orange.js":
/*!******************************!*\
  !*** ./src/js/src/orange.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_polyfills_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/polyfills.js */ "./src/js/src/dom/polyfills.js");
/* harmony import */ var _dom_polyfills_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_polyfills_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.js */ "./src/js/src/dropdown.js");
/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle.js */ "./src/js/src/toggle.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.js */ "./src/js/src/input.js");
/* harmony import */ var _textarea_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textarea.js */ "./src/js/src/textarea.js");
/* harmony import */ var _progress_bar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-bar.js */ "./src/js/src/progress-bar.js");







/***/ }),

/***/ "./src/js/src/progress-bar.js":
/*!************************************!*\
  !*** ./src/js/src/progress-bar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/progress-bar.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */
const ProgressBar = function () {
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const Classes = {
    _line_inner_text_below: "o-progress-bar__line-innerText--below"
  };
  const Selectors = {
    _progress_bar: ".o-progress-bar",
    _progress_bar_line: ".o-progress-bar--line",
    _progress_bar_circle: ".o-progress-bar--circle",
    _progress_bar_line_text: ".o-progress-bar__line-innerText",
    _progress_bar_line_color_wrapper: ".o-progress-bar__line-outer",
    _progress_bar_circle_inner: ".o-progress-bar__circle",
    _progress_bar_circle_path: ".o-progress-bar__circle-path",
    _progress_bar_text: ".o-progress-bar__text"
  };
  const all_line_progress_bars = document.querySelectorAll(Selectors._progress_bar_line);
  const all_circle_progress_bars = document.querySelectorAll(Selectors._progress_bar_circle);
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  /**
  * Private
  */

  function _setLineTextClass(progress_bar) {
    const current_value = progress_bar.ariaValueNow;
    const text_wrapper = progress_bar.querySelector(Selectors._progress_bar_line_text);

    if (text_wrapper) {
      current_value > 49 ? text_wrapper.classList.remove(Classes._line_inner_text_below) : text_wrapper.classList.add(Classes._line_inner_text_below);
    }
  }

  function _setLineHeight(progress_bar) {
    const height = progress_bar.dataset.strokeWidth;
    const color_wrapper = progress_bar.querySelector(Selectors._progress_bar_line_color_wrapper);
    color_wrapper.style.height = height + 'px';
  }
  /** Circle private functions
  --------------------------------------------------*/


  function _setProgressBarWidthHeight(progress_bar) {
    const width = progress_bar.dataset.width;
    const circle_element = progress_bar.querySelector(Selectors._progress_bar_circle_inner);
    Object.assign(circle_element.style, {
      width: width + 'px',
      height: width + 'px'
    });
  }

  function _relative_stroke_width(progress_bar) {
    const width = progress_bar.dataset.width;
    const stroke_width = progress_bar.dataset.strokeWidth;
    return (stroke_width / width * 100).toFixed(1);
  }

  function _track_path(progress_bar_relative_stroke_width) {
    const radius = parseInt(50 - parseFloat(progress_bar_relative_stroke_width) / 2, 10);
    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
  }

  function _perimeter(progress_bar_relative_stroke_width) {
    const radius = 50 - parseFloat(progress_bar_relative_stroke_width) / 2;
    return 2 * Math.PI * radius;
  }

  function _circle_path_style(progress_bar) {
    const current_value = progress_bar.ariaValueNow;

    const perimeter = _perimeter(_relative_stroke_width(progress_bar));

    return {
      strokeDasharray: `${perimeter}px,${perimeter}px`,
      strokeDashoffset: (1 - current_value / 100) * perimeter + 'px',
      transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
    };
  }

  function _set_custom_text_font_size(progress_bar) {
    const width = progress_bar.dataset.width;
    const custom_text = progress_bar.querySelector(Selectors._progress_bar_text);
    const stroke_width = parseInt(_relative_stroke_width(progress_bar)) + 5;

    if (custom_text) {
      const text_size = width * 0.111111 + 2 + 'px';
      const text_style = {
        fontSize: text_size,
        padding: `0px ${stroke_width}px`
      };
      Object.assign(custom_text.style, text_style);
    }
  } // Function to assign value to toggle
  // function _assignValue(toggle, value_element) {
  //   let parent_toggle = toggle.closest(Selectors._toggle)
  //   if (toggle.checked) {
  //     _getDataSetting(value_element, '_enabled')
  //     parent_toggle.classList.add(Classes._active_class)
  //   } else {
  //     _getDataSetting(value_element, '_disabled')
  //     parent_toggle.classList.remove(Classes._active_class)
  //   }
  // }
  // function _getDataSetting (value_element, property) {
  //   if (value_element) {
  //     value_element.innerText = value_element.getAttribute(Selectors[`${property}_data_setting`]) || State[`${property}_default`]
  //   }
  // }

  /**
  * Public
  */


  function checkLineProgressBars() {
    for (let i = all_line_progress_bars.length - 1; i >= 0; i--) {
      let progress_bar = all_line_progress_bars[i];

      _setLineTextClass(progress_bar);

      _setLineHeight(progress_bar);
    }
  }

  function checkCircleProgressBars() {
    for (let i = all_circle_progress_bars.length - 1; i >= 0; i--) {
      let progress_bar = all_circle_progress_bars[i];

      let relative_stroke_width = _relative_stroke_width(progress_bar);

      let circle_path = progress_bar.querySelector(Selectors._progress_bar_circle_path);
      let paths = progress_bar.querySelectorAll('path');

      _setProgressBarWidthHeight(progress_bar); // Set styles to Main path (percentage path) 


      Object.assign(circle_path.style, _circle_path_style(progress_bar)); // Set d and stroke-width to paths

      for (var paths_i = paths.length - 1; paths_i >= 0; paths_i--) {
        let path = paths[paths_i];
        path.setAttribute('d', _track_path(relative_stroke_width));
        path.setAttribute('stroke-width', relative_stroke_width);
      }

      _set_custom_text_font_size(progress_bar);
    }
  } // Function to activate all toggles
  // function activateToggles() {
  //   for (let i = 0; all_toggles.length > i; i++) {
  //     let toggle_wrapper = all_toggles[i]
  //     let toggle_input = toggle_wrapper.querySelector(Selectors._input)
  //     let value_element = toggle_wrapper.querySelector(Selectors._value)
  //     _assignValue(toggle_input, value_element)
  //     toggle_input.addEventListener("change", toggleValue, false)
  //   }
  // }
  // Function to change value
  // function toggleValue(event) {
  //   const toggle = event.target
  //   const current_wrapper = toggle.closest(Selectors._toggle)
  //   const value_element = current_wrapper.querySelector(Selectors._value)
  //   _assignValue(toggle, value_element)
  // }

  /**
  * ------------------------------------------------------------------------
  * Expose public variables and functions
  * ------------------------------------------------------------------------
  */


  return {
    all_line_progress_bars: all_line_progress_bars,
    checkLineProgressBars: checkLineProgressBars,
    all_circle_progress_bars: all_circle_progress_bars,
    checkCircleProgressBars: checkCircleProgressBars
  };
}(); // On init run activateToggles if they exist
// if (Toggle.all_toggles.length) {
//   Toggle.activateToggles()
// }


if (ProgressBar.all_line_progress_bars.length) {
  ProgressBar.checkLineProgressBars();
}

ProgressBar.checkCircleProgressBars(); // Add click event
// document.addEventListener('click', function (event) {
//   const isToggleInput = event.target.classList.contains('o-toggle__input')
//   if (isToggleInput) {
//     Toggle.toggleValue(event)
//   }
// })

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./src/js/src/textarea.js":
/*!********************************!*\
  !*** ./src/js/src/textarea.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/textarea.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */
const Textarea = function () {
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const Classes = {
    _focus_class: 'has-focus',
    _value_class: 'has-value'
  };
  const Selectors = {
    _textarea: '.o-form .o-form__textarea',
    _read_only: 'readonly',
    auto_expand: 'data-auto-expand'
  };
  const textareas = document.querySelectorAll(Selectors._textarea);
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  /**
  * Public
  */
  // Function to activate all textareas

  function activateTextareas() {
    for (let i = 0; i < textareas.length; i++) {
      let textarea = textareas[i];

      if (typeof textarea.value === 'string' && textarea.value !== '') {
        textarea.classList.add(Classes._value_class);
      }
    }
  } // Function to toggle active class


  function toggleFocusClass(event) {
    let textarea = event.target;
    let textarea_readonly = textarea.getAttribute('readonly') === 'readonly' || textarea.getAttribute('readonly') === '';

    if (textarea.classList.contains('o-form__textarea')) {
      return event.type === 'focusin' && !textarea_readonly ? textarea.classList.add(Classes._focus_class) : textarea.classList.remove(Classes._focus_class);
    }
  } // Function to add posibility for auto expanding textarea


  function autoExpandTextarea(event) {
    const el = event.target;
    const offset = el.offsetHeight - el.clientHeight;

    if (el.value) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + offset + 'px';
    } else {
      el.style.height = 'auto';
    }
  }

  function onInput(event) {
    let textarea = event.target;
    let textarea_has_text = textarea.value !== '' && textarea.value !== null;
    let auto_expand_enabled = event.target.hasAttribute(Textarea.auto_expand);

    if (textarea.classList.contains('o-form__textarea')) {
      if (auto_expand_enabled) {
        autoExpandTextarea(event);
      }

      return textarea_has_text ? textarea.classList.add(Classes._value_class) : textarea.classList.remove(Classes._value_class);
    }
  }
  /**
  * ------------------------------------------------------------------------
  * Expose public variables and functions
  * ------------------------------------------------------------------------
  */


  return {
    textareas: textareas,
    activateTextareas: activateTextareas,
    toggleFocusClass: toggleFocusClass,
    onInput: onInput,
    auto_expand: Selectors.auto_expand
  };
}(); // On init run activateTextareas if they exist


if (Textarea.textareas.length) {
  Textarea.activateTextareas();
} // Add focusin event


document.addEventListener('focusin', Textarea.toggleFocusClass, false); // Add focusout event

document.addEventListener('focusout', Textarea.toggleFocusClass, false); // Add input event (check if typing inside textarea)

document.addEventListener('input', Textarea.onInput, false);
/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./src/js/src/toggle.js":
/*!******************************!*\
  !*** ./src/js/src/toggle.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/toggle.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */
const Toggle = function () {
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const State = {
    _enabled_default: "On",
    _disabled_default: "Off"
  };
  const Classes = {
    _active_class: "is-checked"
  };
  const Selectors = {
    _toggle: ".o-toggle",
    _input: "input[type='checkbox']",
    _value: ".o-toggle__value",
    _enabled_data_setting: "data-enabled",
    _disabled_data_setting: "data-disabled"
  };
  const all_toggles = document.querySelectorAll(Selectors._toggle);
  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  /**
  * Private
  */
  // Function to assign value to toggle

  function _assignValue(toggle, value_element) {
    let parent_toggle = toggle.closest(Selectors._toggle);

    if (toggle.checked) {
      _getDataSetting(value_element, '_enabled');

      parent_toggle.classList.add(Classes._active_class);
    } else {
      _getDataSetting(value_element, '_disabled');

      parent_toggle.classList.remove(Classes._active_class);
    }
  }

  function _getDataSetting(value_element, property) {
    if (value_element) {
      value_element.innerText = value_element.getAttribute(Selectors[`${property}_data_setting`]) || State[`${property}_default`];
    }
  }
  /**
  * Public
  */
  // Function to activate all toggles


  function activateToggles() {
    for (let i = 0; all_toggles.length > i; i++) {
      let toggle_wrapper = all_toggles[i];
      let toggle_input = toggle_wrapper.querySelector(Selectors._input);
      let value_element = toggle_wrapper.querySelector(Selectors._value);

      _assignValue(toggle_input, value_element);

      toggle_input.addEventListener("change", toggleValue, false);
    }
  } // Function to change value


  function toggleValue(event) {
    const toggle = event.target;
    const current_wrapper = toggle.closest(Selectors._toggle);
    const value_element = current_wrapper.querySelector(Selectors._value);

    _assignValue(toggle, value_element);
  }
  /**
  * ------------------------------------------------------------------------
  * Expose public variables and functions
  * ------------------------------------------------------------------------
  */


  return {
    all_toggles: all_toggles,
    activateToggles: activateToggles,
    toggleValue: toggleValue
  };
}(); // On init run activateToggles if they exist


if (Toggle.all_toggles.length) {
  Toggle.activateToggles();
} // Add click event


document.addEventListener('click', function (event) {
  const isToggleInput = event.target.classList.contains('o-toggle__input');

  if (isToggleInput) {
    Toggle.toggleValue(event);
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ }),

/***/ "./src/scss/src/styles.scss":
/*!**********************************!*\
  !*** ./src/scss/src/styles.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./src/js/src/orange.js ./src/scss/src/styles.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/src/orange.js */"./src/js/src/orange.js");
module.exports = __webpack_require__(/*! ./src/scss/src/styles.scss */"./src/scss/src/styles.scss");


/***/ })

/******/ });
//# sourceMappingURL=orange.js.map