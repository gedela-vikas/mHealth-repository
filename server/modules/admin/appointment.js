'use strict';

var asyn=require("async");
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var AppointmentSchema = new Schema({
    serialno:{type: String,default: 0},
    user: { type: Schema.Types.ObjectId, ref: 'Fitt' },
    coach: { type: Schema.Types.ObjectId, ref: 'Fitt' },
    apointtitle: {type: String},
    apointdetail: {type: String},
    startAt:{type:Date},
    endAt:{type:Date},
    panchdtn: {type: Date,default: Date.now()}
});

var apoin = mongoose.model('Appoint', AppointmentSchema);

module.exports = apoin;
