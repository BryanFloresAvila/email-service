import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_SECRET,
    pass: process.env.GOOGLE_SECRET
  }
})

const sendEmail = async (email, message) => {
  await transporter.sendMail({
    from: `"${email}" <${process.env.EMAIL_SECRET}>`,
    to: email,
    subject: 'testing',
    text: `${message}`
  })
}

export { sendEmail }
