const { request } = require("express");

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require("express")

const app = express()

var corsOption = {
    origin:"http://localhost:3000"
}

app.use(cors(corsOption))

// parse request of content-type - application/json
app.use(bodyParser.json())

// parse request of content-type - application/x-www-form-urlencode
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.json({
        status: 200,
        message:"Welcome to index mern api scaffold"
    })
})

module.exports = app;