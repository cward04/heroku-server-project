var express = require('express');
var app = express();

/* Format
app.HTTP_VERB('ROUTE_NAME', function(request, response) {
	// do something...
	// Send response back via `response.send();`
});
*/

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/redline/schedule.json', function(req, res) {
	res.send("Sup Wit it");
});

app.post('/redline/schedule.json', function(req, res){
	// Handle the post
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 8888);