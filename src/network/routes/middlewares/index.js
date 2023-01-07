const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['api-key']
  if (!apiKey || apiKey !== process.env.API_KEY)
    res.status(401).json({ error: 'unauthorised' })
  else next()
}

export { validateApiKey }
