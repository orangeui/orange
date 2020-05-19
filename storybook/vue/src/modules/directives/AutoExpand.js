import Vue from 'vue'

export default Vue.directive('auto-expand', {
  update (el) {
    const offset = el.offsetHeight - el.clientHeight;

    if (el.value) {
      el.style.height = 'auto';
      el.style.height = el.scrollHeight + offset + 'px';
    } else {
      el.style.height = 'auto';
    }
  }
})