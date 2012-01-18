/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var utile = require('flatiron').common;

/**
 * Exporting the reporters.
 */
module.exports = utile.requireDirLazy(__dirname + '/reporters/');