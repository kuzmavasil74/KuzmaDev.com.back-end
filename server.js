require('dotenv').config()
const express = require('express') // Main file where the Express server is configured and routes are connected.
const cors = require('cors')
const contactRoutes = require('./routes/contactRoutes')

const app = express()
// Extra origins (e.g. a custom domain) can be added in CORS_ORIGINS, comma-separated.
const allowedOrigins = [
  'https://kuzma-dev-com.vercel.app',
  ...(process.env.CORS_ORIGINS || '').split(',').map((o) => o.trim()),
].filter(Boolean)

const corsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}
app.use(cors(corsOptions))
app.use(express.json({ limit: '20kb' }))

app.get('/health', (req, res) => res.json({ status: 'ok' })) // Lets uptime monitors keep the free instance awake.

app.use('/api', contactRoutes)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
