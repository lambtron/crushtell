'use strict';

(function() {

/**
 * Import helpers ==============================================================
 */
require('../app/models/crush');
var mongoose = require('mongoose')
  , Crush = mongoose.model('Crush');

/**
 * Import helpers ==============================================================
 */
var Kimono = require('../app/controllers/kimono');

// Public functions. ===========================================================
module.exports = function (app) {

  // API endpoints =============================================================
  app.post('/setup', function (req, res) {
    // Save information in MongoDB.
    var obj = req.body;

    Crush.create({
      email_address: obj.email_address,
      // crush_id: crushId,
      keywords: obj.keywords,
      neighborhoods: obj.neighborhoods,
      maxAge: obj.maxAge,
      minAge: obj.minAge
    }, function(err, crush) {
      console.log(crush);
      if (err)
        res.send(err, 400);
      else
        res.send({crushId: crushId}, 200);
    });

    res.send({}, 200);
  });

  app.post('/getlistings', function (req, res) {
    // Send request to Kimono with parameters.
    var obj = req.body;

    if (obj.crushId) {
      // Look up the object from MongoDB and submit that to Kimono.
      Crush.findOne({crush_id: obj.crushId}, function (err, crush) {
        if (err)
          res.send(err, 400);

        Kimono.getListings(crush, function (err, data) {
          if (err)
            res.send(err, 400);

          res.send(data, 200);
        });
      });
    } else {
      Kimono.getListings(obj, function (err, data) {
        if (err)
          res.send(err, 400);

        res.send(data, 200);
      });
    }
  });

	// Application routes ========================================================
	app.get('/', function (req, res) {
    res.sendfile('index.html', {'root': './public/views/'});
  });
};

}());