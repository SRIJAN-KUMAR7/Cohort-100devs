/*
What is fetch() in Middleware?
fetch() is a built-in web API (in browsers and Node.js with a polyfill or in modern versions) used to make HTTP requests — like calling another API. 
You can use it inside Express middleware if you want to fetch data from another server before handling a request.

const express = require("express");
const fetch = require("node-fetch"); // Only needed for Node.js below v18
const app = express();

app.use(express.json());

// 🔁 Middleware that fetches data from another API
const fetchDataMiddleware = async (req, res, next) => {
  try {
    const response = await fetch("https://api.github.com/users/octocat");
    const data = await response.json();
    req.fetchedData = data; // attach to request object
    next(); // continue to next handler
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
};

// 🛣 Route using that middleware
app.get("/github", fetchDataMiddleware, (req, res) => {
  res.json({
    message: "Fetched GitHub user data",
    user: req.fetchedData,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});




*/

//input validation libraries-->ZOD

//theough zod we are just parsing the imputs from the user 

/*

const express=require("express");

//importing zod
const zod=require("zod");
const app= express();
app.use(express.json());


const schema=zod.array(zod.number());//array of numbers

app.post('/health-checkup',function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys;
    //code here input validation
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg:"Input invalid"
        })
    }
    res.send( 
        {response})
})

app.listen(3001,()=>{
    console.log("hi ur app is on 3001")
}) 


*/
//when correct inputs were passed
// {
//     "kidneys": [1,2]
// }


// {
//     "response": {
//         "success": true,
//         "data": [
//             1,
//             2
//         ]
//     }
// }




const express=require("express");

//importing zod
const zod=require("zod");
const app= express();
app.use(express.json());


const schem1a=zod.array(zod.number());//array of numbers

//main thingie
// how to do input validation here 
/*
 do input validation for the 
 1.email:string -> email @
 2. password -> atleast 8 char
 3. country -> IN or US


*/

const schema=zod.object({
   email:zod.string(),
   password:zod.string(),
   country:zod.literal("IN").or(zod.literal("US")),
   kidneys:zod.array(zod.number())
})

//this is how basic input validation is done 





app.post('/health-checkup',function(req,res){
    //kidneys=[1,2]
    const kidneys=req.body.kidneys;
    //code here input validation
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg:"Input invalid"
        })
    }
    res.send( 
        {response})
})

app.listen(3001,()=>{
    console.log("hi ur app is on 3001")
}) 


