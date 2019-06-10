var static = require('node-static');

var file = new static.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(req, res, function (e, res) {
            if (e && (e.status === 404)) { // If the file wasn't found
                fileServer.serveFile('/not-found.html', 404, {}, request, response);
            }
        });
    }).resume();
}).listen(8086);