const router = require('koa-router')();
const spitWord = require('../lib/spitWord');
router.prefix('/participle')
router.post('/spit', function (ctx, next) {
    const param = ctx.request.body;
    const data = spitWord(param.textValue);
    ctx.json({
        code: 200, 
        data,
    });
})


module.exports = router
