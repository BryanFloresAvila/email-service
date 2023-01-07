import Joi from 'joi'

const notification = Joi.object().keys({
  id: Joi.string().required(),
  email: Joi.string().email().required(),
  time: Joi.number().required(),
  message: Joi.string().required()
})

export { notification }
