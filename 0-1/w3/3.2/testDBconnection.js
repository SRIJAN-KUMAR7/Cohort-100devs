const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

mongoose.connect(
  "some_gibrish",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.email; // ✅ match the key sent in Postman
  const password = req.body.password;
  const name = req.body.name;

  console.log("Request body:", req.body); // ✅ confirm request

  const existingUser = await User.findOne({
    email: username,
  });

  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: name,
    email: username,
    password: password,
  });

  await user.save();

  res.json({
    msg: "User created successfully",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


///this worked completely fine 


//                                                node "c:\Users\srija\OneDrive\Desktop\Final cohort\0-1\w3\3.2\testDBconnection.js"
// (node:20096) [MONGODB DRIVER] Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:20096) [MONGODB DRIVER] Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
// Server running on port 3000
// ✅ MongoDB connected
// Request body: { name: 'bala', email: 'baby@gmail.com', password: '4673683698' }
// Request body: { name: 'bala', email: 'babddy@gmail.com', password: '4673683698' }
// Request body: { name: 'bala', email: 'baby@gmail.com', password: '4673683698' }
// Request body: {
//   name: 'koi bhai',
//   email: 'balajdky@gmail.com',
//   password: '4673683698'
// }


// added all the data in mongodb