/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var path = require('path');
var flatiron = require('flatiron');
var app = module.exports = require('./index');
var error = console.error;

app.use(flatiron.plugins.cli, {
  usage: [
    'GitHub Issues from the CLI.',
    '',
    'Usage: issues <username> [repository]'
  ],
  source: path.join(__dirname, 'commands'),
  argv: require('./params')
});

var commands = require('./commands');

app.cmd(/clear ([^\s]+)/, commands.clear);
app.cmd(/version/, commands.version);

// Username only.
app.cmd(/([a-zA-Z0-9\-_]+)/, commands.issues);

// Username + repo.
app.cmd(/([^\s]+) ([^\s]+)/, commands.issues);

/**
 * Handles exceptions.
 */
process.on('uncaughtException', function(err) {
  error(err.message);
  process.exit(1);
});