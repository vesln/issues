/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Reporter = require('../reporter');

/**
 * Number reporter constructor.
 * 
 * @param {Object} data
 */
function Number(data) {
  this.data = data;
};

/**
 * Extends Reporter.
 */
Number.prototype.__proto__ = Reporter.prototype;

/**
 * Templates.
 * 
 * @type {Object}
 */
Number.prototype.templates = {
  main: '\n ' + ':repo' + ' (:count open issues)\n\n:issues\n',
  issue: '#:number: :title [:author]\n',
  empty: 'No issues to show.\n'
};

/**
 * Prints the results.
 */
Number.prototype.print = function() {
  var self = this;
  var issues = null;
  var content = '';
  var out = '';
  
  Object.keys(this.data).forEach(function(repo) {
    issues = self.data[repo];
    content = '';
    
    issues.forEach(function(issue) {
      content += self.templates.issue
        .replace(':number', issue.number)
        .replace(':title', issue.title)
        .replace(':author', issue.user.login);
    });
    
    out += self.templates.main
      .replace(':repo', repo)
      .replace(':count', issues.length)
      .replace(':issues', content);
    
    if (!issues.length) out += self.templates.empty;
  });
  
  this.out(out);
};

/**
 * Exporting the lib.
 */
module.exports = Number;