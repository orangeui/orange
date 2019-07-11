(function() {
  "use strict";

  var CHCEKBOX_ENABLED_DEFAULT = "Enabled";
  var CHCEKBOX_DISABLED_DEFAULT = "Disabled";
  var CHCEKBOX_ENABLED_DATA_SETTING = "data-enabled";
  var CHCEKBOX_DISABLED_DATA_SETTING = "data-disabled";

  var MAIN_CHECKBOX_ELEMENT = ".ui.form .checkbox-wrapper";
  var CHECKBOX_INPUT = "input[type='checkbox']"
  var CHECKBOX_VALUE = ".value"

  var checkbox_wrappers = document.querySelectorAll(MAIN_CHECKBOX_ELEMENT);

  var activateCheckboxes = function() {
    for (var i = 0; checkbox_wrappers.length > i; i++) {
      var checkbox_wrapper = checkbox_wrappers[i];
      var checkbox_input = checkbox_wrapper.querySelector(CHECKBOX_INPUT);
      var value_element = checkbox_wrapper.querySelector(CHECKBOX_VALUE);

      assignValue(checkbox_input, value_element);

      checkbox_input.addEventListener("change", toggleValue, false);
    }    
  }  
  
  var toggleValue = function(evt) {
    var checkbox = evt.target;
    var current_wrapper  = checkbox.closest(MAIN_CHECKBOX_ELEMENT);
    var value_element = current_wrapper.querySelector(CHECKBOX_VALUE);

    assignValue(checkbox, value_element);
  };

  var assignValue = function(checkbox, value_element){
    if (checkbox.checked){
      var value_text = value_element.getAttribute(CHCEKBOX_ENABLED_DATA_SETTING) || CHCEKBOX_ENABLED_DEFAULT;
      value_element.innerText = value_text;
    } else {
      var value_text = value_element.getAttribute(CHCEKBOX_DISABLED_DATA_SETTING) || CHCEKBOX_DISABLED_DEFAULT;
      value_element.innerText = value_text;
    } 
  }

  activateCheckboxes();
})();