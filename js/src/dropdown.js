(function() {
  "use strict";

  var ACTIVE_CLASS = "is-full";
  var DROPDOWN_OPEN_CLASS = "is-open";
  var MAIN_DROPDOWN_ELEMENT = ".ui.form div.form-dropdown";
  var DROPDOWN_INPUT = ".form-dropdown__input";
  var DROPDOWN_OPTION = ".form-dropdown__menu li";
  var DROPDOWN_TEXT = ".form-dropdown__text";

  var dropdowns = document.querySelectorAll(MAIN_DROPDOWN_ELEMENT);
  var dropdown_head = '.form-dropdown__text';
  
  var isOpen = function(dropdown_el) {
    return dropdown_el.classList.contains(DROPDOWN_OPEN_CLASS);
  } 
   
  var activateDropdowns = function(){
    for (var i = 0; dropdowns.length > i; i++) {
      var dropdown = dropdowns[i];
      var current_value = dropdown.querySelector(DROPDOWN_INPUT).value;
      if (typeof current_value === "string" && current_value !== ''){
        dropdown.querySelector(DROPDOWN_TEXT).innerText = current_value;
        dropdown.classList.add(ACTIVE_CLASS);
        dropdown.addEventListener("click", toggleDropdown, false);
      } 

      var options = dropdown.querySelectorAll(DROPDOWN_OPTION);
      for (var i = 0; options.length > i; i++) {
        var dropdown_option = options[i];
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

  var toggleDropdown =  function(evt) {
    var dropdown = evt.target;
    var current_dropdown = dropdown.closest(MAIN_DROPDOWN_ELEMENT);      
    if (isOpen(current_dropdown)) {
      current_dropdown.classList.remove(DROPDOWN_OPEN_CLASS); // close dropdown   
    } else {
      current_dropdown.classList.add(DROPDOWN_OPEN_CLASS); // close dropdown      
    }
  }
  
  var selectDropdownOption = function(evt) {
    evt.stopPropagation();
    
    var option = evt.target;
    var option_value = option.innerText;
    var current_dropdown = option.closest(MAIN_DROPDOWN_ELEMENT);
    current_dropdown.querySelector(DROPDOWN_INPUT).value = option_value;
    current_dropdown.querySelector(DROPDOWN_TEXT).innerText = option_value;

    current_dropdown.classList.add(ACTIVE_CLASS); // is-full class
    current_dropdown.classList.remove(DROPDOWN_OPEN_CLASS); // close dropdown   
  };

  var closeDropdowns = function() {
    for (var i = 0; dropdowns.length > i; i++) {
      var dropdown = dropdowns[i];
      dropdown.classList.remove(DROPDOWN_OPEN_CLASS); // close dropdown   
    }
  }  

  activateDropdowns();
})();