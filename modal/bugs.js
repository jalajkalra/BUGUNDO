const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BugSchema = new Schema({
    "Product":{
        type:String,
        required:true
    },
    "Component":{
        type:String,
        required:true
    },
    "Assignee":{
        type:String,
        required:true
    },
    "Status": {
        type:String,
        required:true
    },
    "Resolution":{
        type:String,
        required:true
    },
    "Summary":{
        type:String,
        required:true
    },
    "Changed":{
        type:String,
        required:true
    },
    "Assignee Real Name":{
        type:String,
        required:true
    },
    "Classification":{
        type:String,
        required:true
    },
    "Flags":{
        type:String,
    },
    "Hardware":{
        type:String,
        required:true
    },
    "Keywords":{
        type:String,
    },
    "Number of Comments":{
        type:Number,
    },
    "Opened":{
        type:Date,
        default:new Date()
    },
    "OS":{
        type:String,
        required:true
    },
    "Priority":{
        type:String,
        required:true
    },
    "QA Contact":{
        type:String,
    },
    "QA Contact Real Name":{
        type:String,
    },
    "Reporter":{
        type:String,
        required:true
    },
    "Reporter Real Name":{
        type:String,
    },
    "Severity":{
        type:String,
    },
    "Summary__1":{
        type:String,
    },
    "Tags":{
        type:String,
    },
    "Target Milestone":{
        type:String,
    },
    "URL":{
        type:String,
    },
    "Version":{
        type:String,
    },
    "Votes":{
        type:Number,
        default:0
    },
    "Whiteboard":{
        type:String,
    },
    "Alias":{
        type:String,
    }
})

module.exports = mongoose.model("Bugs",BugSchema);