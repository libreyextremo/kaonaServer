const express = require('express');
const router = express.Router();

// set reply to "localhost:4000/api/" get request
// get art list from the db
router.get('/', function(req, res){
  console.log('GET api/ request');
  res.send({type: 'GET'});
});

// set reply to "localhost:4000/api/art" get request
// get art list from the db
router.get('/art', function(req, res){
  console.log('GET api/art request');
  res.send({type: 'GET'});
});

// add a new art to the db
router.post('/art', function(req, res){
  console.log('POST api/art request');
  res.send({type: 'POST'});
});

// update an art in the db
router.put('/art/:id', function(req, res){
  console.log('PUT api/art request');
  res.send({type: 'PUT'});
});

// delete an art in the db
router.delete('/art/:id', function(req, res){
  console.log('DELETE api/art request');
  res.send({type: 'DELETE'});
});

module.exports = router;
