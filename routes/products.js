const express = require('express');
const router = express.Router();
const Product = require('d:/handmade-elegance/models/product');

// List all products
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.render('products', { products });
});

// Show form to add product
router.get('/new', (req, res) => {
  res.render('addProduct');
});

// Add new product
router.post('/', async (req, res) => {
  const { name, description, price, image } = req.body;
  await Product.create({ name, description, price, image });
  res.redirect('/products');
});

module.exports = router;
