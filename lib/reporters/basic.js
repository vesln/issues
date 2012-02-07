/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Table = require('cli-table');
var colors = require('cli-color');
var Reporter = require('../reporter');

/**
 * Basic reporter constructor.
 * 
 * @param {Object} data
 */
function Basic(data) {
  this.data = data;
};

/**
 * Extends Reporter.
 */
Basic.prototype.__proto__ = Reporter.prototype;

/**
 * Table options.
 * 
 * @type {Object}
 */
Basic.prototype.options = {
  head: [ 'Number', 'Title', 'Author', 'Date'],
  colWidths: [9, 40, 20, 25]
};

/**
 * Templates.
 * 
 * @type {Object}
 */
Basic.prototype.templates = {
  main: '\n ' + ':repo'.bold.underline + ' (:count open issues)\n\n:table\n',
  empty: 'No issues to show.\n'
};

/**
 * Prints the results.
 */
Basic.prototype.print = function() {
  var table = null;
  var self = this;
  var issues = null;
  var out = '';
  
  Object.keys(this.data).forEach(function(repo) {
    issues = self.data[repo];
    table = new Table(self.options);
    
    issues.forEach(function(issue) {
      table.push([issue.number, issue.title, issue.user, issue.created_at]);
    });
    
    out += self.templates.main
      .replace(':repo', repo)
      .replace(':count', issues.length)
      .replace(':table', table.toString());
    
    if (!table.length) out += self.templates.empty;
  });
  
  this.out(out);
};

/**
 * Exporting the lib.
 */
module.exports = Basic;
