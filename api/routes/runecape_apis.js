// Get packages required
var express = require('express'); // Express 
var router = express.Router(); // Routing
var cors = require("cors"); // Cors config
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path'); // Used in API
const https = require('https'); // API calls
const { data } = require('jquery'); // Data manipulation? 

// Create a express function called app
var app = express();

// Request setup
app.use(cors()); // Prevent cors issue
app.use(logger('dev')); // Environment setting
app.use(express.json()); // Express function for JSON
app.use(express.urlencoded({ extended: false })); // ?
app.use(cookieParser()); // ?
app.use(express.static(path.join(__dirname, 'public'))); // ?

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Mak GET call
https.get('https://apps.runescape.com/runemetrics/profile/profile?user=Homados&activities=20', res => {
  // Define data var to store response
  let data = [];
  // Set the header date / response data
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  // Dev Statements
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);
  // On response
  res.on('data', chunk => {
    // Remove chunck transfer encoding
    data.push(chunk);
  });

  // On respoonse - end of data
  res.on('end', () => {
    // Dev Statement
    console.log('Response ended-test: ');
    // Store the data in USERS parsed into JSON
    const users = JSON.parse(Buffer.concat(data).toString());
    // Dev Statement
    console.log(users);
    // On GET call made to the NODE JS URL
    router.get('/', function(req, res, next) {
      // Return Message
      // res.send("Making Request: ");
      // Return Message
      res.json(users);

    });
  });

  // If there is a error
  }).on('error', err => {
    // Return error message
    console.log('Error: ', err.message);
  });


// Export the router settings?
module.exports = router;