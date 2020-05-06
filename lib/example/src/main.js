import Vue from 'vue'
import App from './App.vue'

import OrangeVue from '@orange/vue'
import '@orange/vue/dist/style.css'
Vue.use(OrangeVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
