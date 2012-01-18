/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var fs = require('fs');
var path = require('path');
var sinon = require('sinon');
var reporters = require('../lib/reporters');
var Basic = require('../lib/reporters/basic');

describe('reporters', function() {
  it('should have the correct modules', function() {
    fs.readdirSync(path.join(__dirname, '..', 'lib', 'reporters')).forEach(function (file) {
      file = file.replace('.js', '');
      reporters.should.have.property(file);
    });
  });
  
  describe('handle', function() {
    it('should throw error if invalid reporter is supplied', function(done) {
      try {
        reporters.handle('foo', {});
      } catch(err) {
        done();
      }
    });
    
    it('should call print method of reporter if everything is ok', function() {
      var print = sinon.stub(Basic.prototype, 'print');
      reporters.handle('basic', {});
      print.calledOnce.should.be.ok;
      print.restore();
    });
  });  
});