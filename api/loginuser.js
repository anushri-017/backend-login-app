const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const login = require("../models/userModel");
const jwt = require('jsonwebtoken');

router.post('/', function (req, res) {
    let userdata = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(userdata)
    if (userdata.username || userdata.password){
        login.findOne({username:userdata.username})
        .then((user)=>{
        if(!user) 
        return (
        res.json({msg:"User does not exists"}),
        console.log("User  does not exits"))

        bcrypt.compare(userdata.password,user.password)
        .then((isMatch) =>{
            if(!isMatch) 
            return( res.status(400).json({
                msg:"Invalid Password"} ),
            console.log("Invalid Password"))

            let token = jwt.sign(userdata, global.config.secretKey, {
                algorithm: global.config.algorithm,
                expiresIn: '7d'
            });
            res.status(200).json({
                msg: 'Login Successful',
                jwtoken: token
            });
            console.log("Login Successfull",token)
        })
        .catch(err =>{
            console.log(err)
        })
    })
}
    else {
            res.status(401).json({
                msg: 'Login Failed',
            });
            console.log('login failed');
        }
        });
 
module.exports = router;