/* a slight better way to write the same code using functions wrappers
 */
//* we will make use of middle wares to do all these prechecks  */

const express = require("express");
const app = express();  
// middleware to check authentication
// bu twe can pass as many callback functions to this 
// app.get('/',function cb1(){},
// function(req,res){

// })

// this works 
/*
app.get('/',function(req,res){console.log("hi there from req1")},
function(req,res,next){ //next is in itself a function if everything is fine then it is called and this chain of functions is executed
console.log("hi there from req2")
next()
})
app.listen(3001,function(){
    console.log("app running on 3001")
})
*/


//defining middlewares
function userMiddleware(req,res,next){
    const username=req.query.username;
    const password=req.query.password;
    if(username!="srijan" || password!="pass"){
        res.status(403).json({
            msg:"User doesnot exist",
        });
    }
    else{
        next();
    }   
}

function kidneyMiddleware(req,res,next){
    const kidneyId=parseInt(req.query.kidneyId);
    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg:"Wrong inputs",
        })
    }
    else{
        next();
    }   
}

app.get('/health-checkup',userMiddleware,kidneyMiddleware,function(req,res){
    //do something you want after all the prechecks 
    res.send('your kidney is good bro')
});

app.listen(3001,()=>{
    console.log(" app on 3001")
})