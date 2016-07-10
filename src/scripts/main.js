/**
 *  main.js
 *  =======
 *  This file serves as the JavaScript entry-point for the application.
 *
 */

/* eslint-env browser */
(function() {
  'use strict';

  // Require vendor dependencies.
  require('./modernizr/modernizr.js');

  // Require custom components.
  let skeleton = require('../components/skeletal/skeletal.js');
  skeleton();

  let preloader = require('../components/preloader/preloader.js');
  preloader();
})();