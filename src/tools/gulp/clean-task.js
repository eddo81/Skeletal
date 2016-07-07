/**
 *  clean-task.js
 *  =============
 *  Clean output directory
 *
 */

const del = require('del');
const options = {
  dot: true
};

module.exports = function (gulp, plugins, config) {

  gulp.task('clean', function () {
    del([config.globs.root_dest + '*', '!' + config.globs.root_dest + '.git'], options)
  });

};