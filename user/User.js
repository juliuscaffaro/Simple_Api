var mongoose = require('mongoose');

//Here, i`m specifying a schema for a User
var UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});
//Here, i`m attributing to the model User, the schema UserSchema
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

