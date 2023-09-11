const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).json({message : "successfuls"});
})

app.get('/user',(req,res)=>{
    res.json("user get successful");
})

app.listen(8500,()=> console.log("server started at 8500"))
