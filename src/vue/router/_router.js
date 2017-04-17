/**
 *  _router.js
 *  ==========
 *  Configure client-side routing for the application.
 *
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

// Instantiate Router
Vue.use(VueRouter);

// Set Routes
const router = new VueRouter({
  //mode: 'history',
  linkActiveClass: 'Skeletal_routerlink--active',
  routes: [

  {
    path: '/home',
    name: 'Home',
    component: require('../views/home/_home_view.vue'),
    meta: {
      title: 'Home'
    }
  },

  {
    path: '*',
    redirect: '/home'
  }

  ]
});

export default router;