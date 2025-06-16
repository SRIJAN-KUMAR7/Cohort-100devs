const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  next();
  res.on("finish", () => {
    console.log(`${req.method} ${req.url} took ${Date.now() - start}ms`);//best way to do this
  });
});

app.get("/test", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
// done hit rreequests from postman and get terminal logs\