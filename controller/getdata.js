const express = require('express');
const  login = require('../models/schema');
const router = express.Router();
 
router.get('/',function(req,res){
    console.log('getting user data ');
    login.find({},function(err,data){
        res.send(data);
    })
})
module.exports = router;