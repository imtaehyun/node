var fs =require("fs");
console.log("Starting");
var contents = fs.readFileSync("../files/config.json");
console.log("Contents : " + contents);

// JSON.parse(String)는 json형태의 String을 javascript 객체로 바꿔준다.
var config = JSON.parse(contents);
console.log("Config: ", config);
console.log("Username: ", config.username);

// Execute here