const express = require("express");
const app = express();

// Middleware 1: User auth from headers
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "srijan" || password !== "pass") {
//Yes! These two are logically equivalent.
//This is due to De Morgan’s Law in Boolean logic:!(A && B) == (!A || !B)

        res.status(403).json({ msg: "User does not exist" });
    } else {
        next();
    }
}

// Middleware 2: Kidney check from query
function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId);

    if (kidneyId !== 1 && kidneyId !== 2) {
        res.status(411).json({ msg: "Wrong inputs" });
    } else {
        next();
    }
}

// Route
app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res) => {
    res.send('Your kidney is good bro');
});

app.listen(3001, () => {
    console.log("App running on port 3001");
});
//done testing with postman
