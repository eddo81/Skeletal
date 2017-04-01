/**
 *  serve-task.js
 *  =============
 *  Serve and watch files, run associated tasks upon changes.
 *
 */

module.exports = (gulp, plugins, config) => {

  const options = {
    path: {
      html: config.globs.html.src,
      scss: [config.globs.root_src + config.globs.folders.src.style + '**/*.scss', config.globs.root_src + config.globs.folders.src.framework + '**/*.scss'],
      lint: [config.globs.root_src + config.globs.folders.src.scripts + '**/*.js', config.globs.root_src + config.globs.folders.src.framework + '**/*.js'],
      images: config.globs.img.src
    }
  };

  function watch() {
    gulp.watch(options.path.html, gulp.series('html'));
    gulp.watch(options.path.lint, gulp.series('lint'));
    gulp.watch(options.path.scss, gulp.series('scss'));
    gulp.watch(options.path.images, gulp.series('images'));
  }

  gulp.task('serve', gulp.series('browsersync', watch));
};
