/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/progress-bar.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const ProgressBar = (function() {

  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */

  const Classes = {
    _line_inner_text_below: "o-progress-bar__line-innerText--below"
  }

  const Selectors = {
    _progress_bar: ".o-progress-bar",
    _progress_bar_line: ".o-progress-bar--line",
    _progress_bar_circle: ".o-progress-bar--circle",
    _progress_bar_line_text: ".o-progress-bar__line-innerText"
  }

  const all_line_progress_bars = document.querySelectorAll(Selectors._progress_bar_line)
  // const all_circle_progress_bars = document.querySelectorAll(Selectors._progress_bar_circle) 


  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  /**
  * Private
  */

  function _setTextClass(progress_bar) {
    let current_value = progress_bar.ariaValueNow
    let text_wrapper = progress_bar.querySelector(Selectors._progress_bar_line_text)

    current_value > 49 ? text_wrapper.classList.remove(Classes._line_inner_text_below) : text_wrapper.classList.add(Classes._line_inner_text_below)
  }

  // Function to assign value to toggle
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

  function checkProgressBars () {
    for (let i = all_line_progress_bars.length - 1; i >= 0; i--) {
      let progress_bar = all_line_progress_bars[i]

      _setTextClass(progress_bar)
    }
  }

  // Function to activate all toggles
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
    checkProgressBars: checkProgressBars
  }

})()

// On init run activateToggles if they exist
// if (Toggle.all_toggles.length) {
//   Toggle.activateToggles()
// }

console.log(ProgressBar.all_line_progress_bars)
if (ProgressBar.all_line_progress_bars.length) {
  ProgressBar.checkProgressBars();
}

// Add click event
// document.addEventListener('click', function (event) {
//   const isToggleInput = event.target.classList.contains('o-toggle__input')

//   if (isToggleInput) {
//     Toggle.toggleValue(event)
//   }
// })

export default ProgressBar
