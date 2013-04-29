var http = require('http');

function req_handler(req, res) {
	console.log("you called?\n");
	var body = "Hey, Thanks for calling";
	var content_length = body.length;
	res.writeHead(200, {
		'Content-Type': "text/plain",
		'Content-Length': content_length
	});
	res.end(body);
}
var server = http.createServer(req_handler);
server.listen(8080);