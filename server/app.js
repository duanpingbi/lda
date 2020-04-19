const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const Json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const { config, json, logging, success, jwt, Loader } =require('lin-mizar')
const glob = require('fast-glob');
const path = require('path');
const routerPath = path.resolve(__dirname,'./routes');

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(Json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/static'))

app.use(views(__dirname + '/views', {
  extension: 'html'
}))

// 打印日志
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 注册路由
let routes = glob.sync(['*.js'],{cwd:routerPath});
routes.forEach((route)=>{
  let filePath = path.resolve(routerPath,route);
  let router = require(filePath);
  app.use(router.routes(), router.allowedMethods())
})


// 错误处理
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
json(app)
module.exports = app
