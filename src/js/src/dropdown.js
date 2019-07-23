(function() {
  "use strict";

  var ACTIVE_CLASS = "is-full";
  var DROPDOWN_OPEN_CLASS = "is-open";
  var MAIN_DROPDOWN_ELEMENT = "div.form-dropdown";
  var DROPDOWN_INPUT = ".form-dropdown__input";
  var DROPDOWN_OPTION = ".form-dropdown__menu li";
  var DROPDOWN_TEXT = ".form-dropdown__text";

  var dropdowns = document.querySelectorAll(MAIN_DROPDOWN_ELEMENT);
  var dropdown_head = '.form-dropdown__text';
  
  function isOpen(dropdown_el) {
    return dropdown_el.classList.contains(DROPDOWN_OPEN_CLASS);
  } 

  function activateDropdowns() {
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i]
      var current_value = dropdown.querySelector(DROPDOWN_INPUT).value;
      if (typeof current_value === "string" && current_value !== ''){
        dropdown.querySelector(DROPDOWN_TEXT).innerText = current_value;
        dropdown.classList.add(ACTIVE_CLASS);
      } 

      dropdown.addEventListener("click", toggleDropdown, false);

      var options = dropdown.querySelectorAll(DROPDOWN_OPTION);
      for (var ii = 0; ii < options.length; ii++) {
        var dropdown_option = options[ii];
        dropdown_option.addEventListener("click", selectDropdownOption, false);
      }
    }

    document.querySelector('body').addEventListener('click', function(evt){
      if (!evt.target.closest(MAIN_DROPDOWN_ELEMENT)){
        evt.stopPropagation();
        closeDropdowns();
      }
    });
  }

  function toggleDropdown(evt) {
    var dropdown = evt.target;
    var current_dropdown = dropdown.closest(MAIN_DROPDOWN_ELEMENT);      
    if (isOpen(current_dropdown)) {
      current_dropdown.classList.remove(DROPDOWN_OPEN_CLASS);
    } else {
      current_dropdown.classList.add(DROPDOWN_OPEN_CLASS); 
    }
  }
  
  function selectDropdownOption(evt) {
    evt.stopPropagation();
    
    var option = evt.target;
    var option_value = option.innerText;
    var current_dropdown = option.closest(MAIN_DROPDOWN_ELEMENT);
    current_dropdown.querySelector(DROPDOWN_INPUT).value = option_value;
    current_dropdown.querySelector(DROPDOWN_TEXT).innerText = option_value;

    current_dropdown.classList.add(ACTIVE_CLASS); 
    current_dropdown.classList.remove(DROPDOWN_OPEN_CLASS); 
  };

  function closeDropdowns() {
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      dropdown.classList.remove(DROPDOWN_OPEN_CLASS); 
    }
  }  

  if (dropdowns.length){
    activateDropdowns();  
  }
  
})();