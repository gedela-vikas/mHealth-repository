var config = require.main.require('./config');
var Apoin = require.main.require("./server/modules/admin/appointment");
var mongoose = require('mongoose');

module.exports.appointmentsave = function (req, res, next) {
    var user_id = mongoose.Types.ObjectId(req.body.user);
    var coach_id = mongoose.Types.ObjectId(req.body.coach);

    req.body.user=user_id;
    req.body.coach=coach_id;
    var appointment=new Apoin(req.body);
    appointment.save(function(err,result){
        if(err) throw err;
        res.send(result);
    })

};

/************ Show all Appointments ************/

module.exports.findall=function(req,res,next){
   Apoin.find().populate('user coach').exec(function(err,result){
      if(err) return res.status(500).send("error in query execution");
       res.send(result);
        
    })
}

/************* View Appointment ***************/

module.exports.findByOne=function(req,res,next){
      var id=mongoose.Types.ObjectId(req.params.id);
   Apoin.find({_id: id}).populate('user coach').exec(function(err,result){
       
      if(err) return res.status(500).send("error in query execution");
       res.send(result);
        
    })
}

/******************* edit appointment ******************/

/*module.exports.editAppointment=function(req,res,next){
     Apoin.findByIdAndUpdate(req.body._id,{
       $set: {
       user.firstname: req.body.user.firstname,
        coach.firstname: req.body.coach.firstname,
            apointdetail: req.body.apointdetail
            
   },
   }).populate('user coach').exec(function(err,result){
       
      if(err) return res.status(500).send("error in query execution");
       res.send(result);
        
    })
}*/

/**************** delete appointment *********************/

module.exports.delete=function(req,res,next){
     Apoin.findByIdAndRemove(req.body._id).populate('user coach').exec(function(err,result){
      if(err) return res.status(500).send("error in query execution");
       res.send(result);
        
    })
}








