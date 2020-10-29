const express = require('express');  
const bodyParser = require('body-parser');
const cors = require('cors');
const veiwallusers = require('./api/veiwalluser');
const veiwloggeduser = require('./api/userProfile');
const postdata = require('./api/register');
const  login = require('./api/loginuser');
const passport = require("passport");

global.config = require ('./config');
const app =express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize());

app.use(cors())

app.use('/register',postdata)
app.use('/login',login)
app.use('/viewusers',veiwallusers)
app.use('/loggedinuser',veiwloggeduser)


app.listen(port, () => {
    console.log(`server running on ${port}`)
})
