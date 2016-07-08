/**
 *  fonts-task.js
 *  =============
 *
 */

module.exports = function (gulp, plugins, config) {

  const options = {

    size: {
      title: 'fonts'
    }

  };

  gulp.task('fonts', function () {
    gulp.src(config.globs.fonts.src)
      .pipe(plugins.newer(config.globs.fonts.dest))
      .pipe(gulp.dest(config.globs.fonts.dest))
      .pipe(plugins.size(options.size))
  });

};