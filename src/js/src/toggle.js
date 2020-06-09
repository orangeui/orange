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
    _toggle: ".o-toggle",
    _input: "input[type='checkbox']",
    _value: ".o-toggle__value",
    _enabled_data_setting: "data-enabled",
    _disabled_data_setting: "data-disabled"
  }

  const all_toggles = document.querySelectorAll(Selectors._toggle)



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
    let parent_toggle = toggle.closest(Selectors._toggle)

    if (toggle.checked) {
      _getDataSetting(value_element, '_enabled')

      parent_toggle.classList.add(Classes._active_class)

    } else {
      _getDataSetting(value_element, '_disabled')
      
      parent_toggle.classList.remove(Classes._active_class)
    }
  }

  function _getDataSetting (value_element, property) {
    if (value_element) {
      value_element.innerText = value_element.getAttribute(Selectors[`${property}_data_setting`]) || State[`${property}_default`]
    }
  }


  /**
  * Public
  */

  // Function to activate all toggles
  function activateToggles() {
    for (let i = 0; all_toggles.length > i; i++) {
      let toggle_wrapper = all_toggles[i]
      let toggle_input = toggle_wrapper.querySelector(Selectors._input)
      let value_element = toggle_wrapper.querySelector(Selectors._value)

      _assignValue(toggle_input, value_element)

      toggle_input.addEventListener("change", toggleValue, false)
    }
  }

  // Function to change value
  function toggleValue(event) {
    const toggle = event.target
    const current_wrapper = toggle.closest(Selectors._toggle)
    const value_element = current_wrapper.querySelector(Selectors._value)

    _assignValue(toggle, value_element)
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
  }

})()

// On init run activateToggles if they exist
if (Toggle.all_toggles.length) {
  Toggle.activateToggles()
}

// Add click event
document.addEventListener('click', function (event) {
  const isToggleInput = event.target.classList.contains('o-toggle__input')

  if (isToggleInput) {
    Toggle.toggleValue(event)
  }
})

export default Toggle
