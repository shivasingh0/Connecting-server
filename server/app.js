require('dotenv').config()

const express = require('express')

const connectToDB = require('./configDB/db.js')

const app = express()
console.log(process.env.dbURI);

connectToDB()

app.get('/', (req, res)=>{
    res.send('<h1>Welcome to Local Host</h1>')
})

app.get('/youtube', (req, res)=>{
    res.json({
        success : true,
        message : "Welcome to my Youtube"
    })
})

app.get('/insta', (req, res)=>{
    res.send('<h1>Welcome to Instagram</h1>')
})


module.exports = app