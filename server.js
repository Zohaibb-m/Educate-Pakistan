require('dotenv').config() 
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const userRouter=require('./routes/userRouter')
const noteRouter=require('./routes/noteRouter')
const path = require("path")
const app=express();
app.use(express.json());
app.use(cors());



app.use("/users",userRouter);
app.use('/api/Notes',noteRouter)

app.get("/",(req,res)=>{
    res.send("Hello");
})

const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
    if(err)throw err;
    console.log("Connected to Mongo DB");
}) 

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'client','build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}



const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server Started at Port: ",PORT);
})