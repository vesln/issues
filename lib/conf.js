/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var path = require('path');

/**
 * Path to config file.
 * 
 * @param {String}
 */
var conf = path.dirname(__dirname) + '/data/config.json';

/**
 * Exposing `conf`.
 */
module.exports = require('nconf').file({ file: conf });