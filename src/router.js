import Vue from 'vue';
import Router from 'vue-router';
import Event from './views/Event.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'event',
      component: Event,
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: () => import('./views/Ticket.vue'),
    },
  ],
});
