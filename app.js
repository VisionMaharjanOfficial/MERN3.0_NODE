const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.json({
        message:"this is homepage"
    })

})

app.get("/about",(req,res)=>{
    res.json({
        message:"this is aboutpage"
    })
})
app.get("/contact",(req,res)=>{
    res.json({
        message:"this is contactpage"
    })
})
app.listen(3000,()=>{
    console.log("node js project has started")
})




