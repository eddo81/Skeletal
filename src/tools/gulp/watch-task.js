/**
 *  watch-task.js
 *  =============
 *  Watch files and run associated tasks upon changes.
 *
 */

module.exports = function (gulp, plugins, config) {

  const options = {

    browserSync: {
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: true
      },
      open: true,
      logFileChanges: false,
      notify: true,
      online: true,
      server: [config.globs.root_dest],
      port: 3000,
    },

    watch: {
      html: [config.globs.html.src, config.globs.components.html.src],
      scss: [config.globs.root_src + config.globs.folders.src.style + '**/*.scss', config.globs.components.css.src],
      lint: [config.globs.root_src + config.globs.folders.src.scripts + '**/*.js', config.globs.components.js.src],
      images: [config.globs.img.src]
    }

  };

  gulp.task('watch', function (callback) {
    plugins.browserSync.init(options.browserSync, callback);
    gulp.watch(options.watch.html, ['html']);
    gulp.watch(options.watch.scss, ['scss']);
    gulp.watch(options.watch.lint, ['lint']);
    gulp.watch(options.watch.images);
  });

};