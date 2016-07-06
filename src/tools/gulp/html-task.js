/**
 *
 *  html-task.js
 *  ============
 *  Scan your HTML for assets & optimize them
 *
 */

module.exports = function (gulp, plugins, config) {

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
    },

    browserSync: {
      once: true
    },

    size: {
      title: 'html',
      showFiles: true
    }

  };

  gulp.task('html', function () {
    return gulp.src(config.globs.html.src)
      .pipe(plugins.newer(config.globs.html.dest))
      .pipe(plugins.if(!config.debug, plugins.htmlmin(options.htmlmin)))
      .pipe(plugins.if('*.html', plugins.size(options.size)))
      .pipe(gulp.dest(config.globs.html.dest))
      .pipe(plugins.browserSync.stream(options.browserSync));
  });

};