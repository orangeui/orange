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
    _focus_class: 'has-focus',
    _value_class: 'has-value'
  }

  const Selectors = {
    _input: '.o-form .o-form__input',
  }

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

      if (typeof text_input.value === 'string' && text_input.value !== ''){
        text_input.classList.add(Classes._value_class);
      }
    }
  }

  // Function to toggle active class
  function toggleFocusClass (event) {
    let input = event.target;

    if (input.classList.contains('o-form__input')) {
      return event.type === 'focusin' && input.getAttribute('readonly') === null ? input.classList.add(Classes._focus_class) : input.classList.remove(Classes._focus_class)
    }
  }

  function toggleValueClass (event) {
    let input = event.target
    let input_has_text = input.value !== '' && input.value !== null;

    if (input.classList.contains('o-form__input')) {
      return input_has_text ? input.classList.add(Classes._value_class) : input.classList.remove(Classes._value_class)
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
  }

})();

// On init run activateTextInputs if they exist
if (Input.text_inputs.length){
  Input.activateTextInputs();
}

// Add input event (check if typing inside input)
document.addEventListener('input', Input.toggleValueClass, false)

// Add focusin event
document.addEventListener('focusin', Input.toggleFocusClass, false)

// Add focusout event
document.addEventListener('focusout', Input.toggleFocusClass, false)

export default Input
