const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY= process.env.SECRET_KEY;
const saltRound=12;



//user creation api
const createUser = async (req, res) => {
    const { Name, emailId, mobile, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ emailId })
        if (existingUser) {
            return res.status(400).json({ status: true, msg: "user is already exist" })
        }
        const hashpassword = await bcrypt.hash(password, saltRound);
        const user = await userModel.create({
            Name: Name,
            emailId: emailId,
            mobile: mobile,
            password: hashpassword
        });
     const token= jwt.sign({emailId:user.emailId,id:user._id},SECRET_KEY)
        res.status(201).json({ status: true, msg: "user created successfully", user , token:token})

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }

}

//user login api
const loginUser = async (req, res) => {
  const {emailId,password}=req.body;
  try {
    const existingUser= await userModel.findOne({emailId});
    if(!existingUser){
        return res.status(400).json({status:false,msg:"user does not exist"})
    }
    const matchPassword= await bcrypt.compare(password,existingUser.password);
    if(!matchPassword){
        return res.status(400).json({msg:"invalid credancial"})
    }
    return res.status(200).json({msg:"you login successfully"})
  } catch (error) {
    return res.status(500).json({msg:error.message});
  }
}







module.exports = { createUser, loginUser }