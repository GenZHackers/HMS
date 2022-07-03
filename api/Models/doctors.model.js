const mongoose = require("mongoose")
const Schema = mongoose.Schema

const doctorSchema = new Schema({
    name: {type: String},
    category: {type: String},
    profilePicture: {type: String},
    yearsOfExperience: {type: Number},
    gender: {type: String},
    phoneNumber: {type: Number},
    email: {type: String}
})

const Doctor = mongoose.model("Doctor", doctorSchema)
module.exports = Doctor