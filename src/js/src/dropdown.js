(function() {

  const ACTIVE_CLASS = "is-full";
  const DROPDOWN_OPEN_CLASS = "is-open";
  const MAIN_DROPDOWN_ELEMENT = "div.form-dropdown";
  const DROPDOWN_INPUT = ".form-dropdown__input";
  const DROPDOWN_OPTION = ".form-dropdown__menu li";
  const DROPDOWN_TEXT = ".form-dropdown__text";

  const dropdowns = document.querySelectorAll(MAIN_DROPDOWN_ELEMENT);
  
  function isOpen(dropdown_el) {
    return dropdown_el.classList.contains(DROPDOWN_OPEN_CLASS);
  } 

  function activateDropdowns() {
    for (let i = 0; i < dropdowns.length; i++) {
      let dropdown = dropdowns[i]
      let current_value = dropdown.querySelector(DROPDOWN_INPUT).value;
      if (typeof current_value === "string" && current_value !== ''){
        dropdown.querySelector(DROPDOWN_TEXT).innerText = current_value;
        dropdown.classList.add(ACTIVE_CLASS);
      } 

      dropdown.addEventListener("click", toggleDropdown, false);

      let options = dropdown.querySelectorAll(DROPDOWN_OPTION);
      for (let ii = 0; ii < options.length; ii++) {
        let dropdown_option = options[ii];
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
    let dropdown = evt.target;
    let current_dropdown = dropdown.closest(MAIN_DROPDOWN_ELEMENT);      
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
  }

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