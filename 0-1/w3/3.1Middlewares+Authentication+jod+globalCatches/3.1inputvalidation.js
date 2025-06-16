/*
const express=require("express");
const app= express();
app.use(express.json());

app.post('/health-checkup',function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys;
    const kidneyLength=kidneys.length;

    res.send("you have"+kidneyLength +"kidneys")
})

app.listen(3001,()=>{
    console.log("hi ur app is on 3001")
})


 */
//input

//{
   // "kidneys":[1,2]
//}

//output
// you have2kidneys


//but user doesnot know whether the accepted input format is array or int or string 
//this is ur job as a programmer to validate the inputs 
//as our backend server is out on the internet and anyone can hit it 
//INPUT VALIDATION


const express=require("express");
const app= express();
app.use(express.json());

app.post('/health-checkup',function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys;
    //code here input validation
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
