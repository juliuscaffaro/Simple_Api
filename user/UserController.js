var express = require('express'); //calling the express module
var router = express.Router(); //creating a route
var bodyParser = require('body-parser'); //calling the body-parser module
router.use(bodyParser.urlencoded({extended : true})); //I don`t know what is happening
router.use(bodyParser.json()); //I don`t know what is happening


var User = require('./User'); //because I exported the User, I can use it here



router.post('/', function(req, res){
    console.log('Solving post');
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }, function(err, user){ //the user is populated with the success
        if(err) return res.status(500).send("There was an error and se vira");
        console.log(user);
        return res.status(200).send(user);
    });
});

router.get('/', function(req, res){
    console.log('Entrando no metodo get');
    User.find({}, function(err, users){ //the users is populated with the success (the query in the db)
        if(err) return res.status(500).send("There was an error and se vira");
        return res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user){
        if(err) res.status(500).send('Deu erro, prego');
        res.status(200).send('User ' + user.name + " deleted");
    })
})

router.put('/:id', function(req, res){
    console.log(res);
    User.findByIdAndUpdate(req.params.id, req.body, {new : true}, function(err, user){
        if(err) res.status(500).send('deu ruim');
        res.status(200).send('User ' + user.name + ' Updated');
    })
});

module.exports = router;