/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var reporters = require('../lib/reporters');
var Redr = require('redr');
var path = require('path');

describe('reporters', function() {
  it('should be instanceof redr', function() {
    (reporters instanceof Redr).should.be.ok;
  });
  
  it('should have correct path', function() {
    var expected = path.dirname(__dirname) + '/lib/reporters/';
    reporters.paths[0].should.eql(expected);
  });
});