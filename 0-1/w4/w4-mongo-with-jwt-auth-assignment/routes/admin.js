const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course, User}=require("../db");
const {JWT_SECRET}=require("../config.js");
const jwt =require("jsonwebtoken")



// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
      const username=req.body.username;
        const password=req.body.password;
    
        //check if user already exist or not 
        await Admin.create({
            username:username,
            password:password
        })
        res.json({
            message:"Admin created successfully"
        })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    
    const user= await User.find({
        username,
        password
    })
    if(user){
        const token=jwt.sign({
        username
    },JWT_SECRET);
    res.json({
        token
    })
    }else{
        res.status(411).json({
            message:"Incorrect email and password"
        })
    }


});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
     const title=req.body.title;
        const description=req.body.description;
        const imageLink=req.body.imageLink;
        const price=req.body.price;
        const newCourse=await Course.create({
            title:title,
            description:description,
            imageLink:imageLink,
            price:price
        })
        res.json({
            msg:"Course created Successfully ",courseId: newCourse._id
        })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   const response=await Course.find({});
   res.json({
    courses:response
   })
     
});

module.exports = router;