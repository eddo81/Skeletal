/**
 *
 *  js-task.js
 *  ==========
 *  Concatenate and minify JavaScript. Optionally transpiles ES2015 code to ES5.
 *
 */

const browserify = require('browserify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');

module.exports = function (gulp, plugins, config) {

  const options = {

    browserify: {
      debug: config.debug,
      cache: {},
      packageCache: {}
    },

    size: {
      title: 'js',
      showFiles: true
    },

    browserSync: {
      once: true
    },

    babelify: {
      presets: ['es2015'],
      retainLines: true
    },

    debowerify: {
      preferNPM: true
    },

    stringify: {
      appliesTo: {
        includeExtensions: ['.html']
      },
      minify: true
    },

    sourcemaps: {
      loadMaps: true
    }

  };

  let onError = function(err) {
    plugins.util.log(plugins.util.colors.bgRed(' ' + err.toString() + ' '));
    this.emit('end');
  };

  let bundler = browserify(config.globs.js.src, options.browserify);

  // Apply transforms
  bundler.transform('babelify', options.babelify)
    .transform('debowerify', options.debowerify)
    .transform('stringify', options.stringify);

  // Conditionally apply plugins and event listeners
  if (config.debug) {
    bundler.plugin('watchify')
      .on('update', bundle)
      .on('log', plugins.util.log);
  } else {
    bundler.plugin('bundle-collapser/plugin');
  }

  function bundle() {
    return bundler.bundle()
      .on('error', onError)
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(plugins.if(!config.debug, plugins.sourcemaps.init(options.sourcemaps)))
      .pipe(plugins.if(!config.debug, plugins.uglify()))
      .pipe(plugins.size(options.size))
      .pipe(plugins.if(!config.debug, plugins.sourcemaps.write('./')))
      .pipe(gulp.dest(config.globs.js.dest))
      .pipe(plugins.browserSync.stream(options.browserSync));
  }

  gulp.task('js', function () {
    return bundle();
  });

};