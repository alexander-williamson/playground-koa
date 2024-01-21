import combineRouters from 'koa-combine-routers'
import rootRouter from './root'
import usersRouter from './users'

const router = combineRouters(
  rootRouter,
  usersRouter
)

export default router