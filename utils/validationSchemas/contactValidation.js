const Joi = require('joi')

const ContactSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().required(),
  message: Joi.string().min(10).required(),
})

module.exports = ContactSchema
