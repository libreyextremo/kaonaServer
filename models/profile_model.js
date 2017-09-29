const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const KProfileModelSchema = new Schema({
  KP_Username: {type: String, required: [true, 'User name field is required'] },
  KP_Password: {type: String, required: [true, 'Password field is required'] },
  KP_Address: String,
  KP_Email: {type: mongoose.SchemaTypes.Email, required: [true, 'Email is required'] },
  KP_Phone: String,
  KP_ID_Pass_Recovery: String
});

// set relation between KProfileModelSchema and clientmodel
const KProfileModel= mongoose.model('kprofile', KProfileModelSchema);

module.exports = KProfileModel;
