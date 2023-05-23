const axios = require('axios');
const { weatherApiKey } = require('../utils/apiKey');

// Service to get weather forecast for a specific location
exports.getWeatherForecast = async (location) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=3`;
  const response = await axios.get(url);
  return response.data;
};

