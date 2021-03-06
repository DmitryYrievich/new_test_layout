import Vue from 'vue'
import App from './App.vue'

import store from './store/'
import router from './router.js'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
