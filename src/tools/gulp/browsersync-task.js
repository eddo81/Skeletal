/**
 *  browserSync-task.js
 *  ===================
 *
 *
 */

module.exports = function (gulp, plugins, config) {

  gulp.task('browsersync', (callback) => {
    let webpackConfig = require('../webpack/webpack.dev.config.babel.js')(plugins.webpack, config);
    let bundler = plugins.webpack(webpackConfig);
    let options = {
      browserSync: {
        ghostMode: {
          clicks: true,
          forms: true,
          scroll: true
        },
        port: config.tools.browsersync.port,
        open: true,
        notify: true,
        online: true,
        logFileChanges: false,
        middleware: [
          plugins.webpackDevMiddleware(bundler, {
            stats: webpackConfig.devServer.stats,
            publicPath: webpackConfig.output.publicPath
          }),
          plugins.webpackHotMiddleware(bundler)
        ]
      }
    };

    if(config.tools.browsersync.proxy.active === true) {
      options.browserSync.host = 'localhost';
      options.browserSync.proxy = {
        target: config.tools.browsersync.proxy.target,
        ws: true,
      };
    }
    else {
      options.browserSync.server = [config.globs.root_dest];
    }

    plugins.browserSync.init(options.browserSync, callback);
  });

};

