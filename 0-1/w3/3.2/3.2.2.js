/*
Authentication
POST /signin 
Body - { 
username: string 
password: string 
} 
Returns a json web token with username encrypted
Lets start by creating our assignment for today 
A website which has 2 endpoints -  
GET  /users 
Headers -  
Authorization header 
Returns an array of all users if user is signed in (token is correct) 
Returns 403 status code if not 




https://gist.github.com/hkirat/1618d30e03dc2c276b1cd4b351028d14
*/

//the assignment logic

const express = require("express");
const jwt = require("jsonwebtoken");//importing the logic  --fns in use is encoding and verifying
const { use } = require("react");
const jwtPassword = "123456";//this is the required pass /key to verify the signature

const app = express();
app.use(express.json());

//this is my inmemory database
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
  {
    username:"srijankumar@gmail.com",
    password:"12345",
    name:"Srijan Kumar"
  }
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists=false;
 for(let i=0;i<ALL_USERS.length;i++){
  if((username===ALL_USERS[i].username)&&(password===ALL_USERS[i].password)){
    userExists=true;
  }
 }//done 
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }
//jwt.sign-->verifies the owner of the signature
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json(
     { users: ALL_USERS.filter(function(value){
      if(value.username===username){
        return false;
      } else{
        return true;
      } //this gives user other than me
     })}
    )
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,()=>{
  console.log("app on 3000");
})


//the token i got 
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNyaWphbmt1bWFyQGdtYWlsLmNvbSIsImlhdCI6MTc1MDc1NDQzN30.MdR1zpiYuXT6BnTIdoLViSXGNwXaLmKMToi698HqbHg


//just chnaged the Authorization to authorization

