const transporter = require('../config/emailTransporter')

const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body

  const mailOptions = {
    from: `${email}`,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission from KuzmaDev.com: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    replyTo: email,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Failed to send email' })
  }
}

module.exports = { sendContactEmail }
