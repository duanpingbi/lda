const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('login')
})

router.get('/app', async (ctx, next) => {
  await ctx.render('app')
})
router.get('/data', async (ctx, next) => {
  await ctx.render('data')
})
router.get('/detail', async (ctx, next) => {
  await ctx.render('data')
})
router.get('/lda', async (ctx, next) => {
  await ctx.render('lda')
})
router.get('/participle', async (ctx, next) => {
  await ctx.render('participle')
})

module.exports = router
