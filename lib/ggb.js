
/**
 * Module dependencies.
 */

var request = require('request');
var thunkify = require('thunkify-wrap');
var API_KEY = process.env.KIMONO_API_KEY;
var domain = 'https://www.kimonolabs.com/api/br0padzy?apikey=' + API_KEY;

/**
 * Define `GGB`.
 */

var GGB = {};

/**
 * Fetch Kimono API and website to see if bakery is open.
 *
 * @return {Boolean}
 */

GGB.isOpen = function *isOpen() {
  var isOpen = false;
  var get = thunkify(request.get);
  var data = yield get(domain);
  var message = JSON.parse(data[0].body);
  if (~message.results.collection1[0].isopen.indexOf('open'))
    isOpen = true;
  return isOpen;
}

/**
 * Expose `GGB`.
 */

module.exports = GGB;
