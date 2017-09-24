// require express so we can use it
const express = require('express');

// create and set up express app
const app = express();

// set reply to "localhost:4000/" get request
// parameter:
// req: request information
// res: response to the request
app.get('/', function(req, res){
  console.log('GET request');
  // finishing response to the request
  //res.end();
  res.send("<html><body><h1>Welcome to KaonaDB</h1></body></html>");
});

// set reply to "localhost:4000/api" get request
app.get('/api', function(req, res){
  console.log('GET api request');
  // finishing response to the request
  res.send({
    KU_Username: 'benjaminfranklin',
    KU_Password: 'constitution',
    KU_Name: 'Benjamin',
    KU_Surname: 'Fransklin',
    KU_Address: '1600 Pennsylvania Ave NW, Washington, DC 20500, EE. UU',
    KU_DescriptionBio: 'I want to hear you.',
    KU_Type : 'Art Lover',
    KU_Email: 'benjaminfranklin@whitehouse.usa',
    KU_Phone: '',
    KU_ID_Pass_Recovery: '',
    KU_ArtWorkList: []
  });
});

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Express is ready. Listening for requests...')
});
