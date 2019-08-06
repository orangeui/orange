import Vue from 'vue'

export default Vue.directive('auto-expand', {
  update (el) {
    if (el.value) {
      el.style.height = '0px'
      el.style.height = el.scrollHeight + 'px'
    } else {
      el.style.height = ''
    }
  }
})
