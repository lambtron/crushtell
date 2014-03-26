'use strict';

(function() {

var request = require('request');
var KIMONO_KEY = '6849a5e4ffb39e325c8add25b1f5695c';
var KIMONO_PATH = 'http://www.kimonolabs.com/api/53syy7p4';

module.exports = {
  // Get JSON.
  getListings: function getListings (obj, cb) {
    if (typeof obj === 'function') {
      cb = obj;
      obj = {
        keywords: [],
        neighborhoods: []
      };
    }

    // Obj.
    // .keywords: [w4m, m4w, white, beard, bearded, coffee, ..]
    // .neighborhoods: [48, 112, ..]
    // .maxAge: 35
    // .minAge: 20

    console.log(obj);

    var keywords = obj.keywords.join('+');
    var minAge = '';
    var maxAge = '';

    if (obj.minAge)
      minAge = obj.minAge;

    if (obj.maxAge)
      maxAge = obj.maxAge;

    var neighborhoods = '';
    if (obj.neighborhoods.length > 0)
      neighborhoods = 'nh=' + obj.neighborhoods.join('&nh=') + '&';

    // Need to set the URL.
    // var root = http://sfbay.craigslist.org
    var craigslistUrl = '/search/mis?zoomToPosting=&catAbb=mis&query=' +
                        keywords +
                        '&minAsk=' + minAge +
                        '&maxAsk=' + maxAge +
                        neighborhoods +
                        '&excats=' +
                        '';

    var qs = {
      apikey: KIMONO_KEY,
      kimpath1: craigslistUrl
    };

    var opts = {
      uri: KIMONO_PATH,
      method: 'GET',
      timeout: 50000,
      followRedirect: true,
      maxRedirects: 10,
      qs: qs
    };

    request(opts, cb);
  }
};

}());