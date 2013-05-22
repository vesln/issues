/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Basic = require('./basic');

/**
 * Eighty reporter constructor.
 * 
 * @param {Object} data
 */
function Eighty(data) {
  this.data = data;
};

/**
 * Table options.
 * 
 * @type {Object}
 */
Eighty.prototype.options = {
  head: ['#', 'Title', 'Author', 'Date'],
  colWidths: [6, 32, 14, 22]
};

/**
 * Extends Basic.
 */
Eighty.prototype.__proto__ = Basic.prototype;

/**
 * Exporting the lib.
 */
module.exports = Eighty;