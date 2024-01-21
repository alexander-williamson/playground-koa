import Koa from "koa";

export function SetValidationError(ctx: Koa.ParameterizedContext, message: string): void {
  ctx.body = {
    errors: [{
      code: "ValidationError",
      message
    }]
  }
  ctx.status = 400 // Bad Request
}

