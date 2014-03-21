'use strict';

(function() {

var request = require('request');

module.exports = {
	// Get JSON.
	getListings: function getListings (obj, callback) {
		if (typeof obj === 'function') {
			callback = obj;
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

		var keywords = obj.keywords.join('+');
		var minAge = '';
		var maxAge = '';

		if (obj.minAge)
			minAge = obj.minAge

		if (obj.maxAge)
			maxAge = obj.maxAge

		var neighborhoods = '';
		if (obj.neighborhoods.length > 0)
			neighborhoods = 'nh=' + obj.neighborhoods.join('&nh=') + '&';

		// Need to set the URL.
		var craigslistUrl = 'http://sfbay.craigslist.org/search/mis?zoomToPosting=&catAbb=mis&query=' +
												keywords + 
												'&minAsk=' + minAge +
												'&maxAsk=' + maxAge +
												neighborhoods +
												'&excats=' +
												'';

		var qs = {
			token: 'a0c0c288d78e5365bac92025572de56f',
			url: craigslistUrl
		};

		var opts = {
			uri: 'http://www.diffbot.com/api/craigslist',
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