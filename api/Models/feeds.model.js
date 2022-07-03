const mongoose = require("mongoose")
const Schema = mongoose.Schema

const feedSchema = new Schema({
    title: {type: String},
    image: {type: String},
    content: {type: String},
    likes: {type: Number},
},
    {
        timestamps: true
    }
)

const Feeds = mongoose.model("Feeds", feedSchema)
module.exports = Feeds