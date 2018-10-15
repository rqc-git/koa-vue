const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const static = require('koa-static');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'hello world';
  await next();
});

// app.use(static(path.resolve('dist')));

app.use( async (ctx, next) => {
  var html = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'));
    // var html = path.resolve(__dirname,'dist');
    // ctx.response.body(html);
    console.log(html);
    // ctx.body('hello world');
  });

app.listen(3000, ()=>{
    console.log('app run at 3000 prot');
});