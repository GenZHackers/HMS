const Feed = require("../Models/feeds.model")
const router = require("express").Router()


router.route("/")
.get((req, res)=>{
    Feed.find()
    .then(resp => res.json(resp.data))
    .catch(err => res.json({message: "An error occured"}))
})
.post((req, res)=>{
    const feed = req.body
    new Feed(feed).save()
    .then(resp => res.json({message: "Successful"}))
    .catch(err => res.json({message: "An error occured"}))
})

module.export = router