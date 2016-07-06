/**
 *
 *  scss-task.js
 *  ============
 *  Compile and automatically prefix stylesheets.
 *
 */

module.exports = function (gulp, plugins, config) {

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
      './bower_components/bootstrap-sass/assets/stylesheets',
      './bower_components/bourbon/app/assets/stylesheets',
      './bower_components/animate.css'
     ]
   },

   uncss: {

     html: [
       config.globs.html.src
     ],

     ignore: []
   },

   cssnano: {
     discardComments: {
       removeAll: true
     }
   },

   browserSync: {
     once: true
   },

   size: {
     title: 'scss'
   }

  };

  gulp.task('scss', function () {
    return gulp.src(config.globs.css.src)
        .pipe(plugins.newer(config.globs.css.dest))
        .pipe(plugins.if(!config.debug, plugins.sourcemaps.init()))
        .pipe(plugins.sassGlob())
        .pipe(plugins.sass(options.sass).on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer(options.browsers))
        .pipe(plugins.if(!config.debug, plugins.uncss(options.uncss)))
        .pipe(plugins.if(!config.debug, plugins.cssnano(options.cssnano)))
        .pipe(plugins.size(options.size))
        .pipe(plugins.if(!config.debug, plugins.sourcemaps.write('./')))
        .pipe(gulp.dest(config.globs.css.dest))
        .pipe(plugins.browserSync.stream(options.browserSync));
  });

};