import joi from "joi";
import body from "koa-body";
import Router from 'koa-router';
import { SetValidationError } from '../helpers';
import logger from "koa-logger"

const router = new Router({ prefix: '/users' })

type User = {
  name: string;
  age?: number;
}

router.post("/", body(), async (ctx, next) => {
  console.log({ context: ctx, "handler": "users-post" })

  const { error, value } = joi.object({
    name: joi.string().required(),
    age: joi.number().integer().optional()
  }).required()
    .validate(ctx.request.body);

  if (error) {
    SetValidationError(ctx, error.message)
    return;
  }

  const response: User = {
    name: value.name,
    age: value.age
  }

  ctx.body = response;
});

export default router;