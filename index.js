const express=require('express')
const app=express()
const port=5000;
//post is the end point
//app.use('/myapi',(req,res)=>{
    res.send("Hello,World!");
//})//if it doesn't work then terminal ctrl+c /then run prgm/ then localhost

app.listen(port,()=>{
  console.log("server listening to 5000")
})