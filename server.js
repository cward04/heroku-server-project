var express = require('express');
var app = express();
var request = require('request');

app.use('/redline/schedule.json', function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/redline/schedule.json', function(req, res, next) {
	
	if(req.query['stop_id'] != null){

		if(req.query.stop_id == 'place-alfcl'){
			
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-alfcl&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})
		}
		else if(req.query.stop_id == 'place-davis'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-davis&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})
		}
		else if(req.query.stop_id == 'place-portr'){
						request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-portr&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})
		}
		else if(req.query.stop_id == 'place-harsq'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-harsq&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-cntsq'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-cntsq&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-knncl'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-knncl&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-chmnl'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-chmnl&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-pktrm'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-pktrm&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-dwnxg'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-dwnxg&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-sstat'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-sstat&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-brdwy'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-brdwy&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-andrw'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-andrw&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-jfk'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-jfk&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-nqncy'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-nqncy&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-wlsta'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-wlsta&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-qnctr'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-qnctr&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-qamnl'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-qamnl&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-brntn'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-brntn&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-shmnl'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-shmnl&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-fldcr'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-fldcr&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-smmnl'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-smmnl&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else if(req.query.stop_id == 'place-asmnl'){
			request({
				url: "https://api-v3.mbta.com/predictions?filter[route]=Red&filter[stop]=place-asmnl&page[limit]=10&sort=departure_time"
			}, function(error, response, body){

				if(!error && response.statusCode === 200){
					return res.send(body);
				}
				else{
					return res.send("Sorry, could not send data");
					
				}
			})		}
		else{
			res.send(JSON.stringify({"errors": "No such stop_id exist"}));
		}
	}

	else{
		res.send(JSON.stringify({"errors":"No stop_id provided"}));
	}
});

app.listen(process.env.PORT || 8888);