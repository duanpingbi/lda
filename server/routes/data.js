const router = require('koa-router')();
const ModelDb = require('../db/db');
var ObjectID = require('mongodb').ObjectID;
const articleModel = require('../db/schema/article');
router.prefix('/data')
router.get('/get-data', async (ctx, next) => {
    let data = await ModelDb.query(articleModel, {})
    ctx.json({
        code: 200,
        data
    });
});
router.get('/get-detail', async (ctx, next) => {
    let id = ctx.query.id;
    let data = await ModelDb.queryById(articleModel, {_id:ObjectID(id)})
    ctx.json({
        code: 200,
        data
    })
})
router.get('/del', async (ctx, next) => {
    let id = ctx.query.id;
    let data = await ModelDb.remove(articleModel, {_id:ObjectID(id)})
    ctx.json({
        code: 200,
        data
    })
})

module.exports = router
