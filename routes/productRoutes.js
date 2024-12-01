const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a product
router.post('/create', async (req, res) => {
  const { name, stock, price } = req.body;
  if (!name || stock === undefined || price === undefined) {
    return res.status(400).json({ error: "All fields required" });
  }

  const product = await prisma.product.create({
    data: { name, stock, price },
  });
  res.status(201).json(product);
});

// Get all products
router.get('/get', async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).json(products);
});

// Get product by ID
router.get('/getById/:id', async (req, res) => {
  const { id } = req.params;
  const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(product);
});

// Update product (PUT)
router.put('/put/:id', async (req, res) => {
  const { id } = req.params;
  const { name, stock, price } = req.body;

  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(id) },
    data: { name, stock, price },
  });

  res.status(200).json(updatedProduct);
});

// Partial update product (PATCH)
router.patch('/patch/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedProduct = await prisma.product.update({
    where: { id: parseInt(id) },
    data,
  });

  res.status(200).json(updatedProduct);
});

// Delete product
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  await prisma.product.delete({ where: { id: parseInt(id) } });

  res.status(200).json({ message: "Product is deleted" });
});

module.exports = router;
