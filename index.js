// app.js or server.js
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(express.json())
// Apply auth middleware only to product routes
app.use('/api/products', authMiddleware, productRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// General error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

// Export the app instance
module.exports = app;

// Start the server in a separate file (optional)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
