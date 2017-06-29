const router = require('express').Router();

//for handling the GET request on 'localhost:2345/api'
router.get('/', function(req, res){
	res.send('The GET Request on "/api" has been handled by the server.');
})

router.get('/route1', function(req, res){
	res.send('The GET Request on "/api/route1" has been handled by the server.');
})

router.get('/route2', function(req, res){
	res.send('The GET Request on "/api/route2" has been handled by the server.');
})

router.get('/route3', function(req, res){
	res.send('The GET Request on "/api/route3" has been handled by the server.');
})

module.exports = router;