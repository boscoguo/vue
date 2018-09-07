import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'

Vue.use(VueRouter)
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.use(Vuetify)


// 配置路由
const router = new VueRouter(routerConfig);


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
