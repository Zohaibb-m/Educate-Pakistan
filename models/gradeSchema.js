const mongoose=require('mongoose')

const gradeSchema=new mongoose.Schema({
    gradeID:{
        type:Number,
        required:true
    },
    gradeName:{
        type:String,
        required:true
    }
},{timestamps:true}
) 

module.exports=mongoose.model("Grades",gradeSchema)