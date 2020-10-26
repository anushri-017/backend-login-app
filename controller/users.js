const express = require('express');
const router =  express.Router();
let jwt = require ('jsonwebtoken');

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
    });

router.post('/', function (req, res, next) {
    let userdata = {
    username: req.body.username,
    password: req.body.password
    };

    if (userdata.username == "anushri"  && userdata.password == "1234") {
        let token = jwt.sign(userdata, global.config.secretKey, {
            algorithm: global.config.algorithm,
            expiresIn: '7d'
            });
    res.status(200).json({
    message: 'Login Successful',
    jwtoken : token
    });
    console.log('login successfull');
    }

    else {
    res.status(401).json({
    message: 'Login Failed',
    });
    console.log('login failed');
    }
    });






    module.exports  =  router;