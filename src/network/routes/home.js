import { Router } from 'express'

const Home = Router()

Home.route('').get((req, res) => {
  res.send(' Welcome to the home route ')
})

export { Home }
