const express = require('express');
const  login = require('../models/userModel');
const router = express.Router();
 
router.get('/',function(req,res){
    login.find({},function(err,data){
        if  (err){
            console.log(err);
        }
        else{
            res.send(data);
        } 
    })
})

module.exports = router;