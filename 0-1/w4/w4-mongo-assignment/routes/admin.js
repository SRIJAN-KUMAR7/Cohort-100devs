const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course} = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
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

// {
//     "msg": "Course created Successfully ",
//     "courseId": "687cfc261098c9b34fd7a1d0"
// }
// this is the message i got  
router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   const response=await Course.find({});
   res.json({
    courses:response
   })
     
});

module.exports = router;