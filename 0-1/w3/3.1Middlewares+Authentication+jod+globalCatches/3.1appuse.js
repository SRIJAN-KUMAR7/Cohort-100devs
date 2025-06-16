//const app=express();
// app.use(express.json())


const express = require("express");
const app = express();

app.use(express.json());// this means that this middleware is going ot be called everywhere 



let numberOfRequests=0;
function calculateRequests(req, res, next) {
 numberOfRequests++;
 next();
}

//so instaed if passing the calculateRequests
// everywhere as a callback function we can use the 
// app.use("koi bhi middleware ")

app.use(calculateRequests);
app.use(express.json());


// Route
app.post('/health-checkup', (req, res) => {
   res.send(numberOfRequests);
});
app.get('/health-checkup2', (req, res) => {
   res.send(`hello ${numberOfRequests}`)
});

app.listen(3002, () => {
    console.log("App running on port 3002");
});