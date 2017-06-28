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


## Step 3: Add POST Request handler in server.js

#### What are POST Requests?
A POST request is similar to a GET request. The difference is that any additional information is sent in the body of the request, rather than as part of the URI. You can generate POST requests using <form method="post"> elements in HTML, where the form field values are sent in the request body.


For handling POST requests, you need to first install "body-parser" package.
Simply, run the following command in your terminal:
	
	npm install --save body-parser

Q. What does the body-parser do?
A. body-parser, acting as a middleware, extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with . Yeah! you can do it by yourself as well but using body-parser will do what is required and will save your trouble.
If you want to go into somewhat detail: https://stackoverflow.com/a/38322792/5733330

	app.use(bodyParser.urlencoded({extended: true}));
bodyParser.urlencoded(): Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body.

Q. What is the functionality of "extended"?
A. A new body object containing the parsed data is populated on the request object after the 
middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a 
string or array (when extended is false), or any type (when extended is true).

-> Make a new folder (in the root directory) called "static"

	//Telling the browser to serve the "static" folder onto "/" url i.e. on "localhost:2345/"
	app.use('/', express.static(__dirname + '/static'));

-> Create an index.html file inside it, which will be used to send a POST request to the server.

	<!DOCTYPE html>
	<html>
	<head>
		<title>Post Data Form</title>
	</head>
	<body>

	<form action="/" method="post">
		<input type="text" name="username" placeholder="Username..." />
		<input type="password" name="password" placeholder="Password..." />
		<input type="submit" value="Submit" />
	</form>

	</body>
	</html>

Here, the **name** attribute of the input will be used to identify which value points to which field.
The **action** attribute of the form specifies where you want to send the request whereas the 
**method** attribute tells what type of request you want to send i.e. POST, PUT, etc..

Now, it is time to add logic to our **server.js** file which will serve this request.

server.js (Only the additions to the earlier version)

	const bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({extended: true}));

	app.use('/', express.static(__dirname + '/static'));
	
	app.post('/', function(req, res){

		console.log(req.body);
		/*
		req.body is equal to {username: "username you typed", password: "password you typed"}
		Check your terminal for verification
		*/

		var username = req.body.username;
		/*
		the key of the object in req.body gets derived from the "name" attribute of the corresponding input field in the HTML form.
		<input type="text" name="username" placeholder="Username..." />
		*/
		
		var password = req.body.password;

		res.send("The username is: " + username + " and the password is: " + password);

	})


For a more detailed example: https://codeforgeek.com/2014/09/handle-get-post-request-express-4/

