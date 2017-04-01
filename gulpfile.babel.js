/**
 * gulpfile.babel.js
 * =================
 *
 */

 (function() {
   'use strict';

   const fs            = require('fs');
   const gulp          = require('gulp');
   const config        = require('./src/tools/config.js');
   const tasks         = fs.readdirSync(config.tools.gulp.root);
   const plugins       = {
      webpack:              require('webpack'),
      webpackDevMiddleware: require('webpack-dev-middleware'),
      webpackHotMiddleware: require('webpack-hot-middleware'),
      browserSync:          require('browser-sync'),
      newer:                require('gulp-newer'),
      imagemin:             require('gulp-imagemin'),
      util:                 require('gulp-util'),
      sourcemaps:           require('gulp-sourcemaps'),
      sassGlob:             require('gulp-sass-glob'),
      sass:                 require('gulp-sass'),
      autoprefixer:         require('gulp-autoprefixer'),
      uncss:                require('gulp-uncss'),
      cssnano:              require('gulp-cssnano'),
      htmlmin:              require('gulp-htmlmin'),
      eslint:               require('gulp-eslint')
   };

   const buildInfo = require('./src/tools/npm-scripts/buildinfo.js'); // eslint-disable-line no-unused-vars

   // Import tasks
   tasks.forEach((filename) => {
    require(config.tools.gulp.root + filename)(gulp, plugins, config);
   });

   // Run default task
   gulp.task('default', gulp.series(gulp.parallel('copy', 'images'), 'lint', 'html', 'scss', (config.debug) ? 'serve' : 'webpack'));
 })();
