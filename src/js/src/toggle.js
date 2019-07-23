(function() {
  "use strict";

  var TOGGLE_ENABLED_DEFAULT = "On";
  var TOGGLE_DISABLED_DEFAULT = "Off";
  var TOGGLE_ENABLED_DATA_SETTING = "data-enabled";
  var TOGGLE_DISABLED_DATA_SETTING = "data-disabled";

  var ACTIVE_CLASS = "is-checked";
  var MAIN_TOGGLE_ELEMENT = ".form .toggle";
  var TOGGLE_CLASS = ".toggle";
  var TOGGLE_INPUT = "input[type='checkbox']"
  var TOGGLE_VALUE = ".toggle__value"

  var toggle_wrappers = document.querySelectorAll(MAIN_TOGGLE_ELEMENT);

  function activateToggles() {
    for (var i = 0; toggle_wrappers.length > i; i++) {
      var toggle_wrapper = toggle_wrappers[i];
      var toggle_input = toggle_wrapper.querySelector(TOGGLE_INPUT);
      var value_element = toggle_wrapper.querySelector(TOGGLE_VALUE);

      assignValue(toggle_input, value_element);

      toggle_input.addEventListener("change", toggleValue, false);
    }    
  }  
  
  function toggleValue(evt) {
    var toggle = evt.target;
    var current_wrapper  = toggle.closest(MAIN_TOGGLE_ELEMENT);
    var value_element = current_wrapper.querySelector(TOGGLE_VALUE);

    assignValue(toggle, value_element);
  };

  function assignValue(toggle, value_element) {
    if (toggle.checked){
      if (value_element) {
        var value_text = value_element.getAttribute(TOGGLE_ENABLED_DATA_SETTING) || TOGGLE_ENABLED_DEFAULT;
        value_element.innerText = value_text;  
      }
      
      toggle.closest(TOGGLE_CLASS).classList.add(ACTIVE_CLASS); 
    } else {
      if (value_element) {
        var value_text = value_element.getAttribute(TOGGLE_DISABLED_DATA_SETTING) || TOGGLE_DISABLED_DEFAULT;
        value_element.innerText = value_text;
      }
      toggle.closest(TOGGLE_CLASS).classList.remove(ACTIVE_CLASS);
    } 
  }

  if (toggle_wrappers.length) {
    activateToggles();  
  }
  
})();