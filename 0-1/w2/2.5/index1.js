const express=require("express");

const app =express();

app.get('/',function(req,res){
    console.log("hi there")
})
app.listen(3001);
