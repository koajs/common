
var common = require('./');
var koa = require('koa');

var app = koa();

app.use(common.logger());
app.use(common.responseTime());

app.listen(3000);
console.log('listening on port 3000');
