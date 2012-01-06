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
var Table = require('cli-table');
var colors = require('cli-color');

/**
 * Short reporter constructor.
 * 
 * @param {Object} data
 */
function Short(data) {
  this.data = data;
};

/**
 * Prints the results.
 */
Short.prototype.print = function() {
  var self = this;
  var issues = null;
  
  print('\n');
  
  Object.keys(this.data).forEach(function(repo) {
    issues = self.data[repo];
    print(repo.bold.underline + ': %d open issues\n', issues.length);
  });
};

/**
 * Exporting the lib.
 */
module.exports = Short;