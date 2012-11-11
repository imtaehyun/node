var http = require("http");
var fs = require("fs");
console.log("Starting");
//var config = fs.readFileSync("config.json");
var host = process.env.IP;
var port = process.env.PORT;
console.log("Config analyzed : " + host + ":" + port);

var server = http.createServer(function(req, res) {
    console.log("Received request: " + req.url);
    fs.readFile("./public" + req.url, function(err, data) {
        console.log("readFile");
        if (err) {
            console.log("read err");
            res.writeHead(404, {"Content-type":"text/plain"});
            res.end("Sorry! The file was not found!");
        } else {
            console.log("read ok");
            res.writeHead(200, {"Content-type":"text/html"});
            res.end(data);
        }
    });
});

server.listen(port, host, function() {
    console.log("Listening from " + host + ":" + port);
});