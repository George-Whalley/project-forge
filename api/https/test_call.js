var express = require('express');
var cors = require("cors");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');

const https = require('https');
const { data } = require('jquery');

/* GET users listing. */
var app = express();

// view engine setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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


https.get('https://apps.runescape.com/runemetrics/profile/profile?user=Homados&activities=20', res => {
  let data = [];
  const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
  console.log('Status Code:', res.statusCode);
  console.log('Date in Response header:', headerDate);

  res.on('data', chunk => {
    data.push(chunk);
  });

  res.on('end', () => {
    console.log('Response ended-test: ');
    const users = JSON.parse(Buffer.concat(data).toString());
    console.log(users);
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
