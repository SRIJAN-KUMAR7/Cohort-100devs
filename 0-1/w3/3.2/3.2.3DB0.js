//DATABASES

// Until now, we’ve been storing data in memory 
// This is bad for a few reasons -  
// 1. Data can’t be dynamic, if you update in memory 
// objects, the updates are lost if the process 
// restarts 
// 2. There are multiple servers in the real world


// Databases pg--20
// In the real world, a basic architecture looks like this
// Browser Backend Database
// User hits the backend 
// Backend hits the database 
// User doesn’t have access to the database/can’t talk to the DB


// In the real world, a basic architecture looks like this
// There are various types of databases 
// 1. Graph DBs 
// 2. Vector DBs 
// 3. SQL DBs 
// 4. NoSql DBs 
// For todays class, 



// we’ll look at a famous NoSQL database - MongoDb


//MongoDB lets you create databases 
// In each DB, it lets you create tables (collections) 
// In each table, it lets you dump JSON data 
// It is schemaless --->>>>
// It scales well and is a decent choice for most use cases

// mongodb+srv://srijankumar77777:<db_password>@cluster0.u7tsvxx.mongodb.net/
// workin gon mongodbatlas



/*How does the backend connect to the database? 
Using libraries! 
1. Express lets u create an HTTP server 
2. Jsonwebtokens library lets you create jwts 
3. Mongoose lets you connect to your database


so Mongoose is the  new library which lets us to connect our backend to database

 */


const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "your_mongo_url",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  // should check in the database
}

app.post("/signin", async function (req, res) {
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
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000,()=>{
    console.log("app running oon port 3000");
})