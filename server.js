'use strict';
var express = require('express');
var port = process.env.PORT || 3000;
const app = express();
const cookierParser = require('cookie-parser')
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var session = require('express-session');
var path = require('path');

const ngrok = require('ngrok');

var mongoose = require('mongoose');

//Configurations
app.set('views', './app/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cookierParser())

app.locals.mongoose = mongoose;

var routes = require('./app/routes/app_routes'); //importing routes
routes(app); //telling app the use these routes

ngrok.authtoken('1yfELKhCf5e3C3Jb4gZAK4jsb7h_53VPEgSiP8MjjJ85YJYaZ');

const url = ngrok.connect(port, function (err, url) {
    if (err) return console.log(`Something bad happened: ${err}`);
    console.log(`Node.js local server is publicly-accessible at ${url}`);
});

console.log(url);

app.listen(port, (err) => {

    if (err) return console.log(`Something bad happened: ${err}`);
    console.log(`Node.js server listening on ${port}`);

});


