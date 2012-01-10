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
var log = console.log;
var optimist = require('optimist');
var conf = require('./conf');

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

/**
 * Sets an option.
 * 
 * @param {Object} argv
 */
commands.set = function(argv) {
  var options = argv.set.split(':');
  
  if (options.length < 2) {
    throw new Error('Invalid options.')
  }
  
  conf.set(options[0], options[1], function() {
    conf.save(function(err) {
      if (err) throw err;
    });
  });
};

/**
 * Clears an option.
 * 
 * @param {Object} argv
 */
commands.clear = function(argv) {
  var key = argv.clear;
  conf.clear(key, function() {
    conf.save(function(err) {
      if (err) throw err;
    });
  });
};