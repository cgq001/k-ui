import Vue from 'vue'
import App from './App.vue'
// import KButton from './components/button.vue'

Vue.config.productionTip = false

// Vue.component(KButton.name, KButton)

import element from '../packages/index'
Vue.use(element)

new Vue({
  render: h => h(App),
}).$mount('#app')
