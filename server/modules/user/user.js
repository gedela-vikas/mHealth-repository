var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var User = require.main.require("./server/modules/admin/model");
var nodemailer = require('nodemailer');

mongoose.connect('mongodb://localhost/fitness');

//Login functionality 

module.exports.login = function (req, res) {
    console.log("req data-->" + JSON.stringify(req.body));
    var username = req.body.username;
    var adminpsw = req.body.adminpsw;

    User.findOne({
        username: username,
        adminpsw: adminpsw
    }).exec(function (err, user) {
        console.log("Succsess>>>" + JSON.stringify(user));
        if (err) throw err;

        if (!user) {
            console.log('sorry Your id or password is incorrect');
            return res.status(404).send();

        }
        res.send({
            msg: "Log in successfully",
            user
        });
    });

}

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
        res.send({
            msg: "change your password",
            user
        });
    });

}

module.exports.sendEmail = function (req, res, next) {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "deepakvts75@gmail.com",
            pass: "hisar28592"
        }
    });
    var link = "http://localhost:3000/#/login";
    var mailOption = {
        from: "deepakvts75@gmail.com",
        to: req.body.email,
        subject: 'FitnessApp Change Password ',
        text: 'you have a new submission with following details',
        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
    }
    console.log("data in req" + req.body.email);
    console.log("Dta in mailOption : " + JSON.stringify(mailOption));
    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log("error----->>>" + error);
            res.end("error");
        } else {
            console.log('message Sent');
            console.log("data in info" + JSON.stringify(info));
            res.end("sent");
        }

    });
}

module.exports.all = function (req, res, next) {

      User.find({
        usertype: req.params.type
    }).exec(function (err, user) {
        if (err)
            return res.error(err);

        return res.send(user);
    });
}

module.exports.findByOne = function (req, res, next) {

    console.log('anything----------' + req.params.id);

    User.find({
        _id: req.params.id
    }).exec(function (err, results) {
        if (err)
            return res.error(err);

        return res.send(results);
    });
}

module.exports.edit = function (req, res, next) {
    console.log(req.body);
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
module.exports.change = function (req, res, next) {
    console.log("sssss------->>>" + JSON.stringify(req.body));

    User.findByIDAndUpdate(req.body._id, {
            $set: {
                adminpsw: req.body.newpwd
            }
        },
        function (err, results) {
            if (err) return (err);
            res.send(results);
        });
}

module.exports.delete = function (req, res, next) {
    console.log("abcd----------" + JSON.stringify(req.body));
    User.findByIdAndRemove(req.body._id, function (err, results) {
        if (err) return (err);
        console.log(results);
        res.send(results);
    });
}