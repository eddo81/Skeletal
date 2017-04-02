/**
 *  skeletal.js
 *  ===========
 *
 */

(function() {
  'use strict';

  module.exports = function() {
    const template = require('./skeletal.html');
    let app = document.getElementById('app');
    document.title = 'Welcome to Skeletal!';
    app.innerHTML = template;

    let sideMenu = document.getElementById('side-menu');
    let openBtn = document.getElementById('open');
    let closeBtn = document.getElementById('close');

    openBtn.addEventListener('click', () => {
      if(!sideMenu.classList.contains('S_expanded')) {
        sideMenu.classList.add('S_expanded');
      }
    });

    closeBtn.addEventListener('click', () => {
      if(sideMenu.classList.contains('S_expanded')) {
        sideMenu.classList.remove('S_expanded');
      }
    });
  };
})();
