const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
Name:{
    type:String,
    required:true
},
emailId:{
    type:String,
    required:true
},
mobile:{
    type:Number,
    required:true
},
password:{
    type:String,
    required:true
}
},{timestamps:true})



module.exports= mongoose.model("user",userSchema);