var path = require('path');
var user = require('./user')
var express = require('express');
var router =express.Router();
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var appointment = require.main.require("./server/modules/appointment/appointment");
var jwt = require('jsonwebtoken');
var authUser = require('./authUser');


//,authUser.authUser
router.post('/save', appointment.appointmentsave);
router.post('/appointdelete',appointment.delete);
/*router.post('/editAppointment',appointment.editAppointment);*/


router.get('/find', appointment.findall);
router.get('/appointDetail/:id',appointment.findByOne);

module.exports=router