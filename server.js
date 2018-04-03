var app = require('./app');

var port = process.env.PORT || 3000; //Se process.env.PORT nao estiver definido, escute na porta 3000

var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});