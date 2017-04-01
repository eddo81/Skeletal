/*
 * buildinfo.js
 * ============
 *
 *
 */

(function() {
'use strict';

  const config    = require('../config.js');
  const logColors = {
    title: (stringIn) => {
      return '\x1b[36m' + stringIn + '\x1b[0m';
    },

    showMode: (modeIn) => {
      const text = (modeIn === true) ? ' development ' : ' production ';
      const bgColor = (modeIn === true) ? '\x1b[41m' : '\x1b[42m';
      return '\x1b[37m' + bgColor + text + '\x1b[0m';
    }
  };

/* eslint-disable no-console*/
console.log('\n' + logColors.title('Project: ') + config.pkg.name +
  '\n' + logColors.title('Version: ') + config.pkg.version +
  '\n' + logColors.title('Author: ') + config.pkg.author.name +
  '\n' + logColors.title('Mode: ') + logColors.showMode(config.debug) +
  '\n');
})();
