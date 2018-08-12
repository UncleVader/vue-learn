import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Copy from 'v-copy'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMaterialIcon from 'vue-material-icon'
Vue.component(VueMaterialIcon.name, VueMaterialIcon)

Vue.use(Copy)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
