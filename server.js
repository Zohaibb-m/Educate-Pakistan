require('dotenv').config() 
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const userRouter=require('./routes/userRouter')
const adminRouter=require('./routes/adminRouter')
const path = require("path")
const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')


const app=express();
app.use(express.json());
app.use(cors());


AdminBro.registerAdapter(AdminBroMongoose)
app.use("/users",userRouter);
app.use("/admin",adminRouter);


const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
    useNewUrlParser:true, 
    useUnifiedTopology:true
},err=>{
    if(err)throw err;
    console.log("Connected to Mongo DB");
}) 
if (process.env.NODE_ENV) {
app.use(express.static(path.join(__dirname, './client/build')))
console.log(__dirname, '/client/build')

app.get('*', function(_, res) {
  res.sendFile(path.resolve(__dirname, './client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
console.log(__dirname, './client/build/index.html')
}

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("Server Started at Port: ",PORT);
})
