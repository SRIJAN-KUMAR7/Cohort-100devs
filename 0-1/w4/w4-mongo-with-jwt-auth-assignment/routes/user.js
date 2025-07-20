const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt=require("jsonwebtoken");
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    //tricky part 
    //as previously we were passing the username in headers and now we are using jwt for authorization
    //now in order to make this work we will pass the value from user middleware to this endpoint 
    const username=req.username;
    console.log(username)
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router