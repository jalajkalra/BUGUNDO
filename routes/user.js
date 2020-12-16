const express = require('express');
const router = express.Router();
const User = require("../modal/user");
const validator = require("validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        }else{
            const hashPassword = await bcrypt.hash(req.body.password,12);
            console.log(hashPassword);
            const newUser = new User({
                email:req.body.email,
                password:hashPassword
            });
            const result = await newUser.save();
            const token = await jwt.sign({userId:result._id,email:result.email},"somesupersecretkey");
            res.status(200).json({token,userID:result._id,email:result.email,message:'success'});
        }
    }catch(err){
        res.status(404).json({message:'fail'});
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
        if(user.length>0){
            const isEqual = await bcrypt.compare(req.body.password,user[0].password);
            if(!isEqual){
                return res.status(403).json({error:'Wrong Credentials!!!'});
            }
            const token = await jwt.sign({userId:user[0]._id,email:user[0].email},"somesupersecretkey")
            return res.status(200).json({token,userID:user[0]._id,email:user[0].email,message:'success'});     
        }
        return res.status(200).json({error:"User Already Exists !!!"});
    }catch(err){
        res.status(404).json({message:'fail'});
    }
})
router.post("/checkAuth",async(req,res)=>{
    try{
        const user = await User.findById(req.body.userId);
        if(user){
            const token = await jwt.sign({userId:user._id,email:user.email},"somesupersecretkey");
            return res.status(200).json({token,userId:user._id,email:user.email,message:'success'});     
        }
        return res.status(200).json({error:"No Data Found !!!"});
    }catch(err){
        res.json({message:'fail'});
    }
})

module.exports = router;