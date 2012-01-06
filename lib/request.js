/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var EventEmitter = require('events').EventEmitter;
var async = require('async');
var github = require('./github');
var reporters = require('./reporters');

/**
 * Request constructor.
 * 
 * @param {String} username
 * @param {String} repository
 */
function Request(username, repository) {
  this.fetch(username, repository);
};

/**
 * Requets extends EventEmitter.
 */
Request.prototype.__proto__ = EventEmitter.prototype;

/**
 * Fetches issues for a repo. Emits `end` when it's ready.
 * 
 * @param {String} username
 * @param {String} repository
 */
Request.prototype.fetch = function(username, repository) {
  var self = this;
  
  async.waterfall([
    function(callback) {
      if (repository) {
        return callback(null, username, [repository]);
      }
      github.repos(username, function(err, results) {
        callback(err, username, results);
      });
    },
    function(username, repositories, callback) {
      github.issues(username, repositories, function(err, results) {
        callback(err, results);
      });
    }
  ], 
  function(err, results) {
    self.emit('end', err, results);
  });
};

/**
 * Exporting the lib.
 */
module.exports = Request;