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
var Reporter = require('../reporter');

/**
 * Short reporter constructor.
 * 
 * @param {Object} data
 */
function Short(data) {
  this.data = data;
};

/**
 * Extends Reporter.
 */
Short.prototype.__proto__ = Reporter.prototype;

/**
 * Templates.
 * 
 * @type {Object}
 */
Short.prototype.templates = {
  main: ':repo'.underline + ': :count open issues\n'
};

/**
 * Prints the results.
 */
Short.prototype.print = function() {
  var self = this;
  var issues = null;
  var out = '\n';
  
  Object.keys(this.data).forEach(function(repo) {
    issues = self.data[repo];
    out += self.templates.main
      .replace(':repo', repo)
      .replace(':count', issues.length);
  });
  
  this.out(out);
};

/**
 * Exporting the lib.
 */
module.exports = Short;