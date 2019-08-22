(function() {
  const ACTIVE_CLASS = "is-full";
  const TEXTAREA_AUTO_EXPAND_DATA_SETTING = 'data-auto-expand';
  const MAIN_TEXTAREA_ELEMENT = ".form textarea.form__textarea";
  const textareas = document.querySelectorAll(MAIN_TEXTAREA_ELEMENT);

  function activateTextareas() {
    for (let i = 0; i < textareas.length; i++) {
      let textarea = textareas[i];

      if (typeof textarea.value === "string" && textarea.value !== ''){
        textarea.classList.add(ACTIVE_CLASS);
      } 

      textarea.addEventListener("focusin", toggleActiveClass, false);
      textarea.addEventListener("focusout", toggleActiveClass, false);

      let auto_expand_enabled = textarea.hasAttribute(TEXTAREA_AUTO_EXPAND_DATA_SETTING)
      if (auto_expand_enabled){
        textarea.addEventListener("input", autoExpandTextarea, false);
      }
    }    
  }  
  
  function toggleActiveClass(evt) {
    let textarea = evt.target;
    let textarea_has_text = textarea.value !== "" && textarea.value !== null;
    if (textarea_has_text) {
      textarea.classList.add(ACTIVE_CLASS);
    } else {
      textarea.classList.remove(ACTIVE_CLASS);
    }
    if (evt.type === "focusin") {
      textarea.classList.add(ACTIVE_CLASS);
    }
    if (evt.type === "focusout" && !textarea_has_text) {
      textarea.classList.remove(ACTIVE_CLASS);
    }
  }

  function autoExpandTextarea(evt) {
    let el = evt.target;
    if (el.value) {
      el.style.height = '0px';
      el.style.height = el.scrollHeight + 'px';
    } else {
      el.style.height = '';
    }
  }

  if (textareas.length) {
    activateTextareas();  
  }
  
})();
