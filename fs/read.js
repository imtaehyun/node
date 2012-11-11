var fs = require("fs");
console.log("Starting");

// Async version read
//fs.readFile("../files/sample.txt", function(error, data) {
//    console.log("Contents : " + data);    
//});

// Sync version read
var content = fs.readFileSync("../files/sample.txt");
console.log("Contents : " + content);

console.log("Carry on executing");