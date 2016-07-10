/**
 *  clean-task.js
 *  =============
 *  Clean output directory
 *
 */

const del = require('del');

module.exports = function (gulp, plugins, config) {

  const options = {
    dot: true
  };

  gulp.task('clean', function () {
    del([config.globs.root_dest + '*', '!' + config.globs.root_dest + '.git'], options)
  });

};