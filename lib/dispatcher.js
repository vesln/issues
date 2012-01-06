/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var commands = require('./commands');
var package = require('package')(module);
var Request = require('./request');
var reporters = require('./reporters');

/**
 * Dispatcher constructor.
 * 
 * @param {Object} argv
 */
function Dispatcher(argv) {
  argv || (argv = {});
  this.argv = argv;
};

/**
 * Dispatches the request.
 */
Dispatcher.prototype.run = function() {
  var cmds = Object.keys(commands);
  var username = this.argv._[0];
  var repository = this.argv._[1];
  var cmd = null;
  var self = this;
  var request = null;
  
  for (var i = -1, len = cmds.length; ++i < len;) {
    command = cmds[i];
    if (this.argv[command]) {
      return commands[command]();
    }
  }
  
  if (this.argv._.length === 0) {
    return commands.help();
  }
  
  request = new Request(username, repository);
  
  request.on('end', function(err, results) {
    if (err) throw err;
    self.handle(results);
  });
};

/**
 * Handles results from GitHub.
 * 
 * @param {Object} results
 */
Dispatcher.prototype.handle = function(results) {
  var Reporter = reporters.get[this.argv.reporter];
  var reporter = null;
  
  if (!Reporter) {
    throw new Error('Invalid reporter.');
  }
  
  reporter = new Reporter(results);
  reporter.print();
};

/**
 * Exporting the lib.
 */
module.exports = Dispatcher;

/**
 * Exports the version.
 */
module.exports.version = package.version;