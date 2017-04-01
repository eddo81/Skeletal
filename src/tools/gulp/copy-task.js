/**
 *  copy-task.js
 *  ============
 *  Copy the .htaccess and all ico, txt or xml files into the public folder.
 *
 */

module.exports = function (gulp, plugins, config) {

  gulp.task('copy', (callback) => {
    const options = {
      dotfiles: {
        dot: true
      }
    };

    gulp.src([
      config.globs.root_src + '*.{ico,txt,xml,png,svg,json}',
      'node_modules/apache-server-configs/dist/.htaccess',
    ], options.dotfiles)
      .pipe(gulp.dest(config.globs.root_dest));

    gulp.src([config.globs.fonts.src])
      .pipe(plugins.newer(config.globs.fonts.dest))
      .pipe(gulp.dest(config.globs.fonts.dest));

    gulp.src([config.globs.videos.src])
      .pipe(plugins.newer(config.globs.videos.dest))
      .pipe(gulp.dest(config.globs.videos.dest));

      callback();
  });
};
