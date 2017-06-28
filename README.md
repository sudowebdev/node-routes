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