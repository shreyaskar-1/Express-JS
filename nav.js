const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome To The Home Page")
})

app.get('/about',(req,res)=>{
    res.send("Welcome To The About Page")
})

app.get('/contact',(req,res)=>{
    res.send("Welcome To The Contact Page")
})

app.get('/service',(req,res)=>{
    res.send("Welcome To The Services Page")
})

app.listen(3000)