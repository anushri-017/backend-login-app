const  login =  require('./models/userModel');

function connectdb (arg){
    console.log(login)

 const  logindata = new login({
     username:arg.username,
     password:arg.password,
     email:arg.email,
     country:arg.country,
     profileImage:arg.profileImage
 })
 
 logindata.save(function(err,data){
     if(err)return console.error(err);
 })
}

module.exports = {
    db:connectdb
}
