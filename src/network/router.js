import httpErrors from 'http-errors'
import cors from 'cors'
import { Home, Email } from './routes/index.js'
import { response } from './response.js'
import { validateApiKey } from './routes/middlewares/index.js'

// adding cors here for conflict when deploying in render
const whitelist = [process.env.CORS_ORIGIN]
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) callback(null, true)
    else callback(new Error('Not allowed by CORS'))
  }
}

const routers = [Email]

const applyRoutes = app => {
  app.use('/', Home)
  routers.forEach(router =>
    app.use('/api', cors(corsOptions), validateApiKey, router)
  )

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
