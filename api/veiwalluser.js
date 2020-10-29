const express = require('express');
const  login = require('../models/userModel');
const router = express.Router();
 
router.get('/',function(req,res){
    console.log('Showing all  logged in users  data ');
    login.find({},function(err,data){
        res.send(data);
    })
})

module.exports = router;