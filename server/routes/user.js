var path = require('path');
//var user = require('./user')
var express = require('express');
var router =express.Router();
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var user = require.main.require("./server/modules/user/user");
var jwt = require('jsonwebtoken');
var authUser = require('./authUser');

router.post('/login', user.login);
router.post('/forgotPass', user.forgotPass);
// router.post('/edit',authUser.authUser, user.edit);
// router.post('/sendEmail', user.sendEmail);
// router.post('/change',authUser.authUser, user.change);
// router.post('/delete',authUser.authUser,user.delete);
// router.post('/tcsave',authUser.authUser,user.tcsave);
// router.post('/ppsave',authUser.authUser,user.ppsave);
/*router.post('/createUser', user.createUser);*/

// router.get('/tc/:type/',authUser.authUser,user.tc);
// router.get('/pp/:type/',authUser.authUser,user.pp);
// router.get('/user/:type/',authUser.authUser,user.all);
// router.get('/userDetail/:id',authUser.authUser,user.findByOne);


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.post('/sendEmail', user.sendEmail);


module.exports=router