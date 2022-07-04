const router = require('express').Router();
const User =require('../Models/users.model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const requireLogin = require('../Middlewares/requireLogin.js');
const { compareSync } = require('bcrypt');

const jwt_secret = process.env.JWT_SECRET

router.get('/all-users', async (req, res)=>{
    await User.find()
    .then((resp)=>res.status(200).json(resp))
    .catch(err=>res.status(404).json({error: "An error occured"}))
})


router.route('/signup').post(async (req, res)=>{
    const user = req.body;
    await bcrypt.hash(user.password, 8)
    .then(hashedpassword => {
        user.password = hashedpassword
        const newUser = new User(user)
        newUser.save()
        .then((resp)=>{
            res.json({user:resp})
        })
        .catch(err=>res.status(400).json({error:"An error occured"})) 
    })
   
})

router.route('/signin').post(async (req, res)=>{
    const {email, password} = req.body;
    await User.findOne({email})
    .then(user=>{
        if(!user){
            res.json({error: "There's no user with this email"})
        }
        else{
            bcrypt.compare(password, user.password)
            .then(doMatch=>{
                if(doMatch){
                    // res.json({message: `${user.email} has successfully signed in`})
                    const token = jwt.sign({_id: user._id}, jwt_secret)
                    res.json({token: token})
                }
                else{
                    res.json({error: "Wrong Password"})
                }
            })
        }
    })
})

router.get("/profile", requireLogin, (req, res)=>{
    const id = req.user._id
    User.findById(id)
    .then(resp => res.json(resp.data))
    .catch(err => res.json({message: "An error occured"}))
})

module.exports = router