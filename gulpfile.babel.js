/**
 * gulpfile.babel.js
 * =================
 *
 */

(function() {
 'use strict';

 const gulp          = require('gulp');
 const autoLoadTasks = require('gulp-autoload-tasks');
 const config        = require('./src/tools/config.js');
 const buildInfo     = require('./src/tools/npm-scripts/buildinfo.js')(config);

 let plugins         = require('gulp-load-plugins')(gulp);
 plugins.browserSync = require('browser-sync');

 autoLoadTasks(gulp, plugins, config, './src/tools/gulp');
})();