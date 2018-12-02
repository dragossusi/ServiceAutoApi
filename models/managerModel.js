'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManagerSchema = new Schema({
  email: {
    type: String,
    required: 'Enter the email'
  },
  password: {
    type: String,
    required: 'Enter password'
  },
});

module.exports = mongoose.model('managers', ManagerSchema);