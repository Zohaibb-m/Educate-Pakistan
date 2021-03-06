const mongoose=require('mongoose')
 
const courseSchema=new mongoose.Schema({
    courseName:{
        type:String,
        required:true, 
    },
    grade:{
        type: mongoose.Types.ObjectId,
        ref: 'Grades',
        required:true
    }, 
    subject:{
        type: mongoose.Types.ObjectId,
        ref: 'Subjects',
        required:true
    },
    courseImage:{
        type:String,
    },
    courseDescrition:{
        type:String
    }
},{timestamps:true}
) 

module.exports=mongoose.model("Courses",courseSchema)