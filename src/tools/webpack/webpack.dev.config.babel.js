(function() {
'use strict';

  module.exports = (webpack, config) => {
    const path        = require('path');
    const devSettings = require('./webpack.config.babel.js')(config);

    // Regex
    const exclude = config.tools.webpack.exclude;
    const extensions = config.tools.webpack.extensions;

    devSettings.devtool = 'cheap-module-eval-source-map';

    devSettings.entry = devSettings.entry.concat([
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, '../../../' + config.globs.root_src + config.globs.js.src)
    ]);

    devSettings.output.publicPath = '/';

    if(config.tools.browsersync.proxy.active === true) {
      devSettings.output.publicPath += config.globs.folders.src.root + config.globs.root_dest;
    }

    devSettings.plugins = devSettings.plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        DEBUG_MODE: true,
        'process.env': {
          NODE_ENV: config.debug
        }
      })
    ]);

    devSettings.devServer = {
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        publicPath: false
      }
    };

    return devSettings;
  };
})();
