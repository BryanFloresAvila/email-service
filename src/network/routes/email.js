import { Router } from 'express'
import { sendEmailC } from '../../controllers/index.js'
const Email = Router()

Email.route('/email/sendEmail').post(async (req, res) => {
  try {
    await sendEmailC(req, res)
    res.send(' this is send email route ')
  } catch (err) {
    console.log(err)
    res.status(500).send('Internal server error')
  }
})

export { Email }
