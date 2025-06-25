let express = require('express');
let app = express();
let bodyParser=require('body-parser');

require('dotenv').config()
app.use(function(req,res,next){
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next();
})


console.log("Hello World");

app.use('/public',express.static(__dirname+"/public"))
app.use(bodyParser.urlencoded({extended: false}))


app.get('/',function(req,res){
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/json',(req,res)=>{
   if((process.env.MESSAGE_STYLE=="uppercase")){
     res.json(
        {
            "message": "HELLO JSON"
        }
    )
   }
   else{
     res.json(
        {
            "message": "Hello json"
        }
    )
   }
})

app.get('/now',function(req,res,next){
req.time=new Date().toString();
next();
},function(req,res){
  res.json(
    {
        "time":req.time
    }
  )
})


app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});


app.get('/name',function(req,res){
 
  res.json({
     name: req.query.first + " " + req.query.last
  })
})

app.post('/name',function(req,res){
    res.json({
        name: req.body.first + " " + req.body.last
    })
})
























 module.exports = app;
