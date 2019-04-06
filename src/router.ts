import Vue from 'vue';
import Router from 'vue-router';
import TwiPiTan from './views/TwiPiTan.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'TwiPiTan',
      component: TwiPiTan,
    },
  ],
});
