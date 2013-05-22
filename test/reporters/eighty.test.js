/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Eighty = require('../../lib/reporters/eighty');

describe('Eighty', function() {
  it('should have options', function() {
    var eighty = new Eighty;
    eighty.options.should.eql({
      head: ['#', 'Title', 'Author', 'Date'],
      colWidths: [6, 38, 14, 16]
    });
  });
});