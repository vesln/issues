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
var app = require('flatiron').app;
var package = require('package')(module);
var log = console.log;


/**
 * Commands.
 * 
 * @type {Object}
 */
var commands = module.exports;

/**
 * Handles results from GitHub.
 * 
 * @param {Object} results
 */
commands.handle = function(results) {
  var name = app.config.get('reporter').toLowerCase();
  var Reporter = reporters[name];
  var reporter = null;
  
  if (!Reporter) {
    throw new Error('Invalid reporter.');
  }
  
  reporter = new Reporter(results);
  reporter.print();
};


/**
 * Help command.
 */
app.cmd('help', commands.help = function() {
  log(app.help());
});

/**
 * Outputs lib author.
 */
app.cmd('about', commands.about = function() {
  log('Veselin Todorov <hi@vesln.com>');
});

/**
 * Outputs lib version.
 */
app.cmd('version', commands.version = function() {
  log(package.version);
});

/**
 * Outputs url address of the project.
 */
app.cmd('url', commands.url = function() {
  log('http://github.com/vesln/issues');
});

/**
 * Sets an option.
 * 
 * @param {string} key
 * @param {string} value
 */
app.cmd(/set ([^\s]+) ([^\s]+)/, commands.set = function(key, value) {
  app.config.set(key, value, function() {
    app.config.save(function(err) {
      if (err) throw err;
    });
  });
});

/**
 * Clears an option.
 * 
 * @paran {Object} key
 */
app.cmd(/clear ([^\s]+)/, commands.clear = function(key) {
  app.config.clear(key, function() {
    app.config.save(function(err) {
      if (err) throw err;
    });
  });
});

/**
 * Makes a request to Github for the specified.
 * `username` and `repo`.
 * 
 * @param {string} username
 * @param {string} repo
 */
app.cmd(/([^\s]+) ([^\s]+)/, commands.request = function (username, repo) {
  var self = this;
  var request = new Request(username, repo);
  
  request.on('end', function(err, results) {
    if (err) throw err;
    commands.handle(results);
  });
});