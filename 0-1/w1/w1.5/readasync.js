const  fs= require("fs");
//filesystem module  

fs.readFileSync("a.txt","utf-8",function(err,data){
    if(err){
        console.log("try next time");
        return;
    }
    console.log(data);
})

// // here we go again
//  done in replit 

const fs=require('fs');

fs.readFile("a.txt","utf-8",function(err,data){
    
        console.log(data);
    }
)
console.log("hi sexi")

//output:
// hi sexi 
// hi there this is srijan using file systems for the first time baby


//to understand the architechture can go latentflip.loupe
//after the thread is free it checks the call back queue and send to call stacks
//image as Screenshot 
