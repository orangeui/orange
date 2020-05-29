import Vue from "vue";
import App from "./App.vue";

/*
 * Import Directives
 * */
import AutoExpand from "./modules/directives/AutoExpand";

// require('@orange-ui/orange/dist/css/orange.css');
// import '../../../dist/css/orange.css';
import "../../../src/scss/src/styles.scss";

/*
 * Use Directives
 * */
Vue.directive(AutoExpand);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
