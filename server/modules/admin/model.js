'use strict';

var asyn=require("async");
/*var crypto = require('crypto'),
     algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/* FitnessApp schema */

var FitnessSchema = new Schema({
    
     usertype: {
        type: String,
        trim: true
                },
    username: {
        type: String,
        trim: true
    },
     adminpsw: {
        type: String,
        trim: true
    },
     firstname: {
        type: String,
        trim: true
                },
    lastname: {
        type: String,
        trim: true
              },
     email: {
        type: String,
        trim: true
            }, 
    contact: {
        type: String,
        trim: true
             },
    profession:{
        type: String,
        trim:true
               },
      age:{
        type: String,
        trim: true
          },
    tc:{
        type:String,
        trim:true
    },
    pp:{
        type:String,
        trim:true
    },
    
     panchdtn: {
      type: Date,
      default: Date.now()
    }

});


var user = mongoose.model('Fitt', FitnessSchema);



/*
function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
*/
module.exports = user;

function initDB(){
    asyn.waterfall([
        function(callback){
        user.find({},function(err,result){
            if(err)throw err;
            
            callback(null,result);
        })
    },
    function(adminUser,callback){
        if(adminUser.length>0)
             callback(null,{adminUser:adminUser});
        else{
        var defaultUser={
              username: 'deepak',
              adminpsw: 'dddd',
              email:'deepakvts75@gmail.com'
            }
        /*defaultUser.adminpsw = encrypt(defaultUser.adminpsw);*/
       
        var Fitt = new user(defaultUser);
        Fitt.save(function(err,result){
            callback(null,{adminUser:defaultUser});
        })
        }
    }],function(err,result){
        if(err) throw err;
        
       /* console.log("DB initialize-->",result);*/
    })
}
initDB();

