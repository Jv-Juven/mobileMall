import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from './routers'

Vue.use(VueRouter)

let App = Vue.extend({})

let router = new VueRouter()

routerMap(router)

router.start(App, '#app')
