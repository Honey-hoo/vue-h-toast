import Vue from 'vue'
import App from './App.vue'
import vueToast from './lib/index.js'
Vue.use(vueToast)

new Vue({
  el: '#app',
  render: h => h(App)
})
