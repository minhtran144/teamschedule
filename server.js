'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
config       = require('./config'),
server       = express(),
mongoose     = require('mongoose'),
TeamInfo     = require('./API/models/TeamInfo'), //created model loading here
GameSchedule = require('./API/models/GameSchedule'),
demomodel    = require('./API/models/demomodel');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
  console.log("Connection Successful!");
});


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
var routes = require('./API/routes/Routes'); //importing route
routes(server); //register the route


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});




