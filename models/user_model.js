const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtType = ["Ceramic Art","Digital Art", "Drawing", "Glass Art","Jewelry",
  "Mixed Media","Painting","Pastel","Photograph","Pyrograph","Relief",
  "Sculpture","Street Art", "Tapestry - Textile"];

const UserType = ["Art Lover", "Art Dealer", "Artist", "Art Shop",
  "Art Exhibition", "Art Gallery", "Art Museum"];

// Create Schema and model
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
}); // use GeoJson

const KArtWorkModelSchema = new Schema({
  KA_Author: {type: String, required: [true, 'Author field is required'] },
  KA_Title: {type: String, required: [true, 'Title field is required'] },
  KA_Type: {type: ArtType, required: [true, 'Type of work of art field is required'] },
  KA_Description: String,
  KA_Register_Date: {type: Date, default: Date.now },
  KA_For_Sale: {type: Boolean, required: [true, 'For sale field is required'] },
  KA_Price: {type: Number, required: [true, 'Price field is required'] },
  KA_Address: String,
  KA_Geometry: GeoSchema,
  KA_ImagesList: [{type: String}]
});

const KUserModelSchema = new Schema({
  KU_Username: {type: String, required: [true, 'User name field is required'] },
  KU_Name: {type: String, required: [true, 'Name field is required'] },
  KU_Surname: {type: String, required: [true, 'Surname field is required'] },
  KU_DescriptionBio: String,
  KU_Type : {type: UserType, required: [true, 'User type is required'] },
  KU_ArtWorkList: [KArtWorkModelSchema]
});

// set relation between KUserModelSchema and clientmodel
const KUserModel= mongoose.model('kusers', KUserModelSchema);

module.exports = KUserModel;
