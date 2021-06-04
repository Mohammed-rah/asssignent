const http = require('http');
const fs = require('fs');

const express=require('express');

const app=express();

app.use((req,res,next)=>{
console.log("in the middleware");
res.send("<h4>hello Mohammed Rahabers</h4>")

next();
});
app.use((req,res,next)=>{
  console.log("in another middleware");
  console.log('last')
 
  });

app.listen(12);  