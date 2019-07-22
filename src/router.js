import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Programming from './views/Programming.vue';
import Tickets from './views/Tickets.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/Programming',
      name: 'Programming',
      component: () => import('./views/Programming.vue'),
    },
    {
      path: '/Tickets',
      name: 'Tickets',
      component: () => import('./views/Tickets.vue'),
    },
  ],
});
