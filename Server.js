var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response){
    // Parse te request containing file name
    var pathname = url.parse(request.url).pathname;

    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    // Read the request firl content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if( err) {
            console.log(err);
            //HTTP Status: 404 : NOT FOUND
            // Context Type: Text/Plain
            response.writeHead(404, {'Content-Type': 'text/html'});
            }else{
                //Page found
                // HTP Status: 200 : OK
                // Content Type: text/plain
                response.writeHead(200, {'Content-Type': 'text/html'});

                // Write the conent of the file to response body
                response.write(data.toString());
            }
            // Send the resonse body
            response.end()
    });
}).listen(8081);
