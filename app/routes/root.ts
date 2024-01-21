import Router from 'koa-router'

const router = new Router({ prefix: '/' })

router.get("/", async (ctx, next) => {
    const name = ctx.query["name"] ?? "world!"
  
    ctx.body = { "hello": name };
    ctx.status = 200
    
    await next();
  });

  export default router;
