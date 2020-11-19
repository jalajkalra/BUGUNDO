const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/user");
const bugsRoute = require("./routes/bugs");
const mongoose = require("mongoose");
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/user",userRoute);
app.use("/data",bugsRoute);

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));

    app.use('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    })
}

mongoose.connect(process.env.DB_URL,{useNewUrlParser: true,useUnifiedTopology:true })
.then(app.listen(process.env.PORT||8000,()=>console.log("Server Has Started")))
.catch(err=>console.log(err));