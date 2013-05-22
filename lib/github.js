/*!
 * GitHub Issues from the CLI.
 * 
 * Veselin Todorov <hi@vesln.com>
 * MIT License.
 */

/**
 * Dependencies.
 */
var request = require('request');
var flatiron = require('flatiron');
var async = flatiron.common.async;
var app = require('./index');

/**
 * GitHub API.
 * 
 * @type {Object}
 */ 
var github = module.exports;

/**
 * URLs.
 * 
 * @type {Object}
 */
github.urls = {
  main: 'https://api.github.com',
  repos: '/users/:user/repos',
  issues: '/repos/:user/:repo/issues'
};

/**
 * Returns all repos of a user.
 * 
 * @param {String} username
 * @param {Function} callback
 */
github.repos = function(username, cb) {
  var url = github.url('repos', { user: username });
  var repos = [];
  
  github.request(url, function(err, response, body) {
    if (200 !== response.statusCode) {
      return cb(new Error('('+response.statusCode+') '+body.message));
    }

    body.forEach(function(repo) {
      repos.push(repo.name);
    });
    
    cb(err, repos);
  });
};

/**
 * Fetches all issues for supplied repos.
 * 
 * @param {String} username
 * @param {Array} repos
 * @param {Function} callback
 */
github.issues = function(username, repos, cb) {
  var results = {};
  var issue = function(repo, done) {
    var url = github.url('issues', { user: username, repo: repo });
    
    github.request(url, function(err, response, body) {
      if (200 !== response.statusCode) {
        return done(new Error('('+response.statusCode+') '+body.message));
      }
      results[repo] = body;
      done(err);
    });
  };
  
  async.forEach(repos, issue, function(err) {
    cb(err, results);
  });
};

/**
 * Requests data from GitHub.
 * 
 * @param {String} url
 * @param {Function} callback
 */
github.request = function(url, cb) {
  var options = {
    url: url,
    headers: {
      'User-Agent': 'vesln/issues'
    },
    json: true
  };
  var token = app.config.get('token');
  var username = app.config.get('username');;
  var auth = null;
  
  if (token && username) {
    auth = new Buffer(username + '/token:' + token, 'ascii')
    options.headers.Authorization = 'Basic ' + auth.toString('base64');
  }
  request(options, cb);
};

/**
 * Returns a url address.
 * 
 * @type {String} name
 * @type {Object} param
 * @returns {String} url
 */
github.url = function(name, params) {
  var url = github.urls.main + github.urls[name];
  
  Object.keys(params).forEach(function(param) {
    url = url.replace(':' + param, params[param]);
  });
  
  return url;
};