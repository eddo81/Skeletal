/**
 *
 *  copy-task.js
 *  ============
 *  Copy all files at the root level
 *
 */

module.exports = function (gulp, plugins, config) {

  const options = {

    dotfiles: {
      dot: true
    },

    size: {
      title: 'copy'
    }

  };

  gulp.task('copy', function () {
    gulp.src([
      config.globs.root_src + '*.{ico,txt}',
      'node_modules/apache-server-configs/dist/.htaccess'
    ], options.dotfiles)
      .pipe(gulp.dest(config.globs.root_dest))
      .pipe(plugins.size(options.size))
  });

};