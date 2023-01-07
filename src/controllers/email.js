import { sendEmail } from '../utils/index.js'

const messages = {}

const sendEmailC = async (req, res) => {
  const { id, email, time, message } = req.body

  if (id in messages) {
    clearTimeout(messages[id].timeout)
    messages[id].message += ' ' + message
    messages[id].time = time
  } else messages[id] = { email, time, message }

  messages[id].timeout = setTimeout(async () => {
    try {
      await sendEmail(email, messages[id].message)
      delete messages[id]
    } catch (err) {
      console.log(err)
    }
  }, time * 1000)
  console.log([messages[id].message, messages[id].time])
}
export { sendEmailC }
