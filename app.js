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
app.listen(3000,()=>{
    console.log("node js project has started")
})




