const countryService = require('../services/countryService');
const mealDbService = require('../services/mealDbService');
const currencyService = require('../services/currencyService');
const weatherService = require('../services/weatherService');


// Controller to create a new country
exports.createCountry = async (req, res) => {
  try {
    const { name, capital, nation, description, countryCode, image, hotelPrice, flightPrice } = req.body;

    // Fetch the currency information using the country code
    const currency = await currencyService.getCurrencyExchangeRates(countryCode);

    // Fetch the weather forecast for the country's capital
    const weatherForecast = await weatherService.getWeatherForecast(capital);

    // Fetch meals for the country
    const meals = await mealDbService.getFoodsByCountry(nation);

    const newCountry = await countryService.createCountry({
      name,
      capital,
      nation,
      description,
      countryCode,
      currency,
      image,
      hotelPrice,
      flightPrice,
      weatherForecast,
      meals,
    });


    res.json(newCountry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to update country details
exports.updateCountry = async (req, res) => {
  try {
    const { country } = req.params;
    const { capital, description, countryCode, image, hotelPrice, flightPrice } = req.body;

    // Fetch the currency information using the country code
    const currency = await currencyService.getCurrencyByCountry(countryCode);

    // Fetch the weather forecast for the country's capital
    const weatherForecast = await weatherService.getWeatherForecast(capital);

    // Fetch meals for the country
    const meals = await mealDbService.getFoodsByCountry(nation);

    const updatedCountry = await countryService.updateCountry(country, {
      capital,
      nation,
      description,
      countryCode,
      currency,
      image,
      hotelPrice,
      flightPrice,
      weatherForecast,
      meals,
    });

    if (!updatedCountry) {
      return res.status(404).json({ message: 'Country not found' });
    }

    res.json(updatedCountry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get country by name
exports.getCountryByName = async (req, res) => {
  try {
    const { country } = req.params;
    const countryDetails = await countryService.getCountryByName(country);

    if (!countryDetails) {
      return res.status(404).json({ message: 'Country not found' });
    }

    res.json(countryDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to get all countries
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await countryService.getAllCountries();
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to delete a country
exports.deleteCountry = async (req, res) => {
  try {
    const { country } = req.params;

    const deletedCountry = await countryService.deleteCountry(country);

    if (!deletedCountry) {
      return res.status(404).json({ message: 'Country not found' });
    }

    res.json({ message: 'Country deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
