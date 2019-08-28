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
    _active_class: "is-full"
  }

  const Selectors = {
    _textarea: ".form .form__textarea",
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
  function activateTextareas() {
    for (let i = 0; i < textareas.length; i++) {
      let textarea = textareas[i];

      if (typeof textarea.value === "string" && textarea.value !== ''){
        textarea.classList.add(Classes._active_class);
      }
    }
  }

  // Function to toggle active class
  function toggleActiveClass(event) {
    let textarea = event.target;
    let textarea_has_text = textarea.value !== "" && textarea.value !== null;
    let textarea_readonly = textarea.getAttribute('readonly') === 'readonly' || textarea.getAttribute('readonly') === "";

    if (textarea_has_text || event.type === "focusin" && !textarea_readonly) {
      textarea.classList.add(Classes._active_class);
    } else if (event.type === "focusout" && !textarea_has_text || !textarea_has_text) {
      textarea.classList.remove(Classes._active_class);
    }
  }

  // Function to add posibility for auto expanding textarea
  function autoExpandTextarea(event) {
    const el = event.target;
    const offset = el.offsetHeight - el.clientHeight;

    if (el.value) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + offset + 'px';
    } else {
      el.style.height = 'auto';
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
    toggleActiveClass: toggleActiveClass,
    autoExpandTextarea: autoExpandTextarea,
    auto_expand: Selectors.auto_expand
  }

})();

// On init run activateTextareas if they exist
if (Textarea.textareas.length) {
  Textarea.activateTextareas();
}

// Add focusin event
document.addEventListener('focusin', Textarea.toggleActiveClass, false)

// Add focusout event
document.addEventListener('focusout', Textarea.toggleActiveClass, false)

// Add input event (check if typing inside textarea)
document.addEventListener('input', function (event) {
  let auto_expand_enabled = event.target.hasAttribute(Textarea.auto_expand)

  if (event.target.classList.contains('form__textarea') && auto_expand_enabled){
    Textarea.autoExpandTextarea(event)
  }
})

export default Textarea
