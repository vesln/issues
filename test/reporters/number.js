/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Number = require('../../lib/reporters/number');
var sinon = require('sinon');

describe('number', function() {
  it('should have templates', function() {
    var number = new Number;
    number.templates.should.eql({
      main: '\n ' + ':repo' + ' (:count open issues)\n\n:issues\n',
      issue: '#:number: :title [:author]\n',
      empty: 'No issues to show.\n'
    });
  });
  
  describe('constructor', function() {
    it('should save data for later user', function() {
      var data = { foo: 'bar' };
      var number = new Number(data);
      number.data.should.eql(data);
    });
  });
  
  describe('print', function() {
    describe('print', function() {
      it('should print results', function() {
        var reporter = new Number;
        sinon.stub(reporter, 'out');
        reporter.data = { luna: [
          { created_at: '2011-06-06T06:04:20Z',
            milestone: null,
            labels: [],
            number: 1,
            user: 'test',
            title: 'Abstraction',
            id: 1007733,
          }
        ] };
        reporter.print();
        reporter.out.calledOnce.should.be.ok;
        reporter.out.getCall(0).args[0].should.eql('\n luna (1 open issues)\n\n#1: Abstraction [test]\n\n');
      });
    });
  });
});