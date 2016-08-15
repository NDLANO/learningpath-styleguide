var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app = express();

if (app.get('env') === 'development') {
  var livereload = require('livereload');
  app.locals.LRScript = "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js\"></' + 'script>')</script>"; // eslint-disable-line
  var lrServer = livereload.createServer({ exts: ['css', 'jade'] });
  lrServer.watch(['docs', 'src'].map(function (d) { return path.join(__dirname, d); }));
} else {
  app.locals.LRScript = '';
}

app.locals.STYLESHEET_PATH = (app.get('env') === 'development') ? '/style.css' : '/assets/style.css';

app.locals.iconIds = require('./assets/selection.json').iconSets[0].selection
  .map(function (icon) { return 'icon-'+icon.name; }).sort();

Object.assign(app.locals, require('./docs/localData'));

app.set('views', path.join(__dirname, 'docs'));
app.set('view engine', 'jade');

var router = express.Router();
router.get('/', function (req, res) { res.render('index'); });
router.get('/atoms', function (req, res) { res.render('atoms'); });
router.get('/icons', function (req, res) { res.render('icons'); });
router.get('/colors', function (req, res) { res.render('colors'); });
router.get('/typography', function (req, res) { res.render('typography'); });
router.get('/molecules', function (req, res) { res.render('molecules'); });
router.get('/pages/:page', function (req, res) { res.render('pages/'+req.params.page); });
router.get('/pages', function (req, res) { res.render('pages'); });


app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));
app.use(logger('dev'));

if (app.get('env') === 'development') {
  var webpackMiddleware = require('webpack-dev-middleware');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  webpackConfig.output.path = '/';
  var compiler = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler, { lazy: true }));
}

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
