/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Reporter = require('../lib/reporter');

describe('reporters', function() {
  describe('out', function() {
    it('should be sane', function() {
      var reporter = new Reporter;
      reporter.out.should.be.ok
    });
  });
});