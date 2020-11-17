const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/register-login-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
const db = mongoose.connection;
db.once('open', function () {
    console.log('Mongodb connected Successfully');
});

const logSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String,required: true, unique: true},
    email: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    signupDate: { type: Date, default: Date },
    profileImage:{type:String}
})
logSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next()
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err)
            }
            user.password = hash;
            next()
        })
    })
})
const login = mongoose.model('logins', logSchema);
module.exports = login;
