import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import 'animate.css'

import VueTypedJs from 'vue-typed-js'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueTypedJs)

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 4000,
  distance: '200px',
  origin: 'left',
  mobile: true,
  useDelay: 'always'
})

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
