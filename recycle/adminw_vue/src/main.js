import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './plugins/iview.js'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css'
// import { locale } from 'iview'
// import lang from 'iview/dist/locale/en-US'
// locale(lang)
// Vue.use(iView);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


