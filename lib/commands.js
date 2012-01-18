/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var Request = require('./request');
var reporters = require('./reporters');
var app = require('./index');
var package = require('package')(module);
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
  log(app.help());
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
 * @param {string} key
 * @param {string} value
 */
commands.set = function(key, value) {
  app.config.set(key, value, function() {
    app.config.save(function(err) {
      if (err) throw err;
    });
  });
};

/**
 * Clears an option.
 * 
 * @paran {Object} key
 */
commands.clear = function(key) {
  app.config.clear(key, function() {
    app.config.save(function(err) {
      if (err) throw err;
    });
  });
};

/**
 * Makes a request to Github for the specified.
 * `username` and `repo`.
 * 
 * @param {string} username
 * @param {string} repo
 */
commands.issues = function (username, repo) {
  var self = this;
  var request = new Request(username, repo);
  var name = app.config.get('reporter').toLowerCase();
  
  if (name === 'handle') {
    name = app.config.stores.defaults.get('reporter');
  }
  
  request.on('end', function(err, results) {
    if (err) throw err;
    reporters.handle(name, results);
  });
};