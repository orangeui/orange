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
    _active_class: "is-full",
    _open_class: "is-open"
  };
  const Selectors = {
    dropdown: ".form-dropdown",
    _input: ".form-dropdown__input",
    _option: ".form-dropdown__menu li",
    _text: ".form-dropdown__text"
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
    current_dropdown.classList.add(Classes._active_class);
    current_dropdown.classList.remove(Classes._open_class);
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

      if (typeof current_value === "string" && current_value !== '') {
        dropdown.querySelector(Selectors._text).innerText = current_value;
        dropdown.classList.add(Classes._active_class);
      } // dropdown.addEventListener("click", toggleDropdown, false);


      let options = dropdown.querySelectorAll(Selectors._option);

      for (let ii = 0; ii < options.length; ii++) {
        let dropdown_option = options[ii];
        dropdown_option.addEventListener("click", _selectDropdownOption, false);
      }
    }

    document.addEventListener('click', function (event) {
      if (!event.target.closest(Selectors.dropdown)) {
        event.stopPropagation();
        closeDropdowns();
      }
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

if (Dropdown.dropdowns) {
  Dropdown.activateDropdowns();
} // Add click event


document.addEventListener('click', function (event) {
  if (!Dropdown.dropdowns) {
    Dropdown.activateDropdowns();
  }

  const isDropdownLabel = event.target.classList.contains('form-dropdown__label') || event.target.classList.contains('form-dropdown__text');

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
    _active_class: "is-full"
  };
  const Selectors = {
    _input: ".form--large .form__input"
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

      if (typeof text_input.value === "string" && text_input.value !== '') {
        text_input.classList.add(Classes._active_class);
      }
    }
  } // Function to toggle active class


  function toggleActiveClass(event) {
    let input = event.target;
    let input_has_text = input.value !== "" && input.value !== null;

    if (input.classList.contains('form__input')) {
      if (input_has_text || event.type === "focusin" && input.getAttribute('readonly') === null) {
        input.classList.add(Classes._active_class);
      } else if (event.type === "focusout" && !input_has_text || !input_has_text) {
        input.classList.remove(Classes._active_class);
      }
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
    toggleActiveClass: toggleActiveClass
  };
}(); // On init run activateTextInputs if they exist


if (Input.text_inputs.length) {
  Input.activateTextInputs();
} // Add focusin event


document.addEventListener('focusin', Input.toggleActiveClass, false); // Add focusout event

document.addEventListener('focusout', Input.toggleActiveClass, false);
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
    _active_class: "is-full"
  };
  const Selectors = {
    _textarea: ".form .form__textarea",
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

      if (typeof textarea.value === "string" && textarea.value !== '') {
        textarea.classList.add(Classes._active_class);
      }
    }
  } // Function to toggle active class


  function toggleActiveClass(event) {
    let textarea = event.target;
    let textarea_has_text = textarea.value !== "" && textarea.value !== null;

    if (textarea_has_text || event.type === "focusin") {
      textarea.classList.add(Classes._active_class);
    } else if (event.type === "focusout" && !textarea_has_text || !textarea_has_text) {
      textarea.classList.remove(Classes._active_class);
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
  /**
  * ------------------------------------------------------------------------
  * Expose public variables and functions
  * ------------------------------------------------------------------------
  */


  return {
    textareas: textareas,
    activateTextareas: activateTextareas,
    toggleActiveClass: toggleActiveClass,
    autoExpandTextarea: autoExpandTextarea,
    auto_expand: Selectors.auto_expand
  };
}(); // On init run activateTextareas if they exist


if (Textarea.textareas.length) {
  Textarea.activateTextareas();
} // Add focusin event


document.addEventListener('focusin', Textarea.toggleActiveClass, false); // Add focusout event

document.addEventListener('focusout', Textarea.toggleActiveClass, false); // Add input event (check if typing inside textarea)

document.addEventListener('input', function (event) {
  let auto_expand_enabled = event.target.hasAttribute(Textarea.auto_expand);

  if (event.target.classList.contains('form__textarea') && auto_expand_enabled) {
    Textarea.autoExpandTextarea(event);
  }
});
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
    _toggle: ".toggle",
    _input: "input[type='checkbox']",
    _value: ".toggle__value",
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
  const isToggleInput = event.target.classList.contains('toggle__input');

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