/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
/**
 * Dependencies.
 */
var github = require('../lib/github');

describe('github', function() {
  describe('repos', function() {
    it('should return all repos for user', function(done) {
      github.repos('vesln', function(err, repos) {
        repos.should.be.ok;
        Array.isArray(repos).should.be.ok;
        repos.indexOf('logme').should.be.ok;
        (repos.indexOf('test-foo-bar') < 0).should.be.ok;
        done();
      });
    });
  });
  
  describe('issues', function() {
    it('should return issues for repo', function(done) {
      github.issues('vesln', ['logme'], function(err, issues) {
        issues.logme.should.be.ok
        Array.isArray(issues.logme).should.be.ok;
        done();
      });
    });
  });
  
  describe('url', function() {
    it('should return sane url', function() {
      github.url('repos', { user: 'vesln' }).should.eql('https://api.github.com/users/vesln/repos');
      github.url('issues', { user: 'vesln', repo: 'logme' }).should.eql('https://api.github.com/repos/vesln/logme/issues');
    });
  });
});