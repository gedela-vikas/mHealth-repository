var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var User = require.main.require("./server/modules/admin/model");
var Apoin = require.main.require("./server/modules/admin/appointment"); 
var nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
var config = require.main.require('./config');
var transporter = nodemailer.createTransport();



mongoose.connect('mongodb://localhost/mHealth');
//mongoose.connect('mongodb://localhost/fitness');

module.exports.login = function (req, res) {

    var username = req.body.username;
    var adminpsw = req.body.adminpsw;

    User.findOne({
        username: username,
        adminpsw: adminpsw
    }).exec(function (err, user) {
        if (err) throw err;
        
        else if(username==undefined){
       /* console.log("user-------------->"+username);*/
         return res.status(404).send();
        }
        
        else if (!user) {
            console.log('sorry Your id or password is incorrect');
            return res.status(404).send();

        }
               
        /* console.log(config);*/
        var token = jwt.sign(!user, config.secreteKey);
        res.header({
            "Token": token
        }).send({
            serverStatus: 0,
            msg: "login successfully",
            administrator:user
        });
        /*console.log("what is in token-->>>" + token);*/
     
        /* res.send({
             msg: "Log in successfully",
             user
         });*/
    });

}

/******************Forgot password*********************/

module.exports.forgotPass = function (req, res) {
    var emails = req.body.email;
    User.findOne({
        email: emails
    }).exec(function (err, user) {
        console.log("data in forgot>>>" + JSON.stringify(user));
        if (err) throw err;

        if (!user) {
            console.log('sorry Your id does not exists');
            return res.status(404).send();
        }
        var random = Math.random().toString(36).slice(-8);
        transporter.sendMail({
					from: 'mHealth@email.com',
					to: emails,
					subject: 'mHealth',
					text: 'Your mHealth password is changed to ' + random
				});
        res.send({
            msg: "change your password"
            // msg: "change your password",
            // user
        });
    });

}

/*************Send MAil*************************************/

module.exports.sendEmail = function (req, res, next) {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "deepakvts75@gmail.com",
            pass: "hisar@28592"
        }
    });
    var link = "http://localhost:3000/#/changePassword";
    var mailOption = {
        from: "deepakvts@gmail.com",
        to: req.body.email,
        subject: 'FitnessApp Change Password ',
        text: 'you have a new submission with following details',
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
    }
    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log("error-----ddd>>>" + error);
            res.end("error");
        } else {
            console.log('message Sent');
            console.log("data in info" + JSON.stringify(info));
            res.end("sent");
        }

    });
}

/***********Change Password ***************************/

module.exports.change = function (req, res, next) {
    User.findByIdAndUpdate(req.body._id, {
            $set: {
                adminpsw: req.body.newpwd

            }
        },
        function (err, results) {
            if (err) return (err);
            res.send(results);
        });
}

/**********************Data of User And Coach************/

module.exports.all = function (req, res, next) {
    User.find({
        usertype: req.params.type
    }).exec(function (err, user) {
        if (err)
            return res.error(err);

        return res.send(user);
    });
}

/*********************View User And Coach***************/

module.exports.findByOne = function (req, res, next) {
        User.find({
            _id: req.params.id
        }).exec(function (err, results) {
            if (err)
                return res.error(err);

            return res.send(results);
        });
    }
    /**************Edit user And Coach**************/

module.exports.edit = function (req, res, next) {
    User.findByIdAndUpdate(req.body._id, {
        $set: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            contact: req.body.contact,
            age: req.body.age,

        }
    }, function (err, results) {
        if (err) return (err);
        res.send(results);
    });

}

/********************Delete user and coach**************/

module.exports.delete = function (req, res, next) {
    User.findByIdAndRemove(req.body._id, function (err, results) {
        if (err) return (err);
        console.log(results);
        res.send(results);
    });
}


/***************Terms and Conditions***************/

module.exports.tc = function (req, res, next) {
    User.find({
        usertype: req.params.type
    }).exec(function (err, user) {
        if (err)
            return res.error(err);

        return res.send(user);
    });
}

module.exports.tcsave = function (req, res, next) {
    User.findOneAndUpdate({
        usertype: req.body.usertype
    }, {
        $set: {
            tc: req.body.tc,

        }
    }, function (err, results) {
        if (err) return (err);
        res.send(results);
    });

}

/***************Privacy Policy ***************/

module.exports.pp = function (req, res, next) {
    User.find({
        usertype: req.params.type
    }).exec(function (err, user) {
        if (err)
            return res.error(err);
        return res.send(user);
    });
}

module.exports.ppsave = function (req, res, next) {
        User.findOneAndUpdate({
            usertype: req.body.usertype
        }, {
            $set: {
                pp: req.body.pp,

            }
        }, function (err, results) {
            if (err) return (err);
            res.send(results);
        });

    }
 
