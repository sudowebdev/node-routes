const express = require('express');
const bodyParser = require('body-parser');
const basicRouter = require('./routes');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname + '/static'));
app.use('/', basicRouter);


app.listen(2345, function(){
	console.log('Listening to port 2345');
})