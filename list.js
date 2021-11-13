const fs = require("fs");

console.log("Started reading files");
fs.readdir("./", (err, files)=>{
    if(err){throw err;}
    console.log(files);
})