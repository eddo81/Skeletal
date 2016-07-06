/**
 *
 *  skeletal.js
 *  ===========
 *
 */

(function() {
  'use strict';

  module.exports = function() {
    const template = require('./skeletal.html');
    let main = document.getElementById('main');
    document.title = 'Welcome to Skeletal!';
    main.innerHTML = template;

    let sideMenu = document.getElementById('side-menu');
    let openBtn = document.getElementById('open');
    let closeBtn = document.getElementById('close');

    openBtn.addEventListener('click', () => {
      if(!sideMenu.classList.contains('expanded')) {
        sideMenu.classList.add('expanded');
      }
    });

    closeBtn.addEventListener('click', () => {
      if(sideMenu.classList.contains('expanded')) {
        sideMenu.classList.remove('expanded');
      }
    });

  };

})();