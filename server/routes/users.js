const router = require('koa-router')()
const Mongodb = require('../db/db');
const userModel = require('../db/schema/user');

router.post('/login/query', async (ctx, next) => {
  const param = ctx.request.body;
  let res = await Mongodb.queryById(userModel, param);
  console.log('res',res);
  if(res) {
    ctx.json({
      code: 200,
      success: true
    });
  } else {
    ctx.json({
      code: 200,
      success: false
    });
  }
})

router.post('/register/query',async (ctx,next) => {
  const param = ctx.request.body;
  let res = await Mongodb.save(userModel, param);
  if(res) {
    ctx.json({
      code: 200,
      success: true
    });
  } else {
    ctx.json({
      code: 200,
      success: false
    });
  }
})

module.exports = router
