const mongoose=require('mongoose')

const subjectSchema=new mongoose.Schema({
    subjectID:{
        type:Number,
        required:true
    },
    subjectName:{
        type:String,
        required:true
    }
},{timestamps:true}
) 

module.exports=mongoose.model("Subjects",subjectSchema)