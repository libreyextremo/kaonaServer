const mocha = require('mocha');
const assert = require('assert');
const KProfileModel = require('../models/profile_model');
const KUserModel = require('../models/user_model');

//describe user model tests
describe('User collection tests', function(){

  //tests
  it('Mocha works', function(){
    assert('Ok' === 'Ok');
  });

  // saving a record in kusers and kprofiles collection
  it('Saving a record in kusers and kprofiles collections', function(done) {

    var profileRecord1 = new KProfileModel({
      KP_Username: 'barackobama',
      KP_Password: 'iambarack',
      KP_Address: '1600 Pennsylvania Ave NW, Washington, DC 20500, EE. UU',
      KP_Email: 'barackobama@whitehouse.usa',
      KP_Phone: '',
      KP_ID_Pass_Recovery: ''
    });

    var profileRecord2 = new KProfileModel({
      KP_Username: 'theresamay',
      KP_Password: 'unitedkingdom',
      KP_Address: '11 Downing Street, Westminster, London, SW1A 2AB, United Kingdom',
      KP_Email: 'theresamay@unitedkingdom.uk',
      KP_Phone: '',
      KP_ID_Pass_Recovery: ''
    });

    var userRecord1 = new KUserModel({
      KU_Username: 'barackobama',
      KU_Name: 'Barack',
      KU_Surname: 'Obama',
      KU_DescriptionBio: 'I am an American politician who served as the 44th President of the United States from 2009 to 2017. I previously served in the U.S. Senate representing Illinois from 2005 to 2008 and in the Illinois State Senate from 1997 to 2004.',
      KU_Type : 'Art Lover',
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
          KA_Register_Date: '02/03/2017',
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

    var userRecord2 = new KUserModel({
      KU_Username: 'theresamay',
      KU_Name: 'Theresa',
      KU_Surname: 'May',
      KU_DescriptionBio: 'I am a British politician who has served as Prime Minister of the United Kingdom and Leader of the Conservative Party since 2016, the second woman to hold both positions, the first being Margaret Thatcher.',
      KU_Type : 'Art Lover',
      KU_ArtWorkList: [
        {
          KA_Author: 'Picasso',
          KA_Title: 'Acrobat',
          KA_Type: 'Painting',
          KA_Description: 'This painting shows off the spontaneous agility of the acrobat s body.',
          KA_Register_Date: '10/01/2017',
          KA_For_Sale: false,
          KA_Price: 0.00,
          KA_Address: '11 Downing Street, Westminster, London, SW1A 2AB, United Kingdom',
          KA_Geometry: [51.5033644,-0.1299782],
          KA_ImagesList: [
            'https://cdn-s3.touchofmodern.com/products/000/057/183/78fe98c447570b781a9b8e35dded0941_large.jpg?1382739119',
            'http://imgc.artprintimages.com/img/print/print/pablo-picasso-the-acrobat-c-1930_a-l-915290-0.jpg?w=550&h=550',
            'https://www.dhresource.com/0x0s/f2-albu-g3-M01-8D-39-rBVaHFQ48KSABncFAAFLkY8X0_o079.jpg/the-acrobat-1930-by-pablo-picasso-painting.jpg'
          ]
        },
        {
          KA_Author: 'Picasso',
          KA_Title: 'Asleep',
          KA_Type: 'Painting',
          KA_Description: 'The model of this painting, Asleeep, painted in 1932, is Picasso s mistress Marie Therese..',
          KA_Register_Date: '12/09/2016',
          KA_For_Sale: true,
          KA_Price: 9050000.99,
          KA_Address: '11 Downing Street, Westminster, London, SW1A 2AB, United Kingdom',
          KA_Geometry: [51.5033644,-0.1299782],
          KA_ImagesList: [
            'https://dg19s6hp6ufoh.cloudfront.net/pictures/612562695/large/asleep-picasso.jpeg?1425181349'
          ]
        }
      ]
    });

    profileRecord1.save().then(function() {
      assert(profileRecord1.isNew === false);
      profileRecord2.save().then(function() {
        assert(profileRecord2.isNew === false);
        userRecord1.save().then(function() {
          assert(userRecord1.isNew === false);
          userRecord2.save().then(function() {
            assert(userRecord2.isNew === false);
            done();
          });
        });
      });
    });

  });

});
