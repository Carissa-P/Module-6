// Entry point for the application

// express application
var express = require('express');
// require the controller we make
var surveyController = require('./surveyController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static file serving
app.use(express.static('./public'));

// fire function from surveyController
surveyController(app);

//reference: https://stackoverflow.com/questions/32646651/cannot-get-image-on-localhost
app.use(express.static('/Users/carissapemesar/Desktop/lab6/views'));

// listen to port
app.listen(3000);
console.log('listening port 3000');
