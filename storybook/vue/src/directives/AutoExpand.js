import Vue from "vue";

export default Vue.directive("auto-expand", {
  componentUpdated(el, binding) {
    const offset = el.offsetHeight - el.clientHeight;

    if (binding.value) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + offset + "px";
    } else {
      el.style.height = "auto";
    }
  }
});
