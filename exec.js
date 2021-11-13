const cp = require("child_process");

cp.exec("node -v", (err, data, stderr)=>{
    if(err){
        console.log(stderr);
    }
    else{
        console.log(data);
    }
    
});