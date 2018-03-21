var express = require("express");
var app = express();

app.use(function(req, res, next) {
	console.log("Middleware");
	next();
});

app.get("/", function(req, res) {
	res.send("Hello world");
});

app.get("/store", function(req, res) {
	res.send("This is the store");
});

app.listen(3000);

app.use(function(req, res, next) {
	res.status(404).send("Sorry, We fuc*ed up or you're asking for too much...");
});
