/*
 * buildinfo.js
 * ==================
 *
 *
 */

const logColors = require('colors/safe');

module.exports = function (config) {

  console.log('\n' + logColors.grey('Project: ') +  config.pkg.name +
  '\n' + logColors.grey('Version: ') + config.pkg.version +
  '\n' + logColors.grey.bold('Author: ') + config.pkg.author.name +
  '\n' + logColors.grey.bold('Mode: ') + (config.debug === true ? logColors.bgRed(' development ') : logColors.bgGreen(' production ')) +
  '\n');

};