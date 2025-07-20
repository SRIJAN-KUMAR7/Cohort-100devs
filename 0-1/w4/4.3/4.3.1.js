const mongoose = require("mongoose");

const UserSchema= new mongoose.Schema({
    email:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema= new mongoose.Schema({
    title:String,
    Price:32323,
});

const User=mongoose.model('User',UserSchema);
const Course=mongoose.model('COURSE',CourseSchema);

User.create({
    username:req.body.username,
    password:req.body.password
});