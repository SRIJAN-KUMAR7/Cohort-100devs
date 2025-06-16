//Middlewares.....Authentication..Global catches, zod 
//hard topics in backend 

/*
Middle wares ->


example-->
Hospital (covid time)
 Before  you reach the doctor 
1. Your adhar/insurance info is taken. Only if you have insurance
 you proceed 
2. Blood test is done, only if no STD does use proceed 
3. BP is checked, only if BP is reasonable user proceeds

after these all prechecks and reports with the patient the patient goes to the doctor 


 Before  you reach the doctor 
1. Your adhar/insurance info is taken 
2. Blood test is done 
3. BP is checked

 these are the prechecks and all are javascript threads 
 pdf 3.1 for reference
requests wait in the callback queue
in a particular port and in this is single java script thread 
*/



/*
const express=require("express");
const app=express();

app.get('/health-checkup',function(req,res){
    // but where to the prechecks --> middlewares 
    res.send("Your heart is healthy ")
})

app.listen(3000,()=>{
    console.log("app running on port 3000")
})




 */
/*
Answer - Middlewares
Doctors cabin
Waiting area Insurance check
Blood test
BP check
Door
How do you do 
1. Auth checks? (Does this user have funds to visit the doctor) 
2. Ensure input by the user is valid (BP / blood tests)


to do the prechecks we need to know about the middlewares
 in the real world the prechecks are of two types 
1. either authentication(login /username matching passwords)
2.input validation -- the route which we are hitting must have valid imput 


 Before we proceed, lets add constraints to our route 
1. User needs to send a kidneyId as a (get request)query param which should be a number from 1-2 (humans only has 2 kidneys) 
2. User should send a username and password in headers
 */


// doing everything without using no middleware this is the ugly way 

const express=require("express");
const app=express();

app.get('/health-checkup',function(req,res){
    // but where to the prechecks --> middlewares 
    const kidneyId=req.query.kidneyId;
    const username=req.headers.username;
    const password=req.headers.password;

//  403 Forbidden – The server understood your request but refuses to authorize it.
    if(username!="srijan" || password!="pass"){
        res.status(403).json({
            msg:"User doesnot exist",
        })
        return;
    } 
//    console.log( req.headers)..> was not able to change the headers at http://localhost:3000/health-checkup?kidneyId=2
//will learn about it later --> till now POSTMAN is best

    // 411 Length Required
// The server refuses to accept the request because the Content-Length header is missing.
     if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg:"Wrong inputs",
        })
        return;
    }
    res.send("Your kidney is healthy ")
})

app.listen(3001,()=>{
    console.log("app running on port 3001")
})


//this is the ugly way of doing things as it violates the DRY pronciple 
// now lets do the same thing using middlewares

//ugly solution -> create a new route ,repeat the code..
//i will create functions wrappwes is a slight better way\
