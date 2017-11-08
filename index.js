// require express so we can use it
const express = require('express');
// require body-parser to manage data in requests
const bodyParser = require('body-parser');
// require mongoose to connect to mongodb
const mongoose = require('mongoose');
// add routes file
const routes = require('./routes/api');

// create and set up express app
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost/kaonadb');
// use ES6 promises library instead of mongoose promise library
mongoose.Promise = global.Promise;
// use express.static to make "public" folder use
// static files services (css, images, html...)
app.use(express.static('public'));
// parse received data as json file
app.use(bodyParser.json());
// use routes defined in files adding '/api' to the route
app.use('/api', routes);
//error handling middleware
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Express is ready. Listening for requests...')
});
