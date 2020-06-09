/**
 * --------------------------------------------------------------------------
 * Orange (v1.2.0): js//src/textarea.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */

const Textarea = (function() {

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
    _textarea: '.o-form .o-form__textarea',
    _read_only: 'readonly',
    auto_expand: 'data-auto-expand'
  }

  const textareas = document.querySelectorAll(Selectors._textarea);



  /**
  * ------------------------------------------------------------------------
  * Functions
  * ------------------------------------------------------------------------
  */

  /**
  * Public
  */

  // Function to activate all textareas
  function activateTextareas () {
    for (let i = 0; i < textareas.length; i++) {
      let textarea = textareas[i];

      if (typeof textarea.value === 'string' && textarea.value !== ''){
        textarea.classList.add(Classes._value_class);
      }
    }
  }

  // Function to toggle active class
  function toggleFocusClass (event) {
    let textarea = event.target;
    let textarea_readonly = textarea.getAttribute('readonly') === 'readonly' || textarea.getAttribute('readonly') === '';

    if (textarea.classList.contains('o-form__textarea')) {
      return event.type === 'focusin' && !textarea_readonly ? textarea.classList.add(Classes._focus_class) : textarea.classList.remove(Classes._focus_class)
    }
  }

  // Function to add posibility for auto expanding textarea
  function autoExpandTextarea (event) {
    const el = event.target;
    const offset = el.offsetHeight - el.clientHeight;

    if (el.value) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + offset + 'px';
    } else {
      el.style.height = 'auto';
    }
  }

  function onInput (event) {
    let textarea = event.target
    let textarea_has_text = textarea.value !== '' && textarea.value !== null;
    let auto_expand_enabled = event.target.hasAttribute(Textarea.auto_expand)

    if (textarea.classList.contains('o-form__textarea')) {
      if (auto_expand_enabled) {
        autoExpandTextarea(event)
      }

      return textarea_has_text ? textarea.classList.add(Classes._value_class) : textarea.classList.remove(Classes._value_class)
    }
  }



  /**
  * ------------------------------------------------------------------------
  * Expose public variables and functions
  * ------------------------------------------------------------------------
  */
  return {
    textareas: textareas,
    activateTextareas: activateTextareas,
    toggleFocusClass: toggleFocusClass,
    onInput: onInput,
    auto_expand: Selectors.auto_expand
  }

})();

// On init run activateTextareas if they exist
if (Textarea.textareas.length) {
  Textarea.activateTextareas();
}

// Add focusin event
document.addEventListener('focusin', Textarea.toggleFocusClass, false)

// Add focusout event
document.addEventListener('focusout', Textarea.toggleFocusClass, false)

// Add input event (check if typing inside textarea)
document.addEventListener('input', Textarea.onInput, false)

export default Textarea
