const express =require("express");
const {check,validationResult} = require('express-validator');
const router = express.Router();
const database = require('../database');
const multer = require('multer');

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/')
    },
    filename:function(req,file,cb){
        cb(null, Date.now() + file.originalname)
    }
})

var upload = multer({
    storage:storage
})

router.post('/', upload.single('profileImage'),
[
    check('username').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape(),
    check('country').not().isEmpty().trim().escape(),
    check('email').isEmail().normalizeEmail()
],
function(req,res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({
            message:"Form validation failed",
            errors:errors.array()
        })
    }  
    var fileinfo = req.file;
   console.log(fileinfo)
    res.json( {
        message:'Registered succesfully'
    });
    console.log('Saved to database');
    console.log(req.body);
    console.log(database.db(req.body))
})

 module.exports = router;