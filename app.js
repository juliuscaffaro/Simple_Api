var express = require('express');
var app = express();
var db = require('./db'); //calling the db.js I created

var UserController = require('./user/UserController');
app.use('/users', UserController)

//We use module.exports to make this app object visible to the rest of the program when we call for it using require().
module.exports = app;