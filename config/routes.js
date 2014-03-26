'use strict';

(function() {

/**
 * Import helpers ==============================================================
 */

// require('../app/models/');

/**
 * Import helpers ==============================================================
 */
var Kimono = require('../app/controllers/kimono');
  // , mongoose = require('mongoose');
  // , Pset = mongoose.model('Pset')

// Public functions. ===========================================================
module.exports = function (app) {

  // API endpoints =============================================================
  app.post('/setup', function (req, res) {
    // Save information in MongoDB.

    res.send({}, 200);
  });

  app.post('/getlistings', function (req, res) {
    // Send request to Kimono with parameters.
    var obj = req.body;

    console.log(obj);

    Kimono.getListings(obj, function (err, data) {
      if (err)
        res.send(err, 400);

      res.send(data, 200);
    });
  });

	// Application routes ========================================================
	app.get('/', function (req, res) {
    res.sendfile('index.html', {'root': './public/views/'});
  });
};

}());