var koa = require('koa');
var app = module.exports = koa();

app.use(function *(){
  this.body = 'Hello World From Koa.js running on Iojs via Docker though Vagrant';
});

app.listen(8080);
