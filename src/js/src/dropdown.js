/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/dropdown.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const Dropdown = (function() {

  /**
  * ------------------------------------------------------------------------
  * Constants
  * ------------------------------------------------------------------------
  */

  const Classes = {
    _value_class: 'has-value',
    _open_class: 'is-open',
    _search_class: 'o-form-dropdown--search'
  }

  const Selectors = {
    dropdown: '.o-form-dropdown',
    dropdown_search: 'o-form-dropdown--search',
    _input: '.o-form-dropdown__input',
    _option: '.o-form-dropdown__menu li',
    _text: '.o-form-dropdown__text'
  }

  let dropdowns;



  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  /**
  * Private
  */

  // Function to check if dropdown is opened
  function _isOpen (dropdown_el) {
    return dropdown_el.classList.contains(Classes._open_class);
  }

  // Function to select option
  function _selectDropdownOption (event) {
    event.stopPropagation();

    let option = event.target;
    let option_value = option.innerText;
    let current_dropdown = option.closest(Selectors.dropdown);
    current_dropdown.querySelector(Selectors._input).value = option_value;
    current_dropdown.querySelector(Selectors._text).innerText = option_value;

    current_dropdown.classList.add(Classes._value_class);
    current_dropdown.classList.remove(Classes._open_class);
  }

  // Function to check if dropdown is search
  function _isSearch (dropdown_el) {
    return dropdown_el.classList.contains(Classes._search_class);
  }

  /**
  * Public
  */

  // Function to get all dropdowns
  function getDropdowns () {
    dropdowns = document.querySelectorAll(Selectors.dropdown);
  }

  // Function to activate all dropdowns
  function activateDropdowns () {
    getDropdowns();

    for (let i = 0; i < dropdowns.length; i++) {
      let dropdown = dropdowns[i]
      let current_value = dropdown.querySelector(Selectors._input).value;

      if (typeof current_value === 'string' && current_value !== ''){
        dropdown.querySelector(Selectors._text).innerText = current_value;
        dropdown.classList.add(Classes._value_class);
      }

      // List items
      let options = dropdown.querySelectorAll(Selectors._option);

      for (let ii = 0; ii < options.length; ii++) {
        let dropdown_option = options[ii];
        let dropdown_option_text = dropdown_option.textContent || dropdown_option.innerText;

        // Add event listener to search trough the list
        if(_isSearch(dropdown)) {
          dropdown.addEventListener('keyup', function () {
            let repeat_current_value = dropdown.querySelector(Selectors._input).value;
            let filter_value =  repeat_current_value.toUpperCase();

            if (dropdown_option_text.toUpperCase().indexOf(filter_value) > -1) {
              dropdown_option.style.display = "";
            } else {
              dropdown_option.style.display = "none";
            }
          })
        }

        dropdown_option.addEventListener('click', _selectDropdownOption, { once: true });
      }
    }

    document.addEventListener('click', function(event){
      if (!event.target.closest(Selectors.dropdown)){
        event.stopPropagation();
        closeDropdowns();
      }
    }, { once:true } );
  }

  // Function to toggle dropdown active class
  function toggleDropdown (event) {
    let dropdown = event.target;
    let current_dropdown = dropdown.closest(Selectors.dropdown);
    if (_isOpen(current_dropdown)) {
      current_dropdown.classList.remove(Classes._open_class);
    } else {
      current_dropdown.classList.add(Classes._open_class);
    }
  }

  // Function to close dropdowns
  function closeDropdowns() {
    if (dropdowns === undefined || dropdowns.length === 0) {
      getDropdowns();
    }

    for (let i = 0; i < dropdowns.length; i++) {
      let dropdown = dropdowns[i];
      dropdown.classList.remove(Classes._open_class);
    }
  }



  /**
  * ------------------------------------------------------------------------
  * Expose public variables and functions
  * ------------------------------------------------------------------------
  */
  return {
    dropdowns: dropdowns,
    getDropdowns: getDropdowns,
    activateDropdowns: activateDropdowns,
    toggleDropdown: toggleDropdown,
    closeDropdowns: closeDropdowns,
    dropdown: Selectors.dropdown
  }

})()

// On init run getDropdowns
Dropdown.getDropdowns();

// On init run activateToggles if they exist
Dropdown.activateDropdowns()

// Add click event
document.addEventListener('click', function (event) {
  if (!Dropdown.dropdowns){
    Dropdown.activateDropdowns()
  }

  const isDropdownLabel = event.target.classList.contains('o-form-dropdown__label') ||
                          event.target.classList.contains('o-form-dropdown__text') ||
                          event.target.classList.contains('o-form-dropdown__input')

  if (isDropdownLabel) {
    Dropdown.closeDropdowns()
    Dropdown.toggleDropdown(event)
  }

  if (!event.target.closest(Dropdown.dropdown)) {
    event.stopPropagation()
    Dropdown.closeDropdowns()
  }
})

export default Dropdown
