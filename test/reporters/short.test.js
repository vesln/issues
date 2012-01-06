/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Short = require('../../lib/reporters/short');
var sinon = require('sinon');

describe('short', function() {
  it('should have templates', function() {
    var short = new Short;
    short.templates.should.eql({
      main: ':repo'.underline + ': :count open issues\n'
    });
  });
  
  describe('constructor', function() {
    it('should save data for later user', function() {
      var data = { foo: 'bar' };
      var short = new Short(data);
      short.data.should.eql(data);
    });
  });
  
  describe('print', function() {
    it('should print results', function() {
      var reporter = new Short;
      sinon.stub(reporter, 'out');
      reporter.data = { logme: ['foo'] };
      reporter.print();
      reporter.out.calledOnce.should.be.ok;
      reporter.out.getCall(0).args[0].should.eql('\n\u001b[4mlogme\u001b[24m: 1 open issues\n');
    });
  });
});