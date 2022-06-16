const mongoose=require('mongoose')

const subjectSchema=new mongoose.Schema({
    subjectName:{
        type:String,
        required:true
    },
    subjectID:{
        type:Number,
        required:true
    },
},{timestamps:true}
) 

module.exports=mongoose.model("Subjects",subjectSchema)