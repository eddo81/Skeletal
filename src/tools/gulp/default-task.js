/**
 *  default-task.js
 *  ===============
 *  Builds production files.
 *
 */

const runSequence = require('run-sequence');

module.exports = function (gulp, plugins, config) {

  let sequence = ['lint', 'html', 'js', 'images', 'fonts', 'copy'];

  if(config.debug) {
    sequence.push('watch');
  }

  gulp.task('default', ['clean'], function (callback) {
    runSequence(['scss'], sequence, callback);
  });

};