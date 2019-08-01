import Vue from 'vue'
import hljs from 'highlight.js/lib'

export default Vue.directive('highlightjs', {
  bind (el, binding) {
    let targets = el.querySelectorAll('code')

    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  }
})
