const mongoose = require("mongoose")
const Schema = mongoose.Schema

const notificationSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:"User" },
    message: {type: String},
    type: {type: String}
},
{
    timestamps: true
})

const Notifications = mongoose.model("Notifications", notificationSchema) 
module.exports = Notifications