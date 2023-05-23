const express = require('express');
const currencyController = require('../controllers/currencyController');

const router = express.Router();

// Route to convert currency
router.get('/convert', currencyController.convertCurrency);

// Route to get exchange rates
router.get('/rates', currencyController.getExchangeRates);

// Implement other currency-related routes

module.exports = router;
