const requireLogin = require("../Middlewares/requireLogin")
const Appointment = require("../Models/appointments.model")
const router = require("express").Router()

router.route("/")
.get((req, res)=>{
    Appointment.find().populate("doctor").populate("user")
    .then(resp => res.json(resp.data))
    .catch(err => res.json({message: "An error occured"}))
})
.post(requireLogin, (req, res)=>{
    const appointment = req.body
    appointment.user = req.user
    new Appointment(appointment).save()
    .then(resp => res.json({message: "Succesfull"}))
    .catch(err => res.json({message: "An error occured"}))
})

module.exports = router