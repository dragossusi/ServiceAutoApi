const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://dragossusi:pinkinatra123@ds123624.mlab.com:23624/service-auto';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Request = require('./models/requestsModel'), //created model loading here
  Manager = require('./models/managerModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(url); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var requestRoutes = require('./routes/requestRoutes'); //importing route
var loginRoutes = require('./routes/loginRoutes'); //importing route
requestRoutes(app); //register the route
loginRoutes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);