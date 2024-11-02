const express = require('express')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config() // Завантажує змінні з .env файлу

const app = express()
app.use(cors()) // Дозволяє CORS-запити з фронтенду
app.use(express.json()) // Декодує JSON-запити

// Налаштування транспорту для Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Або інший email сервіс
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Маршрут для обробки POST-запитів з форми
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  // Налаштування email-повідомлення
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }

  // Надсилання email
  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Failed to send email' })
  }
})

// Запуск сервера
const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
