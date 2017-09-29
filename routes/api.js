const express = require('express');
const router = express.Router();
const KProfileModel = require('../models/profile_model');
const KUserModel = require('../models/user_model');

// set reply to "localhost:4000/api/" get request
// get art list from the db
router.get('/', function(req, res){
  console.log('GET api/ request');
  res.send("<html><body><h1>Welcome to Kaona</h1><p>by JM Sobrinos</p></body></html>");
});

// set reply to "localhost:4000/api/art" get request
// get art list from the db
router.get('/art', function(req, res){

  console.log('GET api/art request');
  res.send({type: 'GET'});

});

// set reply to "localhost:4000/clients" get request
// get user and his arts from the db
router.get('/art', function(req, res, next){

  console.log('GET /art request');
  console.log('usid = ' + req.query.usid);
  if (req.query.usid != null) {
    console.log('usid != null');
    KUserModel.find({KU_Username: req.query.usid}).then(function(listArt){
        res.send(listArt);
    }).catch(next);
  } else {
    console.log('usid == null');
    KUserModel.findOne({}).then(function(listArt){
        res.send(listArt);
    }).catch(next);
  };

});


// add a new art to the db
router.post('/art', function(req, res){

  console.log('POST api/art request');
  KUserModel.create(req.body).then(function(newArt){
    res.send(newArt);
  }).catch(next);

});

// update an art in the db
router.put('/art/:id', function(req, res){
  console.log('PUT api/art request');
  console.log('params: usid = ' + req.params.usid);
  KUserModel.findByIdAndUpdate({KU_Username: req.params.usid},req.body).then(function(updatedArt){
    KUserModel.findOne({_id: req.params.usid}).then(function(updatedArt){
      res.send(updatedArt);
    }).catch(next);
  }).catch(next);

});

// delete an art in the db
router.delete('/art/:id', function(req, res){
  console.log('DELETE api/art request');
  console.log('params: usid = ' + req.params.usid);
  ClientModel.findByIdAndRemove({KU_Username: req.params.usid}).then(function(deletedArt){
    res.send(deletedArt);
  }).catch(next);

});

module.exports = router;
