/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Dispatcher = require('../lib/dispatcher');
var Basic = require('../lib/reporters/basic');
var commands = require('../lib/commands');
var sinon = require('sinon');

describe('Dispatcher', function() {
  describe('run', function() {
    it('should call command if it is supplied as param', function() {
      var dispatcher = new Dispatcher({ about: true, _: [] });
      sinon.stub(commands, 'about');
      dispatcher.run();
      commands.about.calledOnce.should.be.ok;
      commands.about.restore();
    });
    
    it('should call help if the params are empty', function() {
      var dispatcher = new Dispatcher({ _: [] });
      sinon.stub(commands, 'help');
      dispatcher.run();
      commands.help.calledOnce.should.be.ok;
      commands.help.restore();
    });
    
    it('should call handle if everything is ok', function() {
      var print = Basic.prototype.print;
      Basic.prototype.print = function() {
        Basic.prototype.print = print;
      };
      var dispatcher = new Dispatcher({ _: ['vesln', 'logme'], reporter: 'basic' });
      sinon.stub(dispatcher, 'handle');
      dispatcher.run();
      dispatcher.handle.should.be.ok;
      dispatcher.handle.restore();
    });
  });
  
  describe('handle', function() {
    it('should throw error if invalid reporter is supplied', function(done) {
      var dispatcher = new Dispatcher({ _: ['vesln', 'logme'], reporter: 'foo' });
      try {
        dispatcher.handle();
      } catch(err) {
        done();
      }
    });
    
    it('should call print method of reporter if everything is ok', function() {
      var dispatcher = new Dispatcher({ _: ['vesln', 'logme'], reporter: 'basic' });
      var print = sinon.stub(Basic.prototype, 'print');
      dispatcher.handle({});
      print.calledOnce.should.be.ok;
      print.restore();
    });
  });
});