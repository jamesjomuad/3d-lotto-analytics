import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import $ from 'jquery'
import underscore from 'underscore'

window.$ = window.JQuery = $

window._ = underscore

Vue.config.productionTip = false

export const eBus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

