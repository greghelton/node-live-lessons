var fs = require('fs');
var fd;

fs.open('test.data', 'r', function(err, handle) {
	fd = handle;
	var b = new Buffer(10000);
	fs.read(fd, b, 0, 10000, null, function(err, bytes_read) {
		console.log(b.toString("utf8", 0, bytes_read));
		fs.close(fd);
	});
});