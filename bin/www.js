//bootstrapping the application

var app = require('../app'); //Require our app



var server = app.listen(8000, function() {
	console.log('Express server listening on port ' + server.address().port);
});