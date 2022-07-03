const mongoose = require("mongoose")
const Schema = mongoose.Schema

const notificationSchema = new Schema({
    sender: {type: Schema.Types.ObjectId, ref:"User" },
    receiver: {type: Schema.Types.ObjectId, ref:"User" },
    message: {type: String},
},
{
    timestamps: true
})

const Notifications = mongoose.model("Notifications", notificationSchema) 
module.exports = Notifications