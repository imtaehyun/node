var fs = require("fs");
console.log("Started");
var config = JSON.parse(fs.readFileSync("../files/config.json"));
console.log("Initial config: ", config);

// fs.watchFile은 특정 파일을 관찰하는 Method, 파일의 내용이 변경되면 callback listener가 동작한다.
fs.watchFile("../files/config.json", function(current, previous) {
    console.log("Config changed" + current.mtime + " to " + previous.mtime);
    config = JSON.parse(fs.readFileSync("../files/config.json"));
    console.log("New config file: ", config);
});