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
const jwt = require("jsonwebtoken");
const { use } = require("react");
const jwtPassword = "123456";

const app = express();

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
  
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
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
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)