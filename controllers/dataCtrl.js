const Courses = require("../models/courseSchema")
const Subjects = require("../models/subjectSchema")

const dataCtrl={  
    getCourses: async (req,res)=>{
        try {
            const courses=await Courses.find()
            if (courses)return res.send(courses);
        } catch (err) {
            return res.status(500).json(err.message);
        }  
    },
    getCourseData: async (req,res)=>{
        try {
            const {id}=req.body;
            console.log("Hello",id)
            const course=await Courses.findById(id)
            if (course)return res.send(course);
        } catch (err) {
            return res.status(500).json(err.message);
        } 
    }
}


module.exports = dataCtrl
