var createError = require('http-errors'); // Used for generating errors
var express = require('express'); // Framework for making API calls
var path = require('path'); // Managing file directorys
var cookieParser = require('cookie-parser'); // Access cookie data from the request header
var logger = require('morgan'); // Middleware function and logging
var cors = require("cors"); // Cross origin enable
const https = require('https'); // HTTP commands

// ROUTES (API's)
var indexRouter = require('./routes/index'); // Index API
var testing_api = require("./routes/testing_api"); // Test API
var mongo_db_testing_api = require("./routes/mongo_db_testing_api"); // Mongo DB API
var runescapeRouter = require("./routes/runecape_apis"); // Runescape API
var newrunescapeRouter = require("./routes/new_runescape_apis"); // Runescape API

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

app.use('/', indexRouter); // Index route
app.use("/testing_api", testing_api); // Test API route
app.use("/mongo_db_testing_api", mongo_db_testing_api); // Mongo DB route
app.use("/runescape_apis", runescapeRouter); // Runescape route
app.use("/new_runescape_apis", newrunescapeRouter); // New Runescape route

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
