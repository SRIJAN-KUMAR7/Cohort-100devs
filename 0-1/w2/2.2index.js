const express = require("express");
const bodyParser =require("body-parser");
const fs = require("fs");
fs.readFile("a.txt","utf-8",function(err,data){
    if(err){
        console.log("please try again later ")
    }
    console.log(data)
})

//middlewares
const app = express();
const port = 3001;

app.use(bodyParser.json());
//or 
// app.use(express.json());


app.post('/new', function(req, res) {
    console.log(req.headers)
    console.log(req.body)
    res.send("hi there");
});
//1,2,3....25565
app.listen(port, function() {
    console.log(`App is running on port ${port}`);
});


// see the Postman.png for reference

/* how to handle the post request 

more specifically the body of the post request

//post man returns the json msg 


{
    "msg": "2+2=4"
}

to log all the headers use req.headers


and the output i got is here:
see headerslogged.png from postman


req.body gives undefined
undefined


❓ Why req.body is undefined:
You haven't added a body-parsing middleware (like express.json()).
GET requests don't usually have a body, and most clients (like browsers or Postman) don't send one with GET.
 

or we can use the body-parser library 
so install npm i body-parser

now it is done and reference images are : bodyreqfrompostman.png 
and the mesageraw.png from postman 


//Installed nodemon for the rerun and updation of index.js after being changed 


learn about --> fetch   

*/

/* wHAT IS  A REQUEST --> IT IS A BUNCH OF BYTES 


*/