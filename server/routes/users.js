const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.json({code:200,data:{
    titile:'test',
    content:'test'
  }});
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
