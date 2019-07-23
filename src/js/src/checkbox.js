(function() {
  "use strict";

  var CHCEKBOX_ENABLED_DEFAULT = "On";
  var CHCEKBOX_DISABLED_DEFAULT = "Off";
  var CHCEKBOX_ENABLED_DATA_SETTING = "data-enabled";
  var CHCEKBOX_DISABLED_DATA_SETTING = "data-disabled";

  var ACTIVE_CLASS = "is-checked";
  var MAIN_CHECKBOX_ELEMENT = ".form .toggle";
  var CHECKBOX_CLASS = ".toggle";
  var CHECKBOX_INPUT = "input[type='checkbox']"
  var CHECKBOX_VALUE = ".toggle__value"

  var checkbox_wrappers = document.querySelectorAll(MAIN_CHECKBOX_ELEMENT);

  function activateCheckboxes() {
    for (var i = 0; checkbox_wrappers.length > i; i++) {
      var checkbox_wrapper = checkbox_wrappers[i];
      var checkbox_input = checkbox_wrapper.querySelector(CHECKBOX_INPUT);
      var value_element = checkbox_wrapper.querySelector(CHECKBOX_VALUE);

      assignValue(checkbox_input, value_element);

      checkbox_input.addEventListener("change", toggleValue, false);
    }    
  }  
  
  function toggleValue(evt) {
    var checkbox = evt.target;
    var current_wrapper  = checkbox.closest(MAIN_CHECKBOX_ELEMENT);
    var value_element = current_wrapper.querySelector(CHECKBOX_VALUE);

    assignValue(checkbox, value_element);
  };

  function assignValue(checkbox, value_element) {
    if (checkbox.checked){
      var value_text = value_element.getAttribute(CHCEKBOX_ENABLED_DATA_SETTING) || CHCEKBOX_ENABLED_DEFAULT;
      value_element.innerText = value_text;
      checkbox.closest(CHECKBOX_CLASS).classList.add(ACTIVE_CLASS); 
    } else {
      var value_text = value_element.getAttribute(CHCEKBOX_DISABLED_DATA_SETTING) || CHCEKBOX_DISABLED_DEFAULT;
      value_element.innerText = value_text;
      checkbox.closest(CHECKBOX_CLASS).classList.remove(ACTIVE_CLASS);
    } 
  }

  if (checkbox_wrappers.length) {
    activateCheckboxes();  
  }
  
})();