const  express  = require('express');
const router = express.Router();
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

router.get('/picUpload',function(req,res,next){
    res.render('create')
});

router.post ('/upload',upload.single('profileImage'),function(req,res,next){
    var fileinfo = req.file;
    res.send(fileinfo)
})
module.exports = router;