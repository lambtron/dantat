
var request = require('request');
var thunkify = require('thunkify');
var domain = 'http://webservices.nextbus.com';

var GGB = {};

GGB.isOpen = function *isOpen() {
  var get = thunkify(request.get);
  return true;
}

module.exports = GGB;
