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
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  const ACTIVE_CLASS = "is-full";
  const DROPDOWN_OPEN_CLASS = "is-open";
  const MAIN_DROPDOWN_ELEMENT = "div.form-dropdown";
  const DROPDOWN_INPUT = ".form-dropdown__input";
  const DROPDOWN_OPTION = ".form-dropdown__menu li";
  const DROPDOWN_TEXT = ".form-dropdown__text";
  const dropdowns = document.querySelectorAll(MAIN_DROPDOWN_ELEMENT);

  function isOpen(dropdown_el) {
    return dropdown_el.classList.contains(DROPDOWN_OPEN_CLASS);
  }

  function activateDropdowns() {
    for (let i = 0; i < dropdowns.length; i++) {
      let dropdown = dropdowns[i];
      let current_value = dropdown.querySelector(DROPDOWN_INPUT).value;

      if (typeof current_value === "string" && current_value !== '') {
        dropdown.querySelector(DROPDOWN_TEXT).innerText = current_value;
        dropdown.classList.add(ACTIVE_CLASS);
      }

      dropdown.addEventListener("click", toggleDropdown, false);
      let options = dropdown.querySelectorAll(DROPDOWN_OPTION);

      for (let ii = 0; ii < options.length; ii++) {
        let dropdown_option = options[ii];
        dropdown_option.addEventListener("click", selectDropdownOption, false);
      }
    }

    document.querySelector('body').addEventListener('click', function (evt) {
      if (!evt.target.closest(MAIN_DROPDOWN_ELEMENT)) {
        evt.stopPropagation();
        closeDropdowns();
      }
    });
  }

  function toggleDropdown(evt) {
    let dropdown = evt.target;
    let current_dropdown = dropdown.closest(MAIN_DROPDOWN_ELEMENT);

    if (isOpen(current_dropdown)) {
      current_dropdown.classList.remove(DROPDOWN_OPEN_CLASS);
    } else {
      current_dropdown.classList.add(DROPDOWN_OPEN_CLASS);
    }
  }

  function selectDropdownOption(evt) {
    evt.stopPropagation();
    var option = evt.target;
    var option_value = option.innerText;
    var current_dropdown = option.closest(MAIN_DROPDOWN_ELEMENT);
    current_dropdown.querySelector(DROPDOWN_INPUT).value = option_value;
    current_dropdown.querySelector(DROPDOWN_TEXT).innerText = option_value;
    current_dropdown.classList.add(ACTIVE_CLASS);
    current_dropdown.classList.remove(DROPDOWN_OPEN_CLASS);
  }

  function closeDropdowns() {
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      dropdown.classList.remove(DROPDOWN_OPEN_CLASS);
    }
  }

  if (dropdowns.length) {
    activateDropdowns();
  }
})();

/***/ }),

/***/ "./src/js/src/input.js":
/*!*****************************!*\
  !*** ./src/js/src/input.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  const ACTIVE_CLASS = "is-full";
  const MAIN_INPUT_ELEMENT = ".form.form--large input.form__input";
  const text_inputs = document.querySelectorAll(MAIN_INPUT_ELEMENT);

  function activateTextInputs() {
    for (var i = 0; i < text_inputs.length; i++) {
      let text_input = text_inputs[i];

      if (typeof text_input.value === "string" && text_input.value !== '') {
        text_input.classList.add(ACTIVE_CLASS);
      }

      text_input.addEventListener("focusin", toggleActiveClass, false);
      text_input.addEventListener("focusout", toggleActiveClass, false);
    }
  }

  function toggleActiveClass(evt) {
    let input = evt.target;
    let input_has_text = input.value !== "" && input.value !== null;

    if (input_has_text) {
      input.classList.add(ACTIVE_CLASS);
    } else {
      input.classList.remove(ACTIVE_CLASS);
    }

    if (evt.type === "focusin") {
      input.classList.add(ACTIVE_CLASS);
    }

    if (evt.type === "focusout" && !input_has_text) {
      input.classList.remove(ACTIVE_CLASS);
    }
  }

  if (text_inputs.length) {
    activateTextInputs();
  }
})();

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
/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropdown_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle.js */ "./src/js/src/toggle.js");
/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toggle_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.js */ "./src/js/src/input.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_input_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _textarea_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./textarea.js */ "./src/js/src/textarea.js");
/* harmony import */ var _textarea_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_textarea_js__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/src/textarea.js":
/*!********************************!*\
  !*** ./src/js/src/textarea.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  const ACTIVE_CLASS = "is-full";
  const TEXTAREA_AUTO_EXPAND_DATA_SETTING = 'data-auto-expand';
  const MAIN_TEXTAREA_ELEMENT = ".form textarea.form__textarea";
  const textareas = document.querySelectorAll(MAIN_TEXTAREA_ELEMENT);

  function activateTextareas() {
    for (let i = 0; i < textareas.length; i++) {
      let textarea = textareas[i];

      if (typeof textarea.value === "string" && textarea.value !== '') {
        textarea.classList.add(ACTIVE_CLASS);
      }

      textarea.addEventListener("focusin", toggleActiveClass, false);
      textarea.addEventListener("focusout", toggleActiveClass, false);
      let auto_expand_enabled = textarea.hasAttribute(TEXTAREA_AUTO_EXPAND_DATA_SETTING);

      if (auto_expand_enabled) {
        textarea.addEventListener("input", autoExpandTextarea, false);
      }
    }
  }

  function toggleActiveClass(evt) {
    let textarea = evt.target;
    let textarea_has_text = textarea.value !== "" && textarea.value !== null;

    if (textarea_has_text) {
      textarea.classList.add(ACTIVE_CLASS);
    } else {
      textarea.classList.remove(ACTIVE_CLASS);
    }

    if (evt.type === "focusin") {
      textarea.classList.add(ACTIVE_CLASS);
    }

    if (evt.type === "focusout" && !textarea_has_text) {
      textarea.classList.remove(ACTIVE_CLASS);
    }
  }

  function autoExpandTextarea(evt) {
    let el = evt.target;

    if (el.value) {
      el.style.height = '0px';
      el.style.height = el.scrollHeight + 'px';
    } else {
      el.style.height = '';
    }
  }

  if (textareas.length) {
    activateTextareas();
  }
})();

/***/ }),

/***/ "./src/js/src/toggle.js":
/*!******************************!*\
  !*** ./src/js/src/toggle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * --------------------------------------------------------------------------
 * Orange (v1.0.0): js//src/toggle.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */
(function () {
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */
  const TOGGLE_ENABLED_DEFAULT = "On";
  const TOGGLE_DISABLED_DEFAULT = "Off";
  const TOGGLE_ENABLED_DATA_SETTING = "data-enabled";
  const TOGGLE_DISABLED_DATA_SETTING = "data-disabled";
  const ACTIVE_CLASS = "is-checked";
  const TOGGLE_CLASS = ".toggle";
  const TOGGLE_INPUT = "input[type='checkbox']";
  const TOGGLE_VALUE = ".toggle__value";
  const all_toggles = document.querySelectorAll(TOGGLE_CLASS); // Activate all toggles

  function activateToggles() {
    for (let i = 0; all_toggles.length > i; i++) {
      let toggle_wrapper = all_toggles[i];
      let toggle_input = toggle_wrapper.querySelector(TOGGLE_INPUT);
      let value_element = toggle_wrapper.querySelector(TOGGLE_VALUE);
      assignValue(toggle_input, value_element);
      toggle_input.addEventListener("change", toggleValue, false);
    }
  } // Function to change value


  function toggleValue(event) {
    const toggle = event.target;
    const current_wrapper = toggle.closest(TOGGLE_CLASS);
    const value_element = current_wrapper.querySelector(TOGGLE_VALUE);
    assignValue(toggle, value_element);
  } // Fucntion to assign value to toggle


  function assignValue(toggle, value_element) {
    let parent_toggle = toggle.closest(TOGGLE_CLASS);

    if (toggle.checked) {
      if (value_element) {
        let value_text = value_element.getAttribute(TOGGLE_ENABLED_DATA_SETTING) || TOGGLE_ENABLED_DEFAULT;
        value_element.innerText = value_text;
      }

      parent_toggle.classList.add(ACTIVE_CLASS);
    } else {
      if (value_element) {
        let value_text = value_element.getAttribute(TOGGLE_DISABLED_DATA_SETTING) || TOGGLE_DISABLED_DEFAULT;
        value_element.innerText = value_text;
      }

      parent_toggle.classList.remove(ACTIVE_CLASS);
    }
  } // On init run activateToggles if they exist


  if (all_toggles.length) {
    activateToggles();
  } // Add click event


  document.addEventListener('click', function (event) {
    // event.preventDefault()
    // let currentTarget = event.target.tagName.toLowerCase();
    let isToggleInput = event.target.classList.contains('toggle__input');

    if (isToggleInput) {
      toggleValue(event);
    }
  });
})();

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