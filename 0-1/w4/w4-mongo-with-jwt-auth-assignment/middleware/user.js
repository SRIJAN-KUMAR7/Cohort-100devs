const {JWT_SECRET}=require("../config.js");
const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    //Bearer somejwt
     const words=token.split(" ");
     const jwtToken=words[1];
     const decodedValue=jwt.verify(jwtToken,JWT_SECRET);
     if(decodedValue.username){
        req.username=decodedValue.username;//passing this value from this middleware 
        next();
     }
     else{
        res.status(403).json({
            msg:"You are Not Authenticated"
        })
     }
}

module.exports = userMiddleware;