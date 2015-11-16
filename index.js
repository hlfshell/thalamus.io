require('dotenv').load();

var app = require('express')();
var WebSocket = require('ws');
app.ws = new WebSocket('ws://localhost:' + process.env.SOCKET_PORT);
app.devices = {}
app.secretKey = process.env.SECRET_KEY

app.all(
	//The route
	"/:deviceId/",
	
	//Authentication
	function(req, res, next){
		if(req.headers['authorization-key'] == app.secretKey) next();
		else res.status(403).end();
	},
	//Device finding
	function(req, res, next){
		if(!app.devices[req.params.deviceId]) res.status(404).end();
		else next();
	},
	//Pass the message through
	function(req, res){
		app.ws.send(req.body, )
	}
);

//Handle device connection
app.ws.on("open", function(){
	//Identify the devices and authentication here
});