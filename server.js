var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//serve static resources in dev environment
app.use('/vendor', express.static(__dirname + '/node_modules'));
app.use('/assets', express.static(__dirname + '/dev/assets'));
app.use('/partials', express.static(__dirname + '/dev/partials'));

//serve index page in dev environment
app.get('/*', function(req, res, next){
	res.sendFile(__dirname + '/index.html');
});

app.listen(4040, function(){
	console.log('serving at http://localhost:4040/');
})
