var fs = require("fs");
var express = require("express");
var host = "127.0.0.1";
var port = 8080;

var app = express();

app.get("/", function(req, res) {
    res.send("hello world!");
});

app.listen(port, host);