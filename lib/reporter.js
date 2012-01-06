/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var print = console.log;

/**
 * Reporter constructor.
 * 
 * @param {Object} data
 */
function Reporter(data) {};

/**
 * Prints text.
 * 
 * @param {String} str
 */
Reporter.prototype.out = function(str) {
  print(str);
};

/**
 * Exporting the lib.
 */
module.exports = Reporter;