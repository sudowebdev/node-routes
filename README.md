# Routes in NodeJS

## Step 1: Create Basic Express App

Initialise NPM module and Install Express

	npm init
	npm install --save express 

Content of server.js

	const express = require('express');
	const app = express();
	
	app.listen(2345, function(){
		console.log('Listening to port 2345');
	})	


## Step 2: Add GET Request handlers in server.js

#### What are GET Requests?
An HTTP GET request is what you get when you enter a URI in your browser or when you click on a link on a web page. Certain HTML elements, like <img> also generate GET requests. GET requests a resource (usually a web page or an image) from the server. You can pass additional information to a server-side script by adding 'query parameters' after the script, such as http://example.com?q=42332.

Content of server.js (Additions to the earlier version)


	
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




