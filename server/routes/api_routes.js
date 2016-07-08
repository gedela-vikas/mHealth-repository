var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
var jwt = require("jsonwebtoken");
var peopleSchema = require('../modules/peopleSchema');
var surveysSchema=require('../modules/surveysSchema');
var questionsSchema=require('../modules/questionsSchema');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = '12345678';
function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
module.exports = {
	start: function(req, res) {
		var eMail = req.params.eMail;
		peopleSchema.findOne({eMail: eMail}, function(err,obj) {
			var userID = obj._id;
			var survey = new surveysSchema({userID: userID});
			survey.save(function(error, data) {
                    		if(err) {
                        		res.status(501).send({ 
						error: error,
						message: 'NOT SAVED'
					});
				} else {
					res.status(200).send({
						results: data,
						message: 'SAVED' 
					});
				}
			});
		});
	},
	update: function(req, res) {
		var response = req.body;
		var ID = req.params._id;
		surveysSchema.findByIdAndUpdate(ID, {$set: response}, {new: true}, function(err, results) {
			if(!results) {
				res.status(404).send({ 
					error: err,
					message: 'NOT FOUND'
				});
			} else {
				res.status(200).send({ 
					results: results,
					message: 'FOUND'
				});
			}
		});
	},
    signup: function(req, res) {
        console.log("signup-------1-------->" + JSON.stringify(req.body));
        var details = req.body;
    details.passWord = encrypt(req.body.passWord);
    var eMail = req.body.eMail;
        var person = new peopleSchema(details);
        peopleSchema.findOne({eMail: eMail}, function(err, results) {
            console.log("signup------2-------->" + JSON.stringify(results));
            if (!results) {
                person.save(function(error, data) {
                    if(err) {
                        res.status(501).send({ 
                            error: error,
                            message: 'NOT SAVED'
                        });
                    } else{
                        res.status(200).send({
                            results: data,
                            message: 'SAVED' 
                        });
                    }
                });
            } else {
                res.status(400).send({
                    error: err,
                    message: 'EMAIL ALREADY EXISTS' 
                });
            }
        });
    },
    login: function(req, res) {
        console.log("login--------1------->" + JSON.stringify(req.body));
        var userName = req.body.userName;
        var eMail = req.body.eMail;
        var passWord = encrypt(req.body.passWord);
        peopleSchema.findOne({
          $or: [{userName: userName},
                {eMail: eMail}
               ],
               passWord: passWord
        },function (err, results) {
            console.log("login-------2------->" + JSON.stringify(results));
            if (!results) {
                res.status(404).send({
                    error: err,
                    message: 'NOT FOUND' 
                });
            } else {
               var token = jwt.sign(results, "secretKey");
			res.status(200).send({
                    results: results,
                    message: 'FOUND',
					token: token
                });
            }
        });
    },
    profile: function(req, res) {
        console.log("profile--------------->" + JSON.stringify(req.params));
        var eMail = req.params.eMail;
        peopleSchema.findOne({eMail: eMail}, function(err,results){
            if (!results) {
                res.status(404).send({
                    error: err,
                    message: 'NOT FOUND'
                });
            } else {
                res.status(200).send({
                    results: results,
                    message: 'FOUND'
                });
            }
        });
    },
    edit: function(req, res) {
        console.log("edit-------1-------->" + JSON.stringify(req.body));
        console.log("edit-------2-------->" + JSON.stringify(req.params));
        var salutation = req.body.salutation;
        var userName = req.body.userName;
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var eMail = req.body.eMail;
	var imageFile = req.body.imageFile;
        var originalEmail = req.params.eMail;
		if( eMail == originalEmail ) {
        peopleSchema.findOneAndUpdate({eMail: originalEmail}, {
              $set: {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                salutation: salutation,
                eMail: eMail,
		imageFile: imageFile
              }
        }, {new: true}, function(err, results) {
                  if(!results) {
                    res.status(404).send({ 
                        error: err,
                        message: 'NOT FOUND'
                    });
                  } else {
                      res.status(200).send({ 
                        results: results,
                        message: 'FOUND'
                      });
                  }
        });
		} else {
        peopleSchema.findOne({eMail: eMail}, function(err, results) {
            console.log("signup------2-------->" + JSON.stringify(results));
            if (!results) {
        peopleSchema.findOneAndUpdate({eMail: originalEmail}, {
              $set: {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                salutation: salutation,
                eMail: eMail,
		imageFile: imageFile
              }
        }, {new: true}, function(err, results) {
                  if(!results) {
                    res.status(404).send({ 
                        error: err,
                        message: 'NOT FOUND'
                    });
                  } else {
                      res.status(200).send({ 
                        results: results,
                        message: 'FOUND'
                      });
                  }
        });
            } else {
                res.status(400).send({
                    error: err,
                    message: 'EMAIL ALREADY EXISTS' 
                });
            }
        });
		}
    },
    changePassword: function(req,res,next) {
        var eMail = req.params.eMail;
        var passWord = req.body.passWord;
        var originalPassword = encrypt(req.body.originalPassword);
        console.log("changePassword-------1------->" + JSON.stringify(req.body));
        console.log("changePassword-------2------->" + JSON.stringify(req.params));
        peopleSchema.findOneAndUpdate({eMail: eMail, passWord: originalPassword}, {
          $set: {
            passWord: passWord
          }
        }, {new: true}, function(err, results) {
          if(!results) {
              res.status(404).send({ 
                  error: err,
                  message: 'NOT FOUND'
              });
          } else {
              res.status(200).send({
                  results: results,
                  message: 'FOUND'
              });
          }
        });              
    },
    forgotPassword: function(req, res) {
        console.log("forgetPassword--------------->" + JSON.stringify(req.params));
        var eMail = req.params.eMail;
        var random = Math.random().toString(36).slice(-8);
				var passWord = encrypt(random);
        peopleSchema.findOneAndUpdate({eMail: eMail}, {
          $set: {
            passWord: passWord
          }
        }, {new: true}, function(err, results) {
			if(!results) {
				res.status(404).send({ 
					error: err,
					message: 'NOT FOUND'
				});
			} else {
				transporter.sendMail({
					from: 'mHealth@email.com',
					to: eMail,
					subject: 'mHealth',
					text: 'Your mHealth password is changed to ' + random
				});
				res.status(200).send({ 
					results: results,
					message: 'EMAIL SEND TO ' + eMail
				});
			}
        }); 
    },
	people: function(req, res) {
		console.log("people-------------");console.log(req.body);
		peopleSchema.find({}, function (err, docs) {
  		// docs is an array
  			console.log(docs);
  			res.send(docs);
		});
	},
	postPeople: function(req, res) {
		console.log("postPeople-------------");console.log(req.body);
		var id=req.body._id;
		var data={};
		data.salutation=req.body.salutation;
		data.firstName=req.body.firstName;
		data.lastName=req.body.lastName;
		data.eMail=req.body.eMail;
		data.userName=req.body.userName;
		peopleSchema.findByIdAndUpdate(id, data, {new: true}, function (err, docs) {
  		// docs is an array
  			console.log(docs);
  			res.send(docs);
		});
	},
	changeStatus: function(req, res) {
		console.log("changeStatus-------------");console.log(req.body);
		var id=req.body._id;
		var data={};
		data.status=!req.body.status;
		peopleSchema.findByIdAndUpdate(id, data, {new: true}, function (err, docs) {
  		// docs is an array
  			console.log(docs);
  			res.send(docs);
		});
	},
	questions: function(req, res) {
		console.log("questions-------------");console.log(req.query);
		questionsSchema.find({}, function (err, docs) {
  		// docs is an array
  			console.log(docs);
  			res.send(docs);
		});
	},
	surveys:function(req, res){
		console.log("surveys----------------");console.log(req.body);
		surveysSchema.find({}, function (err, docs) {
  		// docs is an array
  			console.log(docs);
  			res.send(docs);
		});
	},
	surveysList:function(req, res){
		console.log("surveysList----------------");console.log(req.body);
		surveysSchema.find({userID:req.body._id}, function (err, docs) {
  		// docs is an array
  			console.log(docs);
  			res.send(docs);
		});
	},
	postSurveys:function(req, res){
		console.log("postSurveys----------------");console.log(req.body);
		var id=req.body._id;
		var a=req.body.a;
		var QNo=req.body.QNo;
		var data={};
		data[QNo]=a;
		surveysSchema.findByIdAndUpdate(id, data, {new: true}, function (err, docs) {
  		// docs is an array
  			console.log(docs);
  			res.send(docs);
		});
	}
}
