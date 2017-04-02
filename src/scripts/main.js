/**
 *  main.js
 *  =======
 *  This file serves as the JavaScript entry-point for the application.
 *
 */

require('es6-promise').polyfill();

 /* eslint-disable no-undef, no-console*/
 if (DEBUG_MODE) {
  console.log('Debug mode');
 }
 /* eslint-enable no-undef, no-console */

/* eslint-env browser */
(function() {
  'use strict';

  window.addEventListener('load', () => {

    let skeletal = require('../framework/views/skeletal/skeletal.js');
    skeletal();

  });

})();
