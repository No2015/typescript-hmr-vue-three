import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import work from './tLibrary/index'

Vue.config.productionTip = false

Vue.prototype.$work = work

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
