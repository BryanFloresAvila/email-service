import Joi from 'joi'
import httpErrors from 'http-errors'
import { notification as notificationSchema } from '../../../schemas/index.js'

const validateNotification = async (req, res, next) => {
  try {
    await notificationSchema.validateAsync(req.body)
    next()
  } catch (e) {
    if (e instanceof Joi.ValidationError)
      next(new httpErrors.UnprocessableEntity(e.message))
    next(e)
  }
}

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['api-key']
  if (!apiKey || apiKey !== process.env.API_KEY)
    res.status(401).json({ error: 'unauthorised' })
  else next()
}

export { validateApiKey, validateNotification }
