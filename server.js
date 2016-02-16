var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();

app.set('views', path.join(__dirname, 'docs'));
app.set('view engine', 'jade');


var webpackMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
webpackConfig.output.path = '/';
var compiler = webpack(webpackConfig);


var router = express.Router();
router.get('/', function (req, res) { res.render('index'); });
router.get('/typography', function (req, res) { res.render('typography'); });
router.get('/molecules', function (req, res) { res.render('molecules'); });
router.get('/pages/:page', function (req, res) { res.render('pages/'+req.params.page); });
router.get('/pages', function (req, res) { res.render('pages'); });


app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.use(logger('dev'));

app.use(webpackMiddleware(compiler, { lazy: true }));
app.use(router);

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) { // eslint-disable-line no-unused-vars
    res.status(err.status || 500);
    res.render('error', {
      title: err.status || 500,
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) { // eslint-disable-line no-unused-vars
  res.status(err.status || 500);
  res.render('error', {
    title: err.status || 500,
    message: err.message,
    error: {}
  });
});


module.exports = app;
