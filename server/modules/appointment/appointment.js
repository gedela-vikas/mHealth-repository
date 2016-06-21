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

module.exports.findall=function(req,res,next){
    Apoin.find().populate('user').exec(function(err,result){
        res.send(result);
    })
}