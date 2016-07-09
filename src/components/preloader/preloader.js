/**
 *  preloader.js
 *  ============
 * This file holds the logic to run the inlined preloader in index.html.
 *
 */

(function() {
  'use strict';

  // Require loadCSS for async loading of CSS.
  const loadCSS = require('../../scripts/loadCSS/loadCSS.js').loadCSS;
  const onloadCSS = require('../../scripts/loadCSS/onloadCSS.js');

  module.exports = function() {
    let preloader = document.getElementById('preloader');
    let stylesheet = loadCSS('css/style.css');

    preloader.addEventListener('transitionend', function() {
      preloader.parentNode.removeChild(preloader);
    });

    // Code to run once the stylesheet has loaded.
    onloadCSS(stylesheet, function() {
      preloader.classList.add('complete');
    });
  };

})();