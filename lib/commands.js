/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var package = require('package')(module);
var optimist = require('optimist');
var log = console.log;
 
/**
 * Commands.
 * 
 * @type {Object}
 */
var commands = module.exports;

/**
 * Help command.
 */
commands.help = function() {
  var usage = [
    '\nGitHub Issues from the CLI.',
    '',
    'Usage: issues <username> [repository]'
  ].join('\n');
  
  optimist.usage(usage).showHelp();
};

/**
 * Outputs lib author.
 */
commands.about = function() {
  log('Veselin Todorov <hi@vesln.com>');
};

/**
 * Outputs lib version.
 */
commands.version = function() {
  log(package.version);
};

/**
 * Outputs url address of the project.
 */
commands.url = function() {
  log('http://github.com/vesln/issues');
};