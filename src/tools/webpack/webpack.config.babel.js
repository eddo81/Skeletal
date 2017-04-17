(function() {
'use strict';

  const path = require('path');

  module.exports = (config) => {

    // Regex
    const exclude = config.tools.webpack.exclude;
    const extensions = config.tools.webpack.extensions;

    return {
      entry: [],

      output: {
        path: path.join(__dirname, '../../../' + config.globs.root_dest),
        filename: config.globs.js.dest
      },

      plugins: [],

      module: {
        rules: [
          {
             test: extensions.text,
             exclude: exclude,
             use: [
              'raw-loader'
             ]
          },

          {
            test: extensions.vue,
            loader: 'vue-loader'
          },

          {
            test: extensions.js,
            exclude: exclude,
            use: [
              'babel-loader'
            ]
          }
        ]
      },

      resolve: {
        extensions: ['.js', '.es6', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue.common.js'
        }
      }
    };

  };

})();
