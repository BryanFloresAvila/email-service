import { transporter } from '../utils/index.js'
import { errorHandling } from './utils/index.js'
const messages = {}

const sendEmail = async notification => {
  const { id, email, time, message } = notification

  if (id in messages) {
    clearTimeout(messages[id].timeout)
    messages[id].message += ' ' + message
    messages[id].time = time
  } else messages[id] = { email, time, message }

  let reponseSendEmail = null

  messages[id].timeout = setTimeout(async () => {
    try {
      reponseSendEmail = await sendEmailNodemailer(email, messages[id].message)
      delete messages[id]
    } catch (err) {
      return errorHandling(err, 'Error sending email')
    }
  }, time * 1000)
  console.log([email, messages[id].message])

  if (reponseSendEmail !== null) return reponseSendEmail
}

const sendEmailNodemailer = async (email, message) => {
  try {
    await transporter.sendMail({
      from: `"${email}" <${process.env.EMAIL_SECRET}>`,
      to: email,
      subject: 'testing',
      text: `${message}`
    })

    return 'Email sent'
  } catch (err) {
    return errorHandling(err, 'Error sending email')
  }
}

export { sendEmail }