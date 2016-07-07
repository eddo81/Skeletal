/**
 *  watch-task.js
 *  =============
 *  Watch files and run associated tasks upon changes.
 *
 */

module.exports = function (gulp, plugins, config) {

  const options = {

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

  };

  gulp.task('watch', function (callback) {
    plugins.browserSync.init(options, callback);
    gulp.watch([config.globs.html.src, config.globs.components.html.src], ['html']);
    gulp.watch([config.globs.root_src + config.globs.folders.src.style + '**/*.scss', config.globs.components.css.src], ['scss']);
    gulp.watch([config.globs.root_src + config.globs.folders.src.scripts + '**/*.js', config.globs.components.js.src], ['lint']);
    gulp.watch([config.globs.img.src]);
  });

};