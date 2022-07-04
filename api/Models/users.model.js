const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type: String},
    password: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    otherNames: {type: String},
    sex: {type: String},
    age: {type: String},
    genotype: {type: String},
    bloodGroup: {type: String},
    disability: {type: Boolean},
    height: {type: String},
    weight: {type: String},
},
{
    timestamps: true
})

const User = mongoose.model("User", userSchema)
module.exports = User