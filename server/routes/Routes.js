const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Endpoint para obtener todo los productos
router.get('/items', itemsController.getItems);

// Endpoint para obtener los detalles de un producto por ID
router.get('/items/:id', itemsController.getItemById);

module.exports = router;
