const { error } = require("console")
var fs = require("fs")

fs.readFile('welcome.txt', function(err,data){
    if (err) {
        return err(error);
    }
    console.log(data.toString());
})