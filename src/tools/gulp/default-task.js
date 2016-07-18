/**
 *  default-task.js
 *  ===============
 *  Builds production files.
 *
 */

const runSequence = require('run-sequence');

module.exports = function (gulp, plugins, config) {

  gulp.task('default', ['clean'], function (callback) {

    let preSequence = ['scss'];
    let sequence = ['lint', 'html', 'js', 'images', 'fonts', 'copy'];
    let postSequence = ['watch'];

    let args = [preSequence, sequence, postSequence, callback];

    // Remove the watch-task from the args array if in "Production mode".
    if(!config.debug) {
      args.splice(2, 1);
    }

    // Apply the args array as a comma separated list of arguments to runSequence.
    runSequence.apply(undefined, args);
  });

};