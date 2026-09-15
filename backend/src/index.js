import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5001
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'

// Standard middlewares
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
)
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Vibelearn API is running',
    timestamp: new Date().toISOString(),
  })
})

// Centralized error-handling middleware
app.use((err, req, res, _next) => {
  const status = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  res.status(status).json({
    status: 'error',
    statusCode: status,
    message,
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Vibelearn backend listening on http://localhost:${PORT}`)
})

export default app
