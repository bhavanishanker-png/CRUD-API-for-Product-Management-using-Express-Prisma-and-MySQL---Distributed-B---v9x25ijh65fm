// routes/productRoutes.js
const express = require('express');
const { createProduct, getProducts, getProduct, updateProduct, patchProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

// Product routes
router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
