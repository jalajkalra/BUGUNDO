const express = require('express');
const router = express.Router();
const Bugs = require('../modal/bugs');
const User = require('../modal/user');
const Kmean = require('../ML/kmean');
const DecisionTree = require('../ML/decision');
const SWM = require('../ML/svm');

router.post("/bugs",async(req,res)=>{ 
    try{
        const user = await User.findById(req.body.userId);
        if(Object.keys(user).length>0){
            const bug = new Bugs(
                {
                    "Product": req.body.Product,
                    "Component": req.body.Component,
                    "Assignee": req.body.Assignee,
                    "Status": req.body.Status,
                    "Resolution": req.body.Resolution,
                    "Summary": req.body.Summary,
                    "Changed": req.body.Changed,
                    "Assignee Real Name": req.body.AssigneeRealName,
                    "Classification": req.body.Classification,
                    "Flags":  req.body.Flags,
                    "Hardware":  req.body.Hardware,
                    "Keywords": req.body.Keywords,
                    "Opened":  req.body.Opened,
                    "OS":  req.body.OS,
                    "Priority": req.body.Priority,
                    "QAContact": req.body.QAContact,
                    "QAContactRealName": req.body.QAContactRealName,
                    "Reporter":  user.email,
                    "Severity":  req.body.Severity,
                    "Summary__1":  req.body.Summary__1,
                    "Tags":  req.body.Tags,
                    "TargetMilestone": req.body.TargetMilestone,
                    "URL": req.body.URL,
                    "Version": req.body.Version,
                    "Votes": 0,
                    "Whiteboard": req.body.Whiteboard,
                    "Alias": req.body.Alias
                }
            );
            await bug.save();
            res.status(200).json({message:"success"});
        }
    }catch(err){
        res.json({message:"fail"});
    }
})

router.get(`/bug/id/:id`,async(req,res)=>{
    try{
        const bugs = await Bugs.find({_id:req.params.id});
        if(bugs.length>0){
            return res.status(200).json({data:bugs});
        }
        return res.status(400).json({message:"fail",data:[]});
    }catch(err){
        return res.status(400).json({message:"fail",data:[]});
    }
})

router.get(`/bug/product/:Product`,async(req,res)=>{
    try{
        const bugs = await Bugs.find({Product:req.params.Product});
        if(bugs.length>0){
            return res.status(200).json({data:bugs});
        }
        return res.status(400).json({message:"fail",data:[]});
    }catch(err){
        return res.status(400).json({message:"fail",data:[]});
    }
})

router.get(`/bug/keywords/:Keywords`,async(req,res)=>{
    const bugs = await Bugs.find({Keywords:req.params.Keywords});
    if(bugs.length>0){
        return res.status(200).json({data:bugs});
    }
    return res.status(400).json({message:"fail",data:[]});
})

router.get(`/bug/component/:Component`,async(req,res)=>{
    const bugs = await Bugs.find({Component:req.params.Component});
    if(bugs.length>0){
        return res.status(200).json({data:bugs});
    }
    return res.status(400).json({message:"fail",data:[]});
})

router.post('/addComment',async(req,res)=>{
    const user = await User.findById(req.body.userId);
    const bug = await Bugs.findByIdAndUpdate(req.body.id,{ $push : {Comments: {comment:req.body.comment,sender:user.email}}});
    bug.Comments.push({comment:req.body.comment,sender:user.email});
    if(Object.keys(bug).length>0){
        res.status(200).json({message:'success',data:[bug]});
    }else{
        res.status(400).json({message:"fail",data:[]});
    }
})

router.get(`/bug/:algo`,async(req,res)=>{
    try{
        const bugs = await Bugs.find();
        let value;
        if(req.params.algo==="kmean"){
            value = Kmean(bugs);
        }else if(req.params.algo==="svm"){
            value = SWM(bugs);
        }else{
            value = DecisionTree(bugs);
        }
        return res.status(200).json({message:"success",highRank:value.idsimc1,mediumRank:value.idsimc2,lowRank:value.idsimc3});
    }catch(err){
        return res.status(200).json({message:"fail",highRank:[],mediumRank:[],lowRank:[]});
    }
})

module.exports = router;