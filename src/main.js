import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import '@/network/myAxios'


Vue.config.productionTip = false

require('@/assets/css/base.css')

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
