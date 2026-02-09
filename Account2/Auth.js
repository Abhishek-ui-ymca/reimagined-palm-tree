
// crating a simple auth page 
const express = require('express');
const app = express();
 
app.get("/login" , function (req , res){
    res.send("Hi, this is login page")
})
app.listen(3000)