import joi from "joi";
import body from "koa-body";
import Router from "koa-router";
import { SetValidationError } from "../helpers";
import logger from "koa-logger";
import { PostUsersResponseBody } from "../contracts/PostUsersResponseBody";
import { Validator } from "../contracts/PostUsersRequestBody";

const router = new Router({ prefix: "/users" });

router.post("/", body(), async (ctx, next) => {
  console.log({ context: ctx, handler: "users-post" });
  
  // validate the request
  const { value, error } = Validator.validate(ctx.request.body);
  if (error) {
    SetValidationError(ctx, error.message);
    return;
  }
// ensure the response type
  const response: PostUsersResponseBody = {
    name: value.name,
    age: value.age,
  };
  ctx.body = response;
});

export default router;
