import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

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
      path: '/event',
      name: 'event',
      component: () => import('./views/Event.vue'),
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('./views/Schedule.vue'),
    },
    {
      path: '/attraction',
      name: 'attraction',
      component: () => import('./views/Attraction.vue'),
    },
    {
      path: '/workshop',
      name: 'workshop',
      component: () => import('./views/Workshop.vue'),
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import('./views/Ticket.vue'),
    },
  ],
});
