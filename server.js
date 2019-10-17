const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var compression = require('compression');
const path = require('path');
const http = require('http');
const app = express();
var https = require('https');
// API file for interacting with MongoDB
const api = require('./server/api');
var session = require('express-session');
var port = process.env.port || 4000;
// bodyParser for form submit
app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({limit: '25mb', extended: true}));
app.use(cookieParser());
app.use(compression());


// CORS Headers
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
// Angular DIST output folder
 app.use(express.static(path.join(__dirname, 'dist/aegon')));
// API location
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'aegon@360',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

var options = {

};

app.use('/', api);
// Send all other requests to the Angular app
 app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'dist/aegon/index.html'));
 });
http.createServer(app).listen(port);
https.createServer(options, app).listen(5000);
//app.listen(5000);
console.log('APP STARTED'+port);
