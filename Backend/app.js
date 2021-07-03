const express = require('express');
const app = express();
const cnct =require('./model/contact')
const bodyparser=require('body-parser')

app.use(bodyparser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "*"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "*"
    );
    next();
  });

app.post("/form",(req,res,next)=>{
    const data=req.body;
    CNCT=new cnct({
        name:data.name,
        number:data.number,
        email:data.email,
        message:data.message
    })
    CNCT.save().then(()=>{
        res.status(200).json({message:"Response sent successfully!"})
    })
})

module.exports = app