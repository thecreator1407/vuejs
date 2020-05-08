import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import routes from '../routes/routes.js'

Vue.use(Router)

const router  = new Router({
  routes,
  mode:'history'
})

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
