/**
 *
 *  lint-task.js
 *  ============
 *  Lint JavaScript
 *
 */

module.exports = function (gulp, plugins, config) {

  gulp.task('lint', function () {
    gulp.src([config.globs.root_src + config.globs.folders.src.scripts + '**/*.js', config.globs.components.js.src])
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(plugins.if(!plugins.browserSync.active, plugins.eslint.failOnError()))
  });

};