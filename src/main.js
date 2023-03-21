// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
app.$mount('#app')
