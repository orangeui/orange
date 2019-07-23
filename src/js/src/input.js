(function() {
  "use strict";

  var ACTIVE_CLASS = "is-full";
  var MAIN_INPUT_ELEMENT = ".form.form--large input.form__input";
  var text_inputs = document.querySelectorAll(MAIN_INPUT_ELEMENT);

  function activateTextInputs() {
    for (var i = 0; i < text_inputs.length; i++) {
      var text_input = text_inputs[i];

      if (typeof text_input.value === "string" && text_input.value !== ''){
        text_input.classList.add(ACTIVE_CLASS);
      } 

      text_input.addEventListener("focusin", toggleActiveClass, false);
      text_input.addEventListener("focusout", toggleActiveClass, false);
    }    
  }  
  
  function toggleActiveClass(evt) {
    var input = evt.target;
    var input_has_text = input.value !== "" && input.value !== null;
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
  }; 

  if (text_inputs.length){
    activateTextInputs();  
  }
  
})();