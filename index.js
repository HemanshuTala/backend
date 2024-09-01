const express = require('express');

const app = express()


const port  = 5000;


app.get('/',(req,res)=>{
    res.send("hello world");
})


app.get('/twitter',(req,res)=>{
    res.send("twitter");
})


app.get('/login',(req,res)=>{
    res.send("<h1>login here</h1>");
})


app.get('/youtube',(req,res)=>{
    res.send("<h2> here</h2>");
})
app.listen(port,()=>{
    console.log(`hello world ${port}`);
})