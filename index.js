
/**
 * Module dependencies.
 */

var koa = require('koa');
var _ = require('koa-route');
var cors = require('koa-cors');
var bodyParser = require('koa-bodyparser');
var app = koa();
var PORT = process.env.PORT || 3000;
var ggb = require('./lib/ggb');

/**
 * Configure app settings.
 */

app.use(bodyParser());
app.use(cors());
app.use(_.get('/', function *() {
  this.body = "Dantat.\n\n"
            + "See the documentation here: "
            + "http://www.github.com/lambtron/dantat\n\n";
  this.body += "2014 | @andyjiang";
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
