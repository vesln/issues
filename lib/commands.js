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
var optimist = require('optimist').options({
  'about': {
    description: 'Library author.',
  },
  'version': {
    description: 'Outputs version number.',
  },
  'url': {
    description: 'Outputs the url of the library.',
  },
  'help': {
    description: 'Outputs this help info.',
  },
  'reporter': {
    description: 'Reporter - basic, short',
    default: 'basic'
  }
});
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