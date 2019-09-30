import Vue from 'vue'
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Panel from './views/Panel.vue';
import About from './components/About.vue';
// import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: { path: '/home', name: 'home', component: Home }, },
    { path: '/home', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/panel', name: 'panel', component: Panel, meta: { requireAuth: true }, },
    { path: '/login', name: 'login', component: Login },
  ],
})

export default router