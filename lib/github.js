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
  main: 'https://github.com/api/v2/json',
  repos: '/repos/show/:user',
  issues: '/issues/list/:user/:repo/open'
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
    switch (response.statusCode) {
      case 404: throw new Error('Oops. Invalid user.');
      case 401: return done(new Error('Oops. Invalid login credentials.'));
      case 403: throw new Error('Hit GitHub api limit. Try again after few secs.');
    }
    
    body.repositories.forEach(function(repo) {
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
      switch (response.statusCode) {
        case 404: return done(new Error('Oops. Invalid user or repo.'));
        case 401: return done(new Error('Oops. Invalid login credentials.'));
        case 403: return done(new Error('Hit GitHub api limit. Try again after few secs.'));
      }
      results[repo] = body.issues;
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
    headers: {},
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