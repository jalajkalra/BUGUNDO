const express = require('express');
const router = express.Router();
const User = require("../modal/user");
const validator = require("validator");

router.post("/registration",async(req,res)=>{
    try{
        let errors = [];
        if(!validator.isEmail(req.body.email)){
            errors.push({message:"Email is not valid"});
        }
        if(validator.isEmpty(req.body.password) || !validator.isLength(req.body.password,{min:5})){
            errors.push({message:"Password is not valid"});
        }
        if(errors.length>0){
            const error = new Error("Invalid input.");
            error.data = errors;
            error.code = 422;
            throw error
        }
        const user = await User.find({email:req.body.email});
        if(user.length>0){
            return res.status(403).json({error:"User Already Exists !!!"});
        }
        const hashPassword = await bcrypt.hash(req.body.password,12);
        const newUser = new User({
            email:req.body.email,
            password:hashPassword
        });
        const result = await newUser.save();
        const token = await jwt.sign({userId:result._id,email:result.email},"somesupersecretkey")
        res.status(200).json({token,userID:result._id,email:result.email,message:'success'});
    }catch(err){
        res.sendStatus(404).json({message:'fail'});
    }
})

router.post("/login",async(req,res)=>{
    try{
        let errors = [];
        if(!validator.isEmail(req.body.email)){
            errors.push({message:"Email is not valid"});
        }
        if(validator.isEmpty(req.body.password) || !validator.isLength(req.body.password,{min:5})){
            errors.push({message:"Password is not valid"});
        }
        if(errors.length>0){
            const error = new Error("Invalid input.");
            error.data = errors;
            error.code = 422;
            throw error
        }
        const user = await User.find({email:req.body.email});
        if(user){
            const token = await jwt.sign({userId:result._id,email:result.email},"somesupersecretkey")
            return res.status(200).json({token,userID:user._id,email:user.email,message:'success'});     
        }
        return res.status(200).json({error:"User Already Exists !!!"});
    }catch(err){
        res.sendStatus(404).json({message:'fail'});
    }
})

module.exports = router;