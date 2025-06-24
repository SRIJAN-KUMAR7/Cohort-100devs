const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

//first connect
mongoose.connect(
  "mongodb+srv://srijankumar77777:Vitamin987@cluster0.u7tsvxx.mongodb.net/userappnew"
);
//then make a schema of the data through model
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
//then make a user and save that to model
//  const user=new User(
//     {name:"Srijan kumar",
//     email:'srijankumar2345@gmail.com',
//     password:'12134'});
//then save the user
app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({
    //CRUD==>Create read update delete
   
    email: username,
  });
   console.log("i am here");
  if (existingUser) {
    return res.status(400).send("username already exist");
  }
  //creating a user dynamically from postman--or a frontend if connected 
  const user = new User({
    name: name,
    email: username,
    password: password,
  });
 await user.save(); //to make the changes in the dB ....this is a asynch call so await save is a async fn
  res.json({
    msg: "User created Successfully",
  });
});

app.listen(3000, () => {
  console.log("running on 3000");
});
