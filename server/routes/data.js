const router = require('koa-router')();
const ModelDb = require('../db/db')
router.prefix('/data')
router.get('/get-data', function (ctx, next) {
    ctx.json({
        code: 200, data: [
            {
                title: 'test1',
                content: 'test1',
                url: 'http://baidu.com'
            },
            {
                title: 'test2',
                content: 'test2',
                url: 'http://baidu.com'
            }
        ]
    });
})

router.get('/bar', async (ctx, next) => {
    let data = await ModelDb.query({});
    ctx.json({
        code: 200,
        data
    })
})

module.exports = router
