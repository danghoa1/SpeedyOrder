// Include modules
var express = require('express');	// eases http request/response management
var fs = require('fs');				// allows file read/write
var router = require('./router');

// Create a HTTP server
var app = express(express.logger());


// Serve files to client
app.configure(function () {
	app.use('/bootstrap', express.static(__dirname + '/bootstrap'));
  	app.use('/css', express.static(__dirname + '/css'));
  	app.use('/js', express.static(__dirname + '/js'));
  	app.use('/html', express.static(__dirname + '/html'));
  	app.use('/img', express.static(__dirname + '/img'));
  	
});

// HTTP request Router (pick the right html)
app.get('/', router.home);
app.get('/products', router.products);
app.get('/pricing', router.pricing);
app.get('/faq', router.faq);
app.get('/contactus', router.contactus);


// Listen to a port
var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening to port " + port);
});