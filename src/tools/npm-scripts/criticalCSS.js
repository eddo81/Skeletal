/**
 *  criticalCSS.js
 *  ==============
 *  Generate & Inline Critical-path CSS.
 *
 */

const critical = require('critical');
const config   = require('../config.js');
const options  = {
  critical: {
    base: config.globs.root_dest,
    src: 'index.html',
    dest: config.globs.root_dest + 'index.html',
    inline: true,
    minify: true,
    //assetPaths: [],
    css: [config.globs.css.dest + 'style.css']
  }
};

critical.generate(options.critical);