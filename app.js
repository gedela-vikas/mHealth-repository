var express = require('express');
var api=require('./server/routes/user');

var appointmentapi=require('./server/routes/apointment');
var http = require('http');
var path = require('path');
var morgan = require('morgan');

//var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
/*app.all('/*', function(req, res, next) {
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
});*/
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/appointment',appointmentapi)
app.use('/api',api)
app.get('/',function(req,res){
    res.sendFile(__dirname +'/public/index.html')
})
app.set('port', process.env.PORT || 3000);
var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;