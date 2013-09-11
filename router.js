exports.home = function(req, res) {
	res.sendfile(__dirname + '/html/index.html');
};

exports.products = function(req, res) {
	res.sendfile(__dirname + '/html/products.html');
};

exports.pricing = function(req, res) {
	res.sendfile(__dirname + '/html/pricing.html');
};

exports.faq = function(req, res) {
	res.sendfile(__dirname + '/html/faq.html');
};

exports.contactus = function(req, res) {
	res.sendfile(__dirname + '/html/contactus.html');
};