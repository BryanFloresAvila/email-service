import httpErrors from 'http-errors'
import { Home, Email } from './routes/index.js'

const routers = [Email]

const applyRoutes = app => {
  app.use('/', Home)
  routers.forEach(router => app.use('/api', router))

  // Handling 404 error
  app.use((req, res, next) => {
    next(new httpErrors.NotFound('This route does not exist'))
  })
}

export { applyRoutes }
