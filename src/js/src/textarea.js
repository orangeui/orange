(function() {
  "use strict";

  var ACTIVE_CLASS = "is-full";
  var TEXTAREA_AUTO_EXPAND_DATA_SETTING = 'data-auto-expand';
  var MAIN_TEXTAREA_ELEMENT = ".form textarea.form__textarea";
  var textareas = document.querySelectorAll(MAIN_TEXTAREA_ELEMENT);

  function activateTextareas() {
    for (var i = 0; i < textareas.length; i++) {
      var textarea = textareas[i];

      if (typeof textarea.value === "string" && textarea.value !== ''){
        textarea.classList.add(ACTIVE_CLASS);
      } 

      textarea.addEventListener("focusin", toggleActiveClass, false);
      textarea.addEventListener("focusout", toggleActiveClass, false);

      var auto_expand_enabled = textarea.hasAttribute(TEXTAREA_AUTO_EXPAND_DATA_SETTING)
      if (auto_expand_enabled){
        textarea.addEventListener("input", autoExpandTextarea, false);
      }
    }    
  }  
  
  function toggleActiveClass(evt) {
    var textarea = evt.target;
    var textarea_has_text = textarea.value !== "" && textarea.value !== null;
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
  };

  function autoExpandTextarea(evt) {
    var el = evt.target;
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
