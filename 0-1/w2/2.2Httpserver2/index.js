const express=require("express")
const app=express();
const port=process.env.PORT||4000

app.get('/',function(req,res){
    res.send("Hi there, my name is srijan kumar")
})


app.listen(port,function(){
   console.log(`App is running on ${port}`)
})

// to change the port while runtime use 
// $env:PORT = "3002"


// Install dotenv if not already:

// bash
// npm install dotenv
// In your index.js, add at the top:

// js
// require('dotenv').config();
// Create a .env file:

// ini
// PORT=3002
// Run your app:

// bash
// node index.js