/**
 *
 *  main.js
 *  =======
 *  This file serves as the JavaScript entry-point for the application.
 *
 */

/* eslint-env browser */
(function() {
  'use strict';

  // require vendor libraries.


  document.addEventListener('DOMContentLoaded', () => {

    // require custom components.
    let skeleton = require('../components/skeletal/skeletal.js');
    skeleton();
  });

})();