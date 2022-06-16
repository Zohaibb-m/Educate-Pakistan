const mongoose=require('mongoose')

const gradeSchema=new mongoose.Schema({
    gradeName:{
        type:String,
        required:true
    },
    gradeID:{
        type:Number,
        required:true
    }
    
},{timestamps:true}
) 
module.exports=mongoose.model("Grades",gradeSchema)