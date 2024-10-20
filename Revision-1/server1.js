var fs = require("fs");
var os = require("os");
var _ = require("lodash");

// os se huum ape operating system vaae se connect kar sakte hai
console.log(os.userInfo());

// fs se hum koi bhi create kar sakte hai apne vs code ke andar
// usko edit bhi kar sakte hai
fs.appendFile("greeting.txt", "Hi" + os.userInfo().username + "!", () => {
  console.log("File is created");
});

var data = ["person", "person", 1, 2, 1, 2, "name", "name", "age"];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString("string"));
