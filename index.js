const express = require('express');  
const bodyParser = require('body-parser');
const cors = require('cors');
const getdata = require('./controller/getdata');
const postdata = require('./controller/createdata');
const  login = require('./controller/users');
const passport = require("passport");

global.config = require ('./config');
const app =express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize());

app.use(cors())

app.use('/signup',postdata)
app.use('/login',login)
app.use('/viewusers',getdata)



app.listen(port, () => {
    console.log(`server running on ${port}`)
})
