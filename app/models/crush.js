'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * Message Schema
 */
var CrushSchema = new Schema({
  created_on: {
    type: Date,
    default: Date.now
  },
  last_checked_on: {
    type: Date,
    default: Date.now
  },
  email_address: {
    type: String,
    default: '',
    trim: true
  },
  crush_id: {
    type: String,
    default: '',
    trim: true
  },
  keywords: {
    type: Array,
    default: []
  },
  neighborhoods: {
    type: Array,
    default: []
  },
  minAge: {
    type: Number,
    default: 0
  },
  maxAge: {
    type: Number,
    default: 100
  }
});


// Obj
// .keywords: [w4m, m4w, white, beard, bearded, coffee, ..]
// .neighborhoods: [48, 112, ..]
// .maxAge: 35
// .minAge: 20



/**
 * Statics
 */
CrushSchema.methods = {
  updateLastChecked: function updateLastChecked () {
    this.last_checked_on = Date.now;
  }
};

mongoose.model('Crush', CrushSchema);