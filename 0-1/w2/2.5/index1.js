const express=require("express");

const app =express();


function sum(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans+=i;
    }
    return ans ;
}

//req and res => request and response
app.get('/',function(req,res){
    const n=req.query.n;
    const ans=sum(n);
    res.send("hi there Your ans is "+ ans);
})
app.listen(3001,console.log("running on 3001"));


/*
 WHAT is a REQUEST methods?

 1.GET-> Going for a consultation to get a checkup ..like asking sum till 100
 2.POST->Going to get a new kidney inserted ..instagram post similiar 
 3.PUT-> Going to get a Kidney replaced 
 4.DELETE-> Going to get a Kidney removed 

Status Codes -->
1.
2.
3.
4.
*/