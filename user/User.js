var mongoose = require('mongoose');

//Here, i`m specifying a schema for a User
var UserSchema = new mongoose.Schema({
    nome : String,
    email : String,
    foto : String
});
//Here, i`m attributing to the model User, the schema UserSchema
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

