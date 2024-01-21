import Koa from "koa";
import Router from "koa-router";

import json from "koa-json";
import logger from "koa-logger";
import routes from "./routes"

const app = new Koa();
const router = routes;

app.use(json());
app.use(logger());

// routing
app.use(router());
app.listen(3000, () => {
  console.info("Koa started")
  console.info("http://localhost:3000")
});

export default app;