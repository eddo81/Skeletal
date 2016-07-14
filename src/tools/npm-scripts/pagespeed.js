/**
 *  pagespeed.js
 *  ============
 *  Run PageSpeed Insights.
 *
 */

 const pagespeed = require('psi').output;
 const pkg       = require('../config.js').pkg;
 const url       = (pkg.homepage !== undefined && pkg.homepage !== '') ? pkg.homepage: 'example.com';
 const options   = {
  strategy: 'mobile'
  // By default we use the PageSpeed Insights free (no API key) tier.
  // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
  // key: 'YOUR_API_KEY'
 };

 pagespeed(url, options);