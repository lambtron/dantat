
/**
 * Module dependencies.
 */

var koa = require('koa');
var _ = require('koa-route');
var cors = require('koa-cors');
var ggb = require('./lib/ggb');
var PORT = process.env.PORT || 3000;
var render = require('./lib/render');
var bodyParser = require('koa-bodyparser');
var app = koa();

/**
 * Configure app settings.
 */

app.use(bodyParser());
app.use(cors());
app.use(_.get('/', function *() {
  this.body = yield render('index');
}));

/**
 * API endpoints.
 */

app.use(_.get('/api/isopen', ggb.isOpen));

/**
 * Listen on PORT || 3000.
 */

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
