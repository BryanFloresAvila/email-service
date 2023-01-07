import express from 'express'
import cors from 'cors'
import { applyRoutes } from './router.js'

const whitelist = [process.env.CORS_ORIGIN]
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) callback(null, true)
    else callback(new Error('Not allowed by CORS'))
  }
}

class Server {
  constructor() {
    this.app = express()
    this.config()
  }

  config() {
    this.app.set('port', process.env.PORT || 3000)
    this.app.use(cors(corsOptions))
    this.app.use(express.json())
    this.app.use(async (req, res, next) => {
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, api-key'
      )
      const apiKey = req.headers['api-key']
      if (!apiKey || apiKey !== process.env.API_KEY)
        res.status(401).json({ error: 'unauthorised' })
      else next()
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
