import httpErrors from 'http-errors'
const errorHandling = (error, message) => {
  if (error instanceof httpErrors.HttpError) throw error

  throw new httpErrors.InternalServerError(message ?? error.message)
}

export { errorHandling }
