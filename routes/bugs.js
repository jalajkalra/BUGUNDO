const express = require('express');
const router = express.Router();
const Bugs = require('../modal/bugs');

router.post("/bugs",async(req,res)=>{
    try{
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
                "Number of Comments":  req.body.NumberofComments,
                "Opened":  req.body.Opened,
                "OS":  req.body.OS,
                "Priority": req.body.Priority,
                "QA Contact": req.body.QAContact,
                "QA Contact Real Name": req.body.QAContactRealName,
                "Reporter":  req.body.Reporter,
                "Reporter Real Name":  req.body.ReporterRealName,
                "Severity":  req.body.Severity,
                "Summary__1":  req.body.Summary__1,
                "Tags":  req.body.Tags,
                "Target Milestone": req.body.TargetMilestone,
                "URL": req.body.URL,
                "Version": req.body.Version,
                "Votes": req.body.Votes,
                "Whiteboard": req.body.Whiteboard,
                "Alias": req.body.Alias,
            }
        );
        await bug.save();
        res.status(200).json({message:"success"});
    }catch(err){
        res.json({message:"fail"});
    }
})

router.get(`/bug/id/:id`,async(req,res)=>{
    const bugs = await Bugs.find({_id:req.params.id});
    if(bugs.lenth>0){
        return res.status(200).json({data:bugs});
    }
    return res.status(400).json({message:"fail",data:[]});
})

router.get(`/bug/product/:Product`,async(req,res)=>{
    const bugs = await Bugs.find({Product:req.params.Product});
    if(bugs.lenth>0){
        return res.status(200).json({data:bugs});
    }
    return res.status(400).json({message:"fail",data:[]});
})

router.get(`/bug/keywords/:Keywords`,async(req,res)=>{
    const bugs = await Bugs.find({Keywords:req.params.Keywords});
    if(bugs.lenth>0){
        return res.status(200).json({data:bugs});
    }
    return res.status(400).json({message:"fail",data:[]});
})

router.get(`/bug/component/:Component`,async(req,res)=>{
    const bugs = await Bugs.find({Component:req.params.Component});
    if(bugs.lenth>0){
        return res.status(200).json({data:bugs});
    }
    return res.status(400).json({message:"fail",data:[]});
})

router.get(`/bug`,async(req,res)=>{
    const bugs = await Bugs.find();
    if(bugs.lenth>0){
        return res.status(200).json({data:bugs});
    }
    return res.status(400).json({message:"fail",data:[]});
})

module.exports = router;