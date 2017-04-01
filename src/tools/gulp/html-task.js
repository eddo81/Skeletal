/**
 *  html-task.js
 *  ============
 *  Optimize the index.html file.
 *
 */

module.exports = (gulp, plugins, config) => {

  gulp.task('html', () => {
    const options = {
      htmlmin: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeOptionalTags: true
      }
    };

    return gulp.src(config.globs.html.src)
      .pipe(plugins.newer(config.globs.html.dest))
      .pipe(!config.debug ? plugins.htmlmin(options.htmlmin) : plugins.util.noop())
      .pipe(gulp.dest(config.globs.html.dest)).on('end', plugins.browserSync.reload);
  });
};
