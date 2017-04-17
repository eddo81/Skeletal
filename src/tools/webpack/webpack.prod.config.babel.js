(function() {
'use strict';

  module.exports = (webpack, config) => {
    const path         = require('path');
    const prodSettings = require('./webpack.config.babel.js')(config);

    // Regex
    const exclude = config.tools.webpack.exclude;
    const extensions = config.tools.webpack.extensions;

    prodSettings.devtool = false;

    prodSettings.entry = [
      path.join(__dirname, '../../../' + config.globs.root_src + config.globs.js.src)
    ];

    prodSettings.plugins = prodSettings.plugins.concat([
      new webpack.optimize.UglifyJsPlugin({
        output: { comments: false },
        compress: { warnings: false,  drop_console: true },
        mangle: { except: ['$', 'exports', 'require'] }
      }),
      new webpack.DefinePlugin({
        DEBUG_MODE: false,
        'process.env': {
          NODE_ENV: config.debug
        }
      })
    ]);

    return prodSettings;
  };
})();
