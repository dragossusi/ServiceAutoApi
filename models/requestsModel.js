'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RequestSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name'
  },
  phone: {
    type: String,
    required: 'Enter the phone'
  },
  issue: {
    type: String,
    required: 'Enter the issue'
  },
  car: {
    type: String,
    required: 'Enter the car'
  },
  model: {
    type: String,
    required: 'Enter the model'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'ongoing', 'completed','revoked'],
    default: 'pending'
  }
});

module.exports = mongoose.model('requests', RequestSchema);