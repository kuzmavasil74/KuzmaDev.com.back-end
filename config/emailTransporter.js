const dotenv = require('dotenv')
dotenv.config() // Loads environment variables from the .env file

// Setting up the transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail', // Using Gmail as the service for sending
  auth: {
    user: process.env.EMAIL_USER, // Email address obtained from environment variables
    pass: process.env.EMAIL_PASS, // Email password obtained from environment variables
  },
})

// Exporting the transporter for use in other modules
module.exports = transporter
