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

/**
 * Handles results from GitHub.
 * 
 * @param {Object} results
 */
module.exports.handle = function(name, results) {  
  var Reporter = module.exports[name];
  var reporter = null;
  
  if (!Reporter) {
    throw new Error('Invalid reporter.');
  }
  
  reporter = new Reporter(results);
  reporter.print();
};
