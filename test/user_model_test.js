const mocha = require('mocha');
const assert = require('assert');
const KUserModel = require('../models/user_model');

//describe user model tests
describe('User collection tests', function(){

  //tests
  it('Mocha works', function(){
    assert('Ok' === 'Ok');
  });

  // saving a record in kusers collection
  it('Saving a record in kusers collection', function(done) {

    var userRecord = new KUserModel({
      KU_Username: 'barackobama',
      KU_Password: 'iamacrack',
      KU_Name: 'Barack',
      KU_Surname: 'Obama',
      KU_Address: '1600 Pennsylvania Ave NW, Washington, DC 20500, EE. UU',
      KU_DescriptionBio: 'I am an American politician who served as the 44th President of the United States from 2009 to 2017. I previously served in the U.S. Senate representing Illinois from 2005 to 2008 and in the Illinois State Senate from 1997 to 2004.',
      KU_Type : 'Art Lover',
      KU_Email: 'barackobama@whitehouse.usa',
      KU_Phone: '',
      KU_ID_Pass_Recovery: '',
      KU_ArtWorkList: [
        {
          KA_Author: 'Barack Obama',
          KA_Title: 'Portrait of Michelle Obama',
          KA_Type: 'Photograph',
          KA_Description: 'Portrait Of Michelle Obama photograph.',
          KA_Register_Date: '02/02/2017',
          KA_For_Sale: true,
          KA_Price: 49.99,
          KA_Address: '1600 Pennsylvania Ave NW, Washington, DC 20500, EE. UU',
          KA_Geometry: [38.8976805,-77.0387185],
          KA_ImagesList: [
            'http://images.huffingtonpost.com/2009-03-02-michelleportrait.jpg',
            'http://maristpoll.marist.edu/wp-content/uploads/2009/03/obama_mich_better_290.jpg'
          ]
        },
        {
          KA_Author: 'Barack Obama',
          KA_Title: 'Monument of whasington',
          KA_Type: 'Photograph',
          KA_Description: 'Picture of Monument of Washington.',
          KA_Register_Date: '02/02/2017',
          KA_For_Sale: true,
          KA_Price: 354.99,
          KA_Address: '1600 Pennsylvania Ave NW, Washington, DC 20500, EE. UU',
          KA_Geometry: [38.8976805,-77.0387185],
          KA_ImagesList: [
            'https://upload.wikimedia.org/wikipedia/commons/c/c1/Washington_Monument_Dusk_Jan_2006.jpg'
          ]
        }
      ]
    });

    userRecord.save().then(function() {
      assert(userRecord.isNew === false);
      done();
    });

  });


});
