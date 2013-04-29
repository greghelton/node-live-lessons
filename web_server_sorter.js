var http = require('http');

var nameSorter = function(names) {
	names.sort(function (a,b) {
		var a1 = a.toLowerCase();
		var b1 = b.toLowerCase();
		if (a1 < b1) return -1;
		if (a1 > b1) return 1;
		return 0;
	});

	var rv = '';
	function addToResults( val, index, arr) { rv += val + ' '; }
	names.forEach(addToResults);
	return rv;
} 

function req_handler(req, res) {
	var names = ['Holly', 'Tim', 'Anand', 'greg', 'asad', 'natalie', 'ernie'];
	var body = nameSorter( names ) + '\n';
	var content_length = body.length;
	res.writeHead(200, {
		'Content-Type': "text/plain",
		'Content-Length': content_length
	});
	res.end(body);
}
var server = http.createServer(req_handler);
server.listen(8080);