/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Basic = require('../../lib/reporters/basic');
var sinon = require('sinon');

describe('basic', function() {
  it('should have options', function() {
    var basic = new Basic;
    basic.options.should.eql({
      head: ['Title', 'Author', 'Date'],
      colWidths: [40, 20, 25]
    });
  });
  
  it('should have templates', function() {
    var basic = new Basic;
    basic.templates.should.eql({
      main: '\n ' + ':repo'.bold.underline + ' (:count open issues)\n\n:table\n',
      empty: 'No issues to show.\n'
    });
  });
  
  describe('constructor', function() {
    it('should save data for later user', function() {
      var data = { foo: 'bar' };
      var basic = new Basic(data);
      basic.data.should.eql(data);
    });
  });
  
  describe('print', function() {
    describe('print', function() {
      it('should print results', function() {
        var reporter = new Basic;
        sinon.stub(reporter, 'out');
        reporter.data = { luna: [
          { created_at: '2011-06-06T06:04:20Z',
            milestone: null,
            labels: [],
            number: 1,
            user: { login: 'test' },
            title: 'Abstraction',
            id: 1007733,
          }
        ] };
        reporter.print();
        reporter.out.calledOnce.should.be.ok;
        reporter.out.getCall(0).args[0].should.eql('\n \u001b[4m\u001b[1mluna\u001b[22m\u001b[24m (1 open issues)\n\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━┓\n┃\u001b[36m Title                                  \u001b[39m┃\u001b[36m Author             \u001b[39m┃\u001b[36m Date                    \u001b[39m┃\n┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━━━━━━━━━━━━━━━┫\n┃ Abstraction                            ┃ test               ┃ 2011-06-06T06:04:20Z    ┃\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━━━━━━━┛\n');
      });
    });
  });
});