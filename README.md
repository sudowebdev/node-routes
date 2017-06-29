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
An HTTP GET request is what you get when you enter a URI in your browser or when you click on a link on a web page. Certain HTML elements, like img also generate GET requests. GET requests a resource (usually a web page or an image) from the server. You can pass additional information to a server-side script by adding 'query parameters' after the script, such as http://example.com?q=42332.

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
A POST request is similar to a GET request. The difference is that any additional information is sent in the body of the request, rather than as part of the URI. You can generate POST requests using form elements in HTML, where the form field values are sent in the request body.


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


## Step 4: Using POSTMAN

As a back-end developer, it is not in our forte to create an interface (for example form), which will  
eventually be used to make a POST request. And, we cannot make POST requests directly in the browser  
as in we cannot pass the "body" of the POST request in the browser by itself. 

Thus to solve the above problems, we make use of a testing tool, popularly known as POSTMAN.
As the name says, it is made for testing out POST requests that are otherwise not possible without 
creating a form. 

#### POST request in POSTMAN
The process is extremely simple.

1. First enter the request URL, on which to send the POST request. 
	Which in this case is: http://localhost:2345
2. Select the POST method (just to the left of request URL).
3. Open the "body" tab (just below the request URL).
4. Choose "x-www-form-urlencoded" as this is the type in which browsers send the form data.
5. Enter key and value pairs. 
	In this case they are:

	| key           | value      |
	|:-------------:| -----:     |
	| username      | user123    |
	| password      | pass123    |


#### Making GET, PUT, DELETE requests in POSTMAN
> The process of making other types of requests i.e. GET, PUT, DELETE is exactly the same.  
The only thing that needs to be kept in mind is that the GET request is the only request that doesn't  
have a body in itself. All other requests ie. POST, PUT, DELETE have a "body" field in the request.  
Just like POST request discussed above.


## Step 5: Modularizing the routes (Part 1)

Now is the time to modularize our work, to make it more organizable and manageable.  
Modularizing is often one of the key steps when you are working on a big project having multitude of files.

So, as our first step, we will be adding some more GET requests, to expand our project a bit.

Go to server.js and add these lines of codes below the earlier GET requests:

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

Now you can start your server and check the results by opening:  
-> localhost:2345/basic1  
-> localhost:2345/basic2  
-> localhost:2345/basic3  
-> localhost:2345/api/route1  
-> localhost:2345/api/route2  
-> localhost:2345/api/route3  


## Step 6: Modularizing the routes (Part 2)  

Now, we have everything set-up. So let's modularize the routes that we have.  

###### The Steps:  
1. Create a folder **routes** in your root directory.  
2. Create a new file **index.js** in it.  
3. Require "router" at the top to use the functionality of router in Node.js  
	const router = require('express').Router();  
4. Move all the routes in server.js to index.js (**replace app with router**, since we created the route with the name of **router** in index.js (see Step 6 [here](https://github.com/sudowebdev/node-routes/commits/master) to see the modifications))  
5. Export the router that we have made in index.js with:  
	module.exports = router 
6. Finally, require that **router** in server.js and use it:  
	const basicRouter = require('./routes/index.js');
	app.use('/', basicRouter);  

**P.S.** One thing here to keep in mind is that we are using *app.use* and *not app.get* since we are  
using a middleware to direct the routes to another place.  

Q. What is a middleware?  
A. Middleware is any number of functions that are invoked by the Express.js routing layer before your final request handler is, and thus sits in the middle between a raw request and the final intended route.  
For a more detailed answer: https://www.safaribooksonline.com/blog/2014/03/10/express-js-middleware-demystified/  

###### Please refer to the [COMMITS](https://github.com/sudowebdev/node-routes/commits/master) section above to see the additions in the code to get a more clear understanding of what is happening. 
