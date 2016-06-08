var express = require('express');
var api=require('./server/routes/user');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
/*var authUser = require('./authUser');
var globalVars = require('./globalVars');*/

//var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

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