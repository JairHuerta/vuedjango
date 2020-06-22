import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router'

Vue.use (VueRouter)
Vue.use (BootstrapVue)
Vue.use (IconsPlugin) 


Vue.config.productionTip = false

import List from './components/List.vue'
import Detail from './components/Detail.vue'

const routes = [
  {path:'/',component:List},
  {path:'/detail', component:Detail}
]

const router = new VueRouter({
  mode:'history',
  routes //short 'routes: routes'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
