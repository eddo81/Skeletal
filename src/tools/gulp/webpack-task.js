/**
 *  Webpack-task.js
 *  ===============
 *  Bundle and minify JS-files in production mode.
 *
 */

module.exports = (gulp, plugins, config) => {
  const webpackConfig = require('../webpack/webpack.prod.config.babel.js')(plugins.webpack, config);

  gulp.task('webpack', (callback) => {
     plugins.webpack(webpackConfig, (err, stats) => {

      if(err) {
        throw new plugins.util.PluginError('webpack', err);
      }

      plugins.util.log('[webpack]', stats.toString({
        colors: true,
        chunks: false,
        errorDetails: true
      }));

      callback();
     });
  });
};
