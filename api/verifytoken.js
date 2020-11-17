const express = require ('express');
const   router = express.Router();
const jwt = require('jsonwebtoken')
 
router.use(function (req, res, next) {
var jwtoken = req.headers['x-access-token'];
console.log(jwtoken);
if (jwtoken) { jwt.verify(jwtoken, global.config.secretKey,{
    algorithm: global.config.algorithm},
     function (err, decoded) {
    if (err) {
    let errordata = {
    message: err.message,
    expiredAt: err.expiredAt
    };
    console.log(errordata);
    return res.status(401).json({
    message: 'Unauthorized Access'
    });
    }
    req.decoded = decoded;
    console.log(decoded);
    next();
    });
    } else {
    return res.status(403).json({
    message: 'Forbidden Access'
    });
    }
    });


module.exports = router;