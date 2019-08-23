/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/toggle.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const Toggle = (function() {
  
  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */

  const State = {
    _enabled_default: "On",
    _disabled_default: "Off"
  }
  
  const Classes = {
    _active_class: "is-checked"
  }

  const Selectors = {
    _toggle: ".toggle",
    _input: "input[type='checkbox']",
    _value: ".toggle__value",
    _enabled_data_setting: "data-enabled",
    _disabled_data_setting: "data-disabled"
  }
  
  const all_toggles = document.querySelectorAll(Selectors._toggle)

  // Function to activate all toggles
  function activateToggles() {
    for (let i = 0; all_toggles.length > i; i++) {
      let toggle_wrapper = all_toggles[i]
      let toggle_input = toggle_wrapper.querySelector(Selectors._input)
      let value_element = toggle_wrapper.querySelector(Selectors._value)

      assignValue(toggle_input, value_element)

      toggle_input.addEventListener("change", toggleValue, false)
    }
  }

  // Function to change value
  function toggleValue(event) {
    const toggle = event.target
    const current_wrapper = toggle.closest(Selectors._toggle)
    const value_element = current_wrapper.querySelector(Selectors._value)

    assignValue(toggle, value_element)
  }

  // Function to assign value to toggle
  function assignValue(toggle, value_element) {
    let parent_toggle = toggle.closest(Selectors._toggle)

    if (toggle.checked) {
      if (value_element) {
        let value_text = value_element.getAttribute(Selectors._enabled_data_setting) || State._enabled_default
        value_element.innerText = value_text
      }

      parent_toggle.classList.add(Classes._active_class)

    } else {
      if (value_element) {
        let value_text = value_element.getAttribute(Selectors._disabled_data_setting) || State._disabled_default
        value_element.innerText = value_text
      }

      parent_toggle.classList.remove(Classes._active_class)
    }
  }

  // Return public variables and functions
  return {
    all_toggles: all_toggles,
    activateToggles: activateToggles,
    toggleValue: toggleValue
  }

})()

// On init run activateToggles if they exist
if (Toggle.all_toggles.length) {
  Toggle.activateToggles()
}

// Add click event
document.addEventListener('click', function (event) {
  const isToggleInput = event.target.classList.contains('toggle__input')

  if (isToggleInput) {
    Toggle.toggleValue(event)
  }
})

export default Toggle