// require express so we can use it
const express = require('express');
// add routes file
const routes = require('./routes/api');

// create and set up express app
const app = express();

// use routes defined in files
app.use('/api', routes);

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Express is ready. Listening for requests...')
});
