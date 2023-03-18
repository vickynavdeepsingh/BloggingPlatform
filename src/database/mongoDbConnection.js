const mongoose= require('mongoose');
const dotenv=require('dotenv').config();


const mongoDbConnections= async()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true
    }).then(()=>{
        console.log("mongodb connected successfully")
    }).catch((err)=>{
        console.log({msg:err.message})
    })
}


module.exports=mongoDbConnections;