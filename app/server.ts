import Koa from "koa"
import Router from "koa-router"
import logger from "koa-logger"
import json from "koa-json";

const app = new Koa();
const router = new Router();

// endpoints
router.get("/", async (ctx, next) => {
  ctx.body = { "hello": "world!" };
  await next();
});

app.use(json());
app.use(logger());

// routing
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.info("Koa started")
  console.info("http://localhost:3000")
});
