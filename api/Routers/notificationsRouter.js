const router = require("express").Router()
const requireLogin = require("../Middlewares/requireLogin")
const Notification = require("../Models/notifications.model")

router.route("/")
.get(requireLogin, (req, req)=>{
    Notification.find({user: req.user})
    .then(resp => res.json(resp.data))
    .catch(err => res.json({message: "An error occured"}))
})
.post(requireLogin, (req, res)=>{
    const notification = req.body
    notification.user = req.user
    new Notification(notification).save()
    .then(resp => res.json({message: "It was successful"}))
    .catch(err => res.json({message: "An error occured"}))
})

module.exports = router