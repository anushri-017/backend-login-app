const express = require('express');
const verifytoken = require('./verifytoken');
const  login = require('../models/userModel');
const router = express.Router();
 
router.get('/:id',verifytoken,function(req,res){
    const username = {username:req.params.id}
    console.log(username);
    login.findOne(username,function(err,data){
        if  (err) throw err 
        res.send(data);
    })
})
module.exports = router;