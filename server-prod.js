//server for production environment
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//serve static resources in dev environment
app.use('/vendor', express.static(__dirname + '/node_modules'));
app.use('/assets', express.static(__dirname + '/prod/assets'));
app.use('/partials', express.static(__dirname + '/prod/partials'));

//serve index page in dev environment
//IMPORTANT: do not add routes after this 
app.get('/*', function(req, res, next){
	res.sendFile(__dirname + '/prod/index.html');
});

app.listen(4000, function(){
	console.log('serving at http://localhost:4000/');
})
