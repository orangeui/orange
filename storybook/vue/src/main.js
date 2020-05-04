import Vue from "vue";
import App from "./App.vue";

// require('@orange-ui/orange/dist/css/orange.css');
// import '../../../dist/css/orange.css';
import "../../../src/scss/src/styles.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
