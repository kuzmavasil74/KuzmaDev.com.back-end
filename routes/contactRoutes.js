const express = require('express') // File with routes, where the URLs and their associated controllers are defined.
const { sendContactEmail } = require('../controllers/contactController')

const router = express.Router()

router.post('/contact', sendContactEmail)

module.exports = router
