/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/toggle.js
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
  
  function toggleActiveClass(evt) {
    let input = evt.target;
    let input_has_text = input.value !== "" && input.value !== null;
    
    if (input_has_text) {
      input.classList.add(Classes._active_class);
    } else {
      input.classList.remove(Classes._active_class);
    }
    if (evt.type === "focusin" && input.getAttribute('readonly') === null) {
      input.classList.add(Classes._active_class);
    }
    if (evt.type === "focusout" && !input_has_text) {
      input.classList.remove(Classes._active_class);
    }
  }

  return {
    text_inputs: text_inputs,
    activateTextInputs: activateTextInputs,
    toggleActiveClass: toggleActiveClass
  }
  
})();

if (Input.text_inputs.length){
  Input.activateTextInputs();  
}

document.addEventListener('focusin', function (event) {
  Input.toggleActiveClass(event)
})

document.addEventListener('focusout', function (event) {
  Input.toggleActiveClass(event)
})

export default Input