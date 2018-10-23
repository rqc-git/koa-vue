const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const static = require('koa-static');
const bodyParse = require('koa-bodyparser');

const webpack = require('webpack');
const webpackwebpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./build/webpack.base.conf');
const compiler = webpack(config);


const app = new Koa();

app.use(bodyParse());

app.use(webpackDevMiddleware(compiler,{

}));

// app.use(async (ctx, next) => {
//   console.log(ctx.req.body);
//   await next();
// });

// app.use(static(path.resolve('dist')));

// app.use( async (ctx, next) => {
//   var html = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'));
//     // var html = path.resolve(__dirname,'dist');
//     // ctx.response.body(html);
//     console.log(html);
//     // ctx.body('hello world');
//   });

app.listen(1993, ()=>{
    console.log('app running at 1993 port');
});