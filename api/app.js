var createError = require('http-errors'); // Used for generating errors
var express = require('express'); // Framework for making API calls
var path = require('path'); // Managing file directorys
var cookieParser = require('cookie-parser'); // Access cookie data from the request header
var logger = require('morgan'); // Middleware function and logging
var cors = require("cors"); // Cross origin enable

// ROUTES (API's)
var r_index = require('./routes/index'); // Index API
var r_runescape = require("./routes/runescape"); // Runescape API
var r_blogs = require("./routes/blogs"); // Runescape API
var r_users = require("./routes/users"); // Runescape API

// CREATE APP
var app = express(); // Define the express function as a API

// APP / ENGINE SETUP
app.set('views', path.join(__dirname, 'views')); // Enable view engine
app.set('view engine', 'jade'); // Use the JADE files for the view engine

app.use(cors()); // Enable cors
app.use(logger('dev')); // Log as DEV
app.use(express.json()); // JSON calls
app.use(express.urlencoded({ extended: false })); // encoded URL disabled
app.use(cookieParser()); // Check cookies
app.use(express.static(path.join(__dirname, 'public'))); // Used to serve files

app.use('/', r_index); // Index route
app.use("/runescape", r_runescape); // New Runescape route
app.use("/blogs", r_blogs); // Mongo DB Blog route
app.use("/users", r_users); // Mongo DB User Route

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
