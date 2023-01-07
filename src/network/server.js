import express from 'express'
import { applyRoutes } from './router.js'

class Server {
  constructor() {
    this.app = express()
    this.config()
  }

  config() {
    this.app.set('port', process.env.PORT || 3000)
    this.app.use(express.json())
    this.app.use(async (req, res, next) => {
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type'
      )
      next()
    })
    applyRoutes(this.app)
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server is running on port', this.app.get('port'))
    })
  }
}

const server = new Server()

export { server as Server }
