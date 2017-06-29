const router = require('express').Router();

//for handling the GET request on 'localhost:2345/'
/*
	localhost:2345/ is same as writing localhost:2345. The browser automatically routerends a "/" if there isn't any
*/
router.get('/', function(req, res){
	res.send('The GET Request on "/" has been handled by the server.');
})

//for handling the GET request on 'localhost:2345/api'
router.get('/api', function(req, res){
	res.send('The GET Request on "/api" has been handled by the server.');
})

router.get('/api/route1', function(req, res){
	res.send('The GET Request on "/api/route1" has been handled by the server.');
})

router.get('/api/route2', function(req, res){
	res.send('The GET Request on "/api/route2" has been handled by the server.');
})

router.get('/api/route3', function(req, res){
	res.send('The GET Request on "/api/route3" has been handled by the server.');
})

router.get('/basic1', function(req, res){
	res.send('The GET Request on "/basic1" has been handled by the server.');
})

router.get('/basic2', function(req, res){
	res.send('The GET Request on "/basic2" has been handled by the server.');
})

router.get('/basic3', function(req, res){
	res.send('The GET Request on "/basic3" has been handled by the server.');
})


router.post('/', function(req, res){

	console.log(req.body);
	var username = req.body.username;
	var password = req.body.password;

	res.send("The username is: " + username + " and the password is: " + password);

})

module.exports = router;