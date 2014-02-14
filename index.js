
/**
 * Module dependencies.
 */

var Cookies = require('cookies');
var Keygrip = require('keygrip');

/**
 * Create cookies middleware.
 *
 * @param {Array|Keygrip=} keys
 * @return {Function}
 * @api public
 */

module.exports = function(keys, options){
  options = options || {};
  if (Array.isArray(keys)) keys = new Keygrip(keys);
  var requestKey = options.requestKey || 'cookies';
  
  return function(req, res, next){
    req[requestKey] = res[requestKey] = Cookies(req, res, keys);
    next();
  };
};
