/**
 *  scss-task.js
 *  ============
 *  Compile, prefix and optimize stylesheets.
 *
 */

module.exports = (gulp, plugins, config) => {

  gulp.task('scss', () => {
    const options = {
      browsers: [
       'ie >= 10',
       'ie_mob >= 10',
       'ff >= 30',
       'chrome >= 34',
       'safari >= 7',
       'opera >= 23',
       'ios >= 7',
       'android >= 4.4',
       'bb >= 10'
     ],

     sass: {
       precision: 10,
       includePaths: [
        './node_modules/animate.css',
        './node_modules/font-awesome/scss'
       ]
     },

     uncss: {
       html: [
         config.globs.html.src
       ],
       htmlroot: config.globs.root_dest.replace(/\W+/g, ''),
       csspath: config.globs.folders.dest.style + 'style.css',
       ignore: config.tools.uncss.ignore
     },

     cssnano: {
       discardComments: {
         removeAll: true
       }
     }
    };

    return gulp.src(config.globs.css.src)
      .pipe(plugins.newer(config.globs.css.dest))
      .pipe(!config.debug ? plugins.sourcemaps.init() : plugins.util.noop())
      .pipe(plugins.sassGlob())
      .pipe(plugins.sass(options.sass).on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer(options.browsers))
      .pipe(!config.debug ? plugins.uncss(options.uncss) : plugins.util.noop())
      .pipe(!config.debug ? plugins.cssnano(options.cssnano) : plugins.util.noop())
      .pipe(!config.debug ? plugins.sourcemaps.write('./') : plugins.util.noop())
      .pipe(gulp.dest(config.globs.css.dest)).on('end', plugins.browserSync.reload);
  });
};
