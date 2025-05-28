// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin:['https://eclypse-eight.vercel.app','http://localhost:5173']
}));
app.use(express.json());
app.use(express.static('public'));

// Dummy Data
const images = [
      "/images/Frame 25.svg",
      "/images/Frame 18.svg",
      "/images/Frame 18 (1).svg",
      "/images/Frame 18 (2).svg",
      "/images/Frame 19.svg"
];




app.get('/api/images', (req, res) => {
  res.json({
    success: true,
    data: images
  });
});


// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 API endpoints available at http://localhost:${PORT}/api`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;