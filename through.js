"use strict";

var transform = require("stream").Transform;

class throughClass extends transform{
    constructor(opt){
        super(opt);
    }
}


function through(callback) {
    return function (opt,callbacks) {
        if(typeof opt == "function"){
            callbacks = opt;
            opt = {};
        }
        return callback(opt,callbacks);
    };
}

module.exports = through(function (opt,callbacks) {
    var transformobj = new throughClass(opt);
    transformobj._transform = callbacks;
    return transformobj;
});
module.exports.obj = through(function (opt,callbacks) {
    var transformobj = new throughClass({objectMode:true});
    transformobj._transform = callbacks;
    return transformobj;
});
module.exports.read = through(function (opt,callbacks) {
    var transformobj = new throughClass();
    transformobj._read = callbacks;
    return transformobj;
});
module.exports.readObj = through(function (opt,callbacks) {
    var transformobj = new throughClass({objectMode:true});
    transformobj._read = callbacks;
    return transformobj;
});
module.exports.write = through(function (opt,callbacks) {
    var transformobj = new throughClass();
    transformobj._write = callbacks;
    return transformobj;
});
module.exports.writeObj = through(function (opt,callbacks) {
    var transformobj = new throughClass({objectMode:true});
    transformobj._write = callbacks;
    return transformobj;
});