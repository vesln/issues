/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */
 
var path = require('path');


var app = module.exports = require('flatiron').app;
app.config.file({ file: path.join(__dirname, '..', 'data', 'config.json') });
app.config.defaults({ reporter: 'basic' });