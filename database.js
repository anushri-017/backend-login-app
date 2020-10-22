const  login =  require('./models/schema');

function connectdb (arg){
    console.log(login)

 const  logindata = new login({
     username:arg.username,
     password:arg.password,
     cnfpassword:arg.cnfpassword,
     email:arg.email,
     country:arg.country
 })
 
 logindata.save(function(err,data){
     if(err)return console.error(err);
 })
}

module.exports = {
    db:connectdb
}
