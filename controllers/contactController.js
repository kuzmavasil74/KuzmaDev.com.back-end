// Controller for handling logic related to the contact form.
const transporter = require('../config/emailTransporter') // Importing the transporter configuration for sending emails.
const ContactSchema = require('../utils/validationSchemas/contactValidation.js')

const sendContactEmail = async (req, res) => {
  // Asynchronous function for processing requests to send an email.
  const { error } = ContactSchema.validate(req.body) // Destructuring data from the request body.

  if (error) {
    return res.status(400).json({ message: error.details[0].message }) // Return validation error if data fails validation.
  }
  const { name, email, subject, message } = req.body // Destructuring data from the request body.

  const mailOptions = {
    // Email configuration settings.
    from: `${email}`, // Sender's address - the user's email.
    to: process.env.EMAIL_USER, // Recipient's address - determined from an environment variable.
    subject: `Contact Form Submission from KuzmaDev.com: ${subject}`, // Email subject.
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Email body containing the name, email, and message.
    replyTo: email, // Address to reply to.
  }

  try {
    await transporter.sendMail(mailOptions) // Sending the email.
    res.status(200).json({ message: 'Email sent successfully' }) // Sending a response with a successful status.
  } catch (error) {
    console.error('Error sending email:', error) // Logging the error.
    res.status(500).json({ message: 'Failed to send email' }) // Sending a response with an error.
  }
}

module.exports = { sendContactEmail } // Exporting the function for use in other parts of the application.
