const express = require('express');  
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const  getdata = require('./controller/getdata');
const postdata = require('./controller/createdata');
const app =express();
const port = 5000;

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/logindata',postdata)
app.use('/getuserdata',getdata)

app.listen(port, () => {
    console.log(`server running on ${port}`)
})

