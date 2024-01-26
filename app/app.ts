import Koa from "koa";

import json from "koa-json";
import logger from "koa-logger";
import routes from "./routes"

const app = new Koa();
const router = routes;

app.use(json());
app.use(logger());
app.use(router());

export default app;
