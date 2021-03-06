createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
require('dotenv').config();
const favicon = require('serve-favicon');

var indexRouter = require('./routes/index');


var app = express();

const PORT = process.env.PORT;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


const authRoutes = require("./routes/auth");
const indexRoute = require('./routes/index');
const wishListRoute = require('./routes/wishList');
const vacationRoute = require('./routes/vacation');



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}),
() => {
    console.log("mongodb connected successfully!");
};







// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use('/', indexRoute);
app.use('/', authRoutes);
app.use('/', wishListRoute);
app.use('/', vacationRoute);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`App is running on ${PORT}`));
module.exports = app;