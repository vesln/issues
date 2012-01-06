/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Request = require('../lib/request');

describe('Request', function() {
  it('should emit end', function(done) {
    var req = new Request('vesln', 'logme');
    req.on('end', function(err, results) {
      results.should.be.ok;
      done();
    });
  });
  
  it('should pass errors if any', function(done) {
    var req = new Request('vesln', 'test-foo-bar');
    req.on('end', function(err) {
      err.should.be.ok;
      done();
    });
  });
});