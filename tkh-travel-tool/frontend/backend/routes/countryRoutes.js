// countryRoutes.js

const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// Create a new country
router.post('/', countryController.createCountry);

// Update country details
router.put('/:country', countryController.updateCountry);

// Get country by name
router.get('/:country', countryController.getCountryByName);

// Get all countries
router.get('/', countryController.getAllCountries);

// Delete a country
router.delete('/:country', countryController.deleteCountry);

module.exports = router;
