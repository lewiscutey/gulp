var through=require("./through");

module.exports=(function(){
    return function(){
        return through.obj(function(a,b,c){
            a.content=a.content.toString().toUpperCase();
            this.push(a);
            c();

        })
    }
})();
