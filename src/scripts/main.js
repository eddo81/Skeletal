/**
 *  main.js
 *  =======
 *  This file serves as the JavaScript entry-point for the application.
 *
 */

import Vue from 'vue';
import Router from '../framework/router/_router.js';
import Store from '../framework/store/_store.js';

require('es6-promise').polyfill();

 /* eslint-disable no-undef, no-console*/
 if (DEBUG_MODE) {
  console.log('Debug mode');
 }
 /* eslint-enable no-undef, no-console */

/* eslint-env browser */
(function() {
  'use strict';

  // Register Global Components.

  //Router Hooks on Router Enter.
  Router.beforeEach((to, from, next) => {
    // Navigate to top of window on route change.
    window.scrollTo(0, 0);
    next();
  });

  // Router Hooks on Router Leave.
  Router.afterEach(route => {

    // Set Page Title.
    Store.dispatch('setPageTitle', route.meta.title);
    document.title = Store.getters.pageTitle;
  });

  // Instantiate Vue
  new Vue({
    el: '#app',
    store: Store,
    router: Router,
    render: h => h(require('../framework/views/app.vue'))
  });

  window.addEventListener('load', () => {


  });

})();
