/**
 *  copy-task.js
 *  ============
 *  Copy the .htaccess and all ico, txt or xml files into the public folder.
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
      config.globs.root_src + '*.{ico,txt,xml}',
      'node_modules/apache-server-configs/dist/.htaccess'
    ], options.dotfiles)
      .pipe(gulp.dest(config.globs.root_dest))
      .pipe(plugins.size(options.size))
  });

};