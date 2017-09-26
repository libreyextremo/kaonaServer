const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const KProfileModelSchema = new Schema({
  KU_Username: {type: String, required: [true, 'User name field is required'] },
  KU_Password: {type: String, required: [true, 'Password field is required'] },
  KU_Address: String,
  KU_Email: {type: mongoose.SchemaTypes.Email, required: [true, 'Email is required'] },
  KU_Phone: String,
  KU_ID_Pass_Recovery: String
});

// set relation between KProfileModelSchema and clientmodel
const KProfileModel= mongoose.model('kprofile', KProfileModelSchema);

module.exports = KProfileModel;
