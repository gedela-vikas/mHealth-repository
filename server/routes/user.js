var path = require('path');
var user = require('./user')
var express = require('express');
var router =express.Router();
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var user = require.main.require("./server/modules/user/user");


router.post('/login', user.login);

router.post('/forgotPass', user.forgotPass);

router.post('/edit', user.edit);

router.post('/change', user.change);

router.post('/delete',user.delete);


router.get('/user/:type/',user.all);
router.get('/userDetail/:id',user.findByOne);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
router.post('/sendEmail', user.sendEmail);

module.exports=router