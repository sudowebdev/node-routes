const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));



app.use('/', express.static(__dirname + '/static'));


//for handling the GET request on 'localhost:2345/'
/*
	localhost:2345/ is same as writing localhost:2345. The browser automatically appends a "/" if there isn't any
*/
app.get('/', function(req, res){
	res.send('The GET Request on "/" has been handled by the server.');
})

//for handling the GET request on 'localhost:2345/api'
app.get('/api', function(req, res){
	res.send('The GET Request on "/api" has been handled by the server.');
})

app.get('/api/route1', function(req, res){
	res.send('The GET Request on "/api/route1" has been handled by the server.');
})

app.get('/api/route2', function(req, res){
	res.send('The GET Request on "/api/route2" has been handled by the server.');
})

app.get('/api/route3', function(req, res){
	res.send('The GET Request on "/api/route3" has been handled by the server.');
})

app.get('/basic1', function(req, res){
	res.send('The GET Request on "/basic1" has been handled by the server.');	
})

app.get('/basic2', function(req, res){
	res.send('The GET Request on "/basic2" has been handled by the server.');	
})

app.get('/basic3', function(req, res){
	res.send('The GET Request on "/basic3" has been handled by the server.');	
})

app.post('/', function(req, res){

	console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;

	res.send("The username is: " + username + " and the password is: " + password);

})

app.listen(2345, function(){
	console.log('Listening to port 2345');
})