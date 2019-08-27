/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/input.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const Input = (function() {

  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */

  const Classes = {
    _active_class: "is-full"
  }

  const Selectors = {
    _input: ".form--large .form__input",
  }

  const text_inputs = document.querySelectorAll(Selectors._input);



  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  // Function to activate all inputs
  function activateTextInputs() {
    for (var i = 0; i < text_inputs.length; i++) {
      let text_input = text_inputs[i];

      if (typeof text_input.value === "string" && text_input.value !== ''){
        text_input.classList.add(Classes._active_class);
      }

      // text_input.addEventListener("focusin", toggleActiveClass, false);
      // text_input.addEventListener("focusout", toggleActiveClass, false);
    }
  }

  // Function to toggle active class
  function toggleActiveClass(evt) {
    let input = evt.target;
    let input_has_text = input.value !== "" && input.value !== null;

    if (input.classList.contains('form__input')) {
      if (input_has_text || evt.type === "focusin" && input.getAttribute('readonly') === null) {
        input.classList.add(Classes._active_class);
      } else if(evt.type === "focusout" && !input_has_text || !input_has_text) {
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
  }

})();

// On init run activateTextInputs if they exist
if (Input.text_inputs.length){
  Input.activateTextInputs();
}

// Add focusin event
document.addEventListener('focusin', Input.toggleActiveClass, false)

// Add focusout event
document.addEventListener('focusout', Input.toggleActiveClass, false)

export default Input
