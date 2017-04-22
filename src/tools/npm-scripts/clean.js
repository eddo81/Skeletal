/*
 * clean.js
 * ========
 *
 *
 */

(function() {
'use strict';

  const del = require('del');
  const config = require('../config.js');
  const deletePaths = [
    config.globs.root_dest + '.htaccess',
    config.globs.root_dest + '**',
    '!' + config.globs.root_dest.replace('/', ''),
    '!' + config.globs.root_dest + 'app/**'
  ];

  del(deletePaths).then(paths => {
    let msg = (paths.length) ? 'Deleting the following files and folders:\n': 'No files to delete.';

    /* eslint-disable no-console*/
    console.log('\x1b[36m' + msg + '\x1b[0m', '\x1b[31m' + paths.join('\n') + '\x1b[0m');
  });

})();
