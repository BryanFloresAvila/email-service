import { Router } from 'express'
import { sendEmail } from '../../controllers/index.js'
import { response } from './../index.js'
import { validateNotification } from './middlewares/index.js'
const Email = Router()

Email.route('/email/sendEmail').post(
  validateNotification,
  async (req, res, next) => {
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
  }
)

export { Email }
