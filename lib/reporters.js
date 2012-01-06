/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Redr = require('redr');

/**
 * Exporting the reporters.
 */
module.exports = new Redr(__dirname + '/reporters/').load();