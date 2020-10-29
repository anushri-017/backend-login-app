const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const login = require("../models/userModel");
let jwt = require('jsonwebtoken');

router.post('/', function (req, res) {
    let userdata = {
        username: req.body.username,
        password: req.body.password
    }
     
    if (!userdata.username ||  !userdata.password){
        return res.status(400).json({msg:"Please enter all feilds"});
    }
    
    login.findOne({username:userdata.username}).then((user)=>{
        if(!user) return res.status(400).json({msg:"user Does not exists"});

        bcrypt.compare(password,user.password).then((isMatch) =>{
            if(!isMatch) return res.status(400).json({msg:"Invalid Password"});
        })
    })
    // if (login.findOne({ username: userdata.username })
    //     && login.findOne({ password: userdata.password })) {
    //     bcrypt.compare(userdata.password, login.password, function (resBcrypt) {
    //         if (!resBcrypt) {
    //             return console.log("Authentication Failed.Wrong Password");
    //         }}
    // )}
    let token = jwt.sign(userdata, global.config.secretKey, {
        algorithm: global.config.algorithm,
        expiresIn: '7d'
    });
    res.status(200).json({
        message: 'Login Successful',
        jwtoken: token
    });
    console.log('login successfull');
    console.log(token);
    
//     else {
//     res.status(401).json({
//         message: 'Login Failed',
//     });
//     console.log('login failed');
// }
});
module.exports = router;