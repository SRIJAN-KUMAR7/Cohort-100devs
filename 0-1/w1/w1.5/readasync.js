const  fs= require("fs");
//filesystem module  

fs.readFileSync("a.txt","utf-8",function(err,data){
    if(err){
        console.log("try next time");
        return;
    }
    console.log(data);
})

// not able to runthis code 