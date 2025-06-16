const express = require("express");
const app = express();

let numberOfRequests=0;
function calculateRequests(req, res, next) {
 numberOfRequests++;
 next();
}

// Route
app.get('/health-checkup', calculateRequests,  (req, res) => {
   res.send(numberOfRequests);
});
app.get('/health-checkup2', calculateRequests,  (req, res) => {
   res.send(`hello ${numberOfRequests}`)
});

app.listen(3002, () => {
    console.log("App running on port 3002");
});
//popular middleware
//rate limmititng is other one 
//done testing with postman
//yess now i know middlewares

//last thing in middleware 
//for the post request 

//we make use of 
//const app=express();
//app.use(express.json());
// or use the body parser one 
