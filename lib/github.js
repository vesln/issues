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
var async = require('async');

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
  
  request({ url: url, json: true }, function(err, response, body) {
    body || (body = []);
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
    
    request({ url: url, json: true }, function(err, response, body) {
      switch (response.statusCode) {
        case 404: return done(new Error('Invalid username or repository name.'));
        case 200: break;
        default: body = []
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