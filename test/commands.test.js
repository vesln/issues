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
  it('should have help command', function() {
    commands.help.should.be.ok
  });
  
  it('should have about command', function() {
    commands.about.should.be.ok
  });
  
  it('should have version command', function() {
    commands.version.should.be.ok
  });
  
  it('should have url command', function() {
    commands.url.should.be.ok
  });
});