'use strict';

(function() {

var request = require('request');

module.exports = {
	// Get JSON.
	getListings: function getListings (obj, callback) {
		// Obj.
		// .keywords: [w4m, m4w, white, beard, bearded, coffee, ..]
		// .neighborhoods: [48, 112, ..]
		// .ageRange: [22, 35]

		var keywords = obj.keywords.join('+');
		var minAge = Math.min.apply(null, obj.ageRange);
		var maxAge = Math.max.apply(null, obj.ageRange);
		var neighborhoods = 'nh=' + obj.neighborhoods.join('&nh=') + '&';

		// Need to set the URL.
		var craigslistUrl = 'http://sfbay.craigslist.org/search/mis?zoomToPosting=&catAbb=mis&query=' +
												keywords + 
												'&minAsk=' + minAge
												'&maxAsk=' + maxAge
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