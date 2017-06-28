const express = require('express');
const app = express();

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

app.listen(2345, function(){
	console.log('Listening to port 2345');
})