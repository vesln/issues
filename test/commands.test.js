/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var commands = require('../lib/commands');

describe('commands', function() {
  it('should have version command', function() {
    commands.version.should.be.ok
  });
  
  it('should have issues command', function() {
    commands.issues.should.be.ok
  });
  
  it('should have set command', function() {
    commands.set.should.be.ok
  });
  
  it('should have clear command', function() {
    commands.clear.should.be.ok
  });
});