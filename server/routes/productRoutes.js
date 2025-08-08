const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Endpoint para obtener todo los productos
router.get('/products', productController.getProducts);

// Endpoint para obtener los detalles de un producto por ID
router.get('/items/:id', productController.getItemById);

module.exports = router;
