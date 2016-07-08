var express = require('express');
var api=require('./server/routes/user');
var ctrl = require('./server/routes/api_routes');
var appointmentapi=require('./server/routes/apointment');
var auth = require('./server/routes/authUser');
var authenticate = require('./server/routes/authUser2');
var http = require('http');
var path = require('path');
var morgan = require('morgan');

//var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: 'true' }));
app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/appointment',appointmentapi);
app.use('/api',api);
app.get('/people', auth.token, ctrl.people);
app.post('/surveysList', auth.token, ctrl.surveysList);
app.post('/people', auth.token, ctrl.postPeople);
app.post('/changeStatus', auth.token, ctrl.changeStatus);
app.get('/surveys', auth.token, ctrl.surveys);
app.post('/surveys', auth.token, ctrl.postSurveys);
app.get('/questions', auth.token, ctrl.questions);
app.get('/',function(req,res){
    res.sendFile(__dirname +'/public/index.html')
});
app.get('/start/:eMail', authenticate.token, ctrl.start);
app.post('/update/:_id', authenticate.token, ctrl.update);
app.post('/login', ctrl.login);
app.post('/signup', ctrl.signup);
app.get('/profile/:eMail', authenticate.token, ctrl.profile);
app.post('/edit/:eMail', authenticate.token, ctrl.edit);
app.post('/changePassword/:eMail', authenticate.token, ctrl.changePassword);
app.get('/forgotPassword/:eMail', ctrl.forgotPassword);
app.post('/test',function(req,res){
  res.send(req.body);
});
app.set('port', process.env.PORT || 8000);
var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//module.exports = app;












































































































//var express = require('express');
//var http = require('http');

//var app = express();

//app.set('port', process.env.PORT || 8000);
//var server = http.createServer(app);
//server.listen(app.get('port'), function(){
// console.log('Express server listening on port ' + app.get('port'));
//});

//var http=require('http');

//var server=http.createServer(function(req,res){
  //  res.end('test');
//});

//server.on('listening',function(){
  //  console.log('ok, server is running');
//});

//server.listen(3000);
