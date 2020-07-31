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
    _progress_bar_line_text: ".o-progress-bar__line-innerText",
    _progress_bar_circle_inner: ".o-progress-bar__circle",
    _progress_bar_circle_path: ".o-progress-bar__circle-path",
    _progress_bar_text: ".o-progress-bar__text"
  }

  const all_line_progress_bars = document.querySelectorAll(Selectors._progress_bar_line)
  const all_circle_progress_bars = document.querySelectorAll(Selectors._progress_bar_circle) 


  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  /**
  * Private
  */

  function _setLineTextClass(progress_bar) {
    let current_value = progress_bar.ariaValueNow
    let text_wrapper = progress_bar.querySelector(Selectors._progress_bar_line_text)

    current_value > 49 ? text_wrapper.classList.remove(Classes._line_inner_text_below) : text_wrapper.classList.add(Classes._line_inner_text_below)
  }

  /** Circle private functions
  --------------------------------------------------*/
  function _setProgressBarWidthHeight (progress_bar) {
    let width = progress_bar.dataset.width
    let circle_element = progress_bar.querySelector(Selectors._progress_bar_circle_inner)

    console.log(circle_element)
    Object.assign(circle_element.style, { width: width + 'px', height: width + 'px' })
  }
  
  function _relative_stroke_width (progress_bar) {
    let width = progress_bar.dataset.width
    let stroke_width = progress_bar.dataset.strokeWidth

    return (stroke_width / width * 100).toFixed(1)
  }

  function _track_path (progress_bar_relative_stroke_width) {
    const radius = parseInt(50 - parseFloat(progress_bar_relative_stroke_width) / 2, 10)

    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`
  }

  function _perimeter (progress_bar_relative_stroke_width) {
    const radius = 50 - parseFloat(progress_bar_relative_stroke_width) / 2
    return 2 * Math.PI * radius
  }

  function _circle_path_style (progress_bar) {
    let current_value = progress_bar.ariaValueNow
    const perimeter = _perimeter(_relative_stroke_width(progress_bar))

    return {
      strokeDasharray: `${perimeter}px,${perimeter}px`,
      strokeDashoffset: (1 - current_value / 100) * perimeter + 'px',
      transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
    }
  }

  function _set_custom_text_font_size (progress_bar) {
    let width = progress_bar.dataset.width
    let custom_text = progress_bar.querySelector(Selectors._progress_bar_text)


    if (custom_text) {
      console.log(custom_text, width)
    }
    // this.width * 0.111111 + 2 
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

  function checkLineProgressBars () {
    for (let i = all_line_progress_bars.length - 1; i >= 0; i--) {
      let progress_bar = all_line_progress_bars[i]

      _setLineTextClass(progress_bar)
    }
  }

  function checkCircleProgressBars () {
    for (let i = all_circle_progress_bars.length - 1; i >= 0; i--) {
      let progress_bar = all_circle_progress_bars[i]
      let relative_stroke_width = _relative_stroke_width(progress_bar)
      let circle_path = progress_bar.querySelector(Selectors._progress_bar_circle_path)
      let paths = progress_bar.querySelectorAll('path')
      
      _setProgressBarWidthHeight(progress_bar)

      // Set styles to Main path (percentage path) 
      Object.assign(circle_path.style, _circle_path_style(progress_bar));

      // Set d and stroke-width to paths
      for (var paths_i = paths.length - 1; paths_i >= 0; paths_i--) {
        let path = paths[paths_i]

        path.setAttribute('d', _track_path(relative_stroke_width))
        path.setAttribute('stroke-width', relative_stroke_width)
      }

      _set_custom_text_font_size(progress_bar)
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
    checkLineProgressBars: checkLineProgressBars,
    all_circle_progress_bars: all_circle_progress_bars,
    checkCircleProgressBars: checkCircleProgressBars
  }

})()

// On init run activateToggles if they exist
// if (Toggle.all_toggles.length) {
//   Toggle.activateToggles()
// }

if (ProgressBar.all_line_progress_bars.length) {
  ProgressBar.checkLineProgressBars();
}

ProgressBar.checkCircleProgressBars();


// Add click event
// document.addEventListener('click', function (event) {
//   const isToggleInput = event.target.classList.contains('o-toggle__input')

//   if (isToggleInput) {
//     Toggle.toggleValue(event)
//   }
// })

export default ProgressBar
