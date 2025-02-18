const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post('/', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

router.put('/:id', async (req, res) => {
    const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
});

router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted succesfully' });
});

module.exports = router;