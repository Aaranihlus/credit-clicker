import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import 'vue-snotify/styles/material.css'

import Vue from 'vue'
import App from './App.vue'
import Snotify from 'vue-snotify'

Vue.use(Snotify, {
  toast: {
    timeout: 3500,
    pauseOnHover: true,
    position: 'leftBottom',
    maxOnScreen: 1,
    maxAtPosition: 1,
    preventDuplicates: true
  }
})

Vue.config.productionTip = false

// Event Handler
window.Event = new Vue()

new Vue({
  render: h => h(App)
}).$mount('#app')
