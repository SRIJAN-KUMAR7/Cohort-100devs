const express=require("express");
const app= express();

const zod=require("zod");
app.use(express.json());

app.post('/health-checkup',function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys;
    //code here input validation--> manual checking of the input validation
    if(!kidneys){
        res.json({
            msg:"wrong inputs"
        })
    }
    else{
        const kidneyLength=kidneys.length;

    res.send("you have"+kidneyLength +"kidneys")
    }
})

app.listen(3001,()=>{
    console.log("hi ur app is on 3001")
}) 

// this is the ugly way to do the input validation
//we can use the zod library

//showing all the backend fails to the user is not a good
//practise so we use global catches
//because when the backend fails it should not show the whole file system and show the errors 
//rather it should just say some error... in the backend ..



//global catches--> another  middleware 
//4 inputs error based middlewares
app.use(function(err,req,res,next){
   console.log(err) 
    res.json({
    msg:"Sorry something wrong with our server"
 })
})