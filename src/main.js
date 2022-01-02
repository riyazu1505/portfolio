import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import common from './mixins/common'

// mixins
const mixins = { common }
Object.keys(mixins).forEach(key => {
  Vue.mixin(mixins[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
