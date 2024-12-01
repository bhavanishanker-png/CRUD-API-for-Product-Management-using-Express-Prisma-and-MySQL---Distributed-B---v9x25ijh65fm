const express = require('express');
const productRoutes = require('./routes/productRoutes');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

// Apply auth middleware globally
app.use(authMiddleware);

// Product routes
app.use('/api/products', productRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
