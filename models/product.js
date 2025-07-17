const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  image: String, // URL or file path for product image
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
