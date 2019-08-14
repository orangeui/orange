/**
 * --------------------------------------------------------------------------
 * Orange (v1.0.0): js//src/toggle.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

(function() {
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

  const all_toggles = document.querySelectorAll(TOGGLE_CLASS);

  // Activate all toggles
  function activateToggles() {
    for (let i = 0; all_toggles.length > i; i++) {
      let toggle_wrapper = all_toggles[i];
      let toggle_input = toggle_wrapper.querySelector(TOGGLE_INPUT);
      let value_element = toggle_wrapper.querySelector(TOGGLE_VALUE);

      assignValue(toggle_input, value_element);

      toggle_input.addEventListener("change", toggleValue, false);
    }
  }

  // Function to change value
  function toggleValue(event) {
    const toggle = event.target;
    const current_wrapper = toggle.closest(TOGGLE_CLASS);
    const value_element = current_wrapper.querySelector(TOGGLE_VALUE);

    assignValue(toggle, value_element);
  }

  // Fucntion to assign value to toggle
  function assignValue(toggle, value_element) {
    let parent_toggle = toggle.closest(TOGGLE_CLASS);

    if (toggle.checked){
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
  }

  // On init run activateToggles if they exist
  if (all_toggles.length) {
    activateToggles();
  }

  // Add click event
  document.addEventListener('click', function (event) {
    // event.preventDefault()
    // let currentTarget = event.target.tagName.toLowerCase();
    let isToggleInput = event.target.classList.contains('toggle__input');

    if(isToggleInput) {
      toggleValue(event)
    }
  });

})();
