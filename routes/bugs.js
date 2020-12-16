const express = require('express');
const router = express.Router();
const Bugs = require('../modal/bugs');
const User = require('../modal/user');

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

router.get(`/bug`,async(req,res)=>{
    try{
        const bugs = await Bugs.find();
        let idsimc1 = [];
        let idsimc2 = [];
        let idsimc3 = [];
        if(bugs.length>0){
            const clstrcentr =  [4.87051282, 10.0, 4.02970297, 5.0, 3.72836418, 1];
            for(let i=0;i<bugs.length;i++)
            {
                let sev,pri; 
                switch(bugs[i].Severity){
                    case "Blocker":
                        sev=8;
                        break;
                    case "Critical":
                        sev=7;
                        break;
                    case "Regression":
                        sev=6;
                        break;
                    case "Major":
                        sev=5;
                        break;  
                    case "Normal":
                        sev=4;
                        break;
                    case "Minor":
                        sev=3;
                        break;
                    case "Trivial":
                        sev=2;
                        break;
                    case "Enhancement":
                        sev=1;
                        break;                  
                }
                switch(bugs[i].Priority){
                    case "P1":
                        pri=10;
                        break;
                    case "P2":
                        pri=5;
                        break;
                    case "P3":
                        pri=1;
                        break;           
                }

                const cosinesimcluster1=Math.sqrt((sev-clstrcentr[0])*(sev-clstrcentr[0])+(pri-clstrcentr[1])*(pri-clstrcentr[1]));
	            const cosinesimcluster2=Math.sqrt((sev-clstrcentr[2])*(sev-clstrcentr[2])+(pri-clstrcentr[3])*(pri-clstrcentr[3]));
	            const cosinesimcluster3=Math.sqrt((sev-clstrcentr[4])*(sev-clstrcentr[4])+(pri-clstrcentr[5])*(pri-clstrcentr[5]));

                if (Math.min(cosinesimcluster1,cosinesimcluster2,cosinesimcluster3)==cosinesimcluster1)
                    {
                        idsimc1.push(bugs[i]);
                    }
                if (Math.min(cosinesimcluster1,cosinesimcluster2,cosinesimcluster3)==cosinesimcluster2)
                    {
                        idsimc2.push(bugs[i]);
                    }
                if (Math.min(cosinesimcluster1,cosinesimcluster2,cosinesimcluster3)==cosinesimcluster3)
                    {
                        idsimc3.push(bugs[i]);
                    }
            }
            return res.status(200).json({message:"success",highRank:idsimc1,mediumRank:idsimc2,lowRank:idsimc3});
        }else{
            return res.status(200).json({message:"failed",highRank:[],mediumRank:[],lowRank:[]});
        }
    }catch(err){
        return res.status(200).json({message:"fail",highRank:[],mediumRank:[],lowRank:[]});
    }
})

module.exports = router;