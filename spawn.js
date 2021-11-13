const cp = require("child_process");

const questionApp = cp.spawn("node", ["question.js"]);

questionApp.stdin.write("Alex \n");
questionApp.stdin.write("Tahoe \n");
questionApp.stdin.write("Change the world \n");

questionApp.stdout.on("data", data =>{
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () =>{
    console.log(`question app exited.`);
});