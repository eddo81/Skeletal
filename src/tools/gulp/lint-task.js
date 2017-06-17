/**
 *  lint-task.js
 *  ============
 *  Lint JavaScript.
 *
 */

module.exports = (gulp, plugins, config) => {

  gulp.task('lint', (callback) => {
    gulp.src([config.globs.root_src + config.globs.folders.src.scripts + '**/*.js', config.globs.root_src + config.globs.folders.src.framework + '**/*.js'])
      .pipe(plugins.eslint())
      .pipe(plugins.eslint.format())
      .pipe(!plugins.browserSync.active ? plugins.eslint.failAfterError() : plugins.util.noop())
      .on('error', (err) => { /*plugins.util.log(err);*/ });
      callback();      
  });
};
