import { Router } from 'express'
import { sendEmail } from '../../controllers/index.js'
import { response } from './../index.js'
const Email = Router()

Email.route('/email/sendEmail').post(async (req, res, next) => {
  const notification = req.body
  try {
    await sendEmail(notification)
    response({
      error: false,
      message: 'Email sent',
      res,
      status: 200
    })
  } catch (err) {
    next(err)
  }
})

export { Email }
