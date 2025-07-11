const express=require("express");
const cors=require("cors");//cors-->cross origin resource sharing
const app=express();
app.use(cors()); // Enable CORS for frontend access

app.get('/sum',function(req,res){
    const a= parseInt(req.query.a);
    const b= parseInt(req.query.b);
    const sum=a+b;
    res.send(sum.toString());

})

app.get('/si',function(req,res){
    const p=parseInt(req.query.p);
    const r=parseInt(req.query.r);
    const t=parseInt(req.query.t);
    const si=(p*r*t)/100;
    res.send(si.toString());
})
app.listen(3000,()=>{
    console.log("app is running on port 3000")
});