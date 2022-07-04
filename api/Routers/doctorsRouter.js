const router = require('express').Router();
const Doctor = require('../Models/doctors.model')

router.route("/")
.get((req, res)=>{
    Doctor.find()
    .then(resp => res.json(resp.data))
    .catch(err => res.json({message: "An error occured"}))
})
.post((req, res)=>{
    const doctor = req.body
    new Doctor(doctor).save()
    .then(resp => res.json({message: "Succesful"}))
    .catch(err => res.json({message: "An error occured"}))
})

module.exports = router