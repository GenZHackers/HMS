const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()

app.use(cors({
    origin: "*"
}))

const port = process.env.PORT || "8888"
app.listen(port, ()=>{console.log(`Server ${port} is running.`)})