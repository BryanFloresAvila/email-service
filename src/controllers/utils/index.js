import httpErrors from 'http-errors'
import { GE, EFE, MFE } from './messages/index.js'
const errorHandling = (error, message) => {
  if (error instanceof httpErrors.HttpError) throw error

  throw new httpErrors.InternalServerError(message ?? error.message)
}

export { errorHandling, GE, EFE, MFE }
