var mygulp = require("./main");
var up=require("./up");
mygulp.src("./index.js").pipe(up()).pipe(mygulp.dest("./mygulp/aa.js"));

