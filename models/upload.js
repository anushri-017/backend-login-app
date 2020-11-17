const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/register-login-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
 const connect = mongoose.Collection;

const uploadSchema = new mongoose.Schema({
    profileImage :String,
});

const uploadModel = mongoose.model("upload_files" + uploadSchema);
 module.exports = uploadModel;
