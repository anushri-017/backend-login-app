const express =require("express");
const login = require("../models/schema");
const {check,validationResult} = require('express-validator');
const database = require('../database');
const router = express.Router();

router.post('/',
[
    check('username').not().isEmpty().trim().escape(),
    check('password').not().isEmpty().trim().escape(),
    check('cnfpassword').not().isEmpty().trim().escape(),
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
    res.send( 'Saved  to database');
    console.log(req.body)
    console.log(database.db(req.body))
})
 module.exports = router;