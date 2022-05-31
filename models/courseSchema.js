const mongoose=require('mongoose')

const courseSchema=new mongoose.Schema({
    courseID:{
        type:Number,
        required:true
    },
    gradeID:{
        type: mongoose.Types.ObjectId,
        ref: 'Grades',
    }, 
    subjectID:{
        type: mongoose.Types.ObjectId,
        ref: 'Subjects',
    }
},{timestamps:true}
) 

module.exports=mongoose.model("Courses",courseSchema)