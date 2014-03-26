// Retrieve an array of people from MongoDB.
// For each person, run Kimono and see if there are any new posts for that day
// Send an email to that person.

'use strict';

require('./app/models/crush');
var mongoose = require('mongoose')
  , Crush = mongoose.model('Crush');

var Kimono = require('./app/controllers/kimono.js');

// Pull all data from MongoDB, iterate through.
Crush.find({}, function (err, crushes) {
  crushes.forEach(function (crush) {
    Kimono.getListings(crush, function (err, data) {
      if (err)
        // Shit.

      // Email data to the crush (crush.email_address).
      console.log(data);
    });
  });
});