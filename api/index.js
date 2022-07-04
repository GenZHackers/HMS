const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()




const port = process.env.PORT || "8888"
const uri = "mongodb://localhost:27017/HMS"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')})


app.use(cors({
    origin: "*"
}))


app.listen(port, ()=>{console.log(`Server ${port} is running.`)})