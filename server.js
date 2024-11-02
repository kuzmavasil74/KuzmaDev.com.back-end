const express = require('express') // Main file where the Express server is configured and routes are connected.
const cors = require('cors')
const contactRoutes = require('./routes/contactRoutes')

const app = express()
const corsOptions = {
  origin: 'https://kuzma-dev-com.vercel.app',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}
app.use(cors(corsOptions))
app.use(express.json())

app.use('/api', contactRoutes)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
