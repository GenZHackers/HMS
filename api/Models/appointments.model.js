const mongoose = require("mongoose")
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    doctor: {type: Schema.Types.ObjectId, ref: "Doctor"},
    user:  {type: Schema.Types.ObjectId, ref: "User"},
    date: {type: Date},
    time: {type: String},
    category: String,
})

const Appointment = mongoose.model("Appointment", appointmentSchema)
module.exports = Appointment
