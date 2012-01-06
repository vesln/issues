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
 * Basic reporter constructor.
 * 
 * @param {Object} data
 */
function Basic(data) {
  this.data = data;
};

/**
 * Table options.
 * 
 * @type {Object}
 */
Basic.prototype.options = {
  head: ['Title', 'Author', 'Date'],
  colWidths: [40, 20, 25]
};

/**
 * Prints the results.
 */
Basic.prototype.print = function() {
  var table = null;
  var self = this;
  var issues = null;
  
  Object.keys(this.data).forEach(function(repo) {
    issues = self.data[repo];
    table = new Table(self.options);
    
    issues.forEach(function(issue) {
      table.push([issue.title, issue.user.login, issue.created_at]);
    });
    
    print('\n ' + repo.bold.underline + ' (%d open issues)\n', issues.length);
    print(table.toString());
    if (!table.length) print(' ' + 'No issues to show.')
    print('\n');
  });
};

/**
 * Exporting the lib.
 */
module.exports = Basic;