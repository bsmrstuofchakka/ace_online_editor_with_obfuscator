// Require Filesystem module
var fs = require("fs");
// require the obfuscator module
var JavaScriptObfuscator= require('javascript-obfuscator');
// read the file of your original javascript code as text
fs.readFile('./mycode.js',"UTF-8", function (err, data) {
    if (err){
        throw err;
    }
    // obfuscate content of the js file
    var obfuscatorResult= JavaScriptObfuscator.obfuscate(data);
    // write the obfuscated code into a new file
    fs.writeFile('./mycode-obfuscated.js', obfuscatorResult.getObfuscatedCode(), function (err) {
        if (err){
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});