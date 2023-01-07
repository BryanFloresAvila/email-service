import httpErrors from 'http-errors'
import { Home, Email } from './routes/index.js'
import { response } from './response.js'
import { validateApiKey } from './routes/middlewares/index.js'
const routers = [Email]

const applyRoutes = app => {
  app.use('/', Home)
  routers.forEach(router => app.use('/api', validateApiKey, router))

  // Handling 404 error
  app.use((req, res, next) => {
    next(new httpErrors.NotFound('This route does not exist'))
  })

  app.use((error, req, res, next) => {
    response({
      error: true,
      message: error.message,
      res,
      status: error.status || 500
    })
    next()
  })
}

export { applyRoutes }
