const axios = require('axios');
const { mealDbApiKey } = require('../utils/apiKey');

// Service to get famous foods for a country from the MealDB API
exports.getFoodsByCountry = async (nation) => {
  const url = `http://www.themealdb.com/api/json/v1/${mealDbApiKey}/filter.php?a=${nation}`;

  try {
    const response = await axios.get(url);
    return response.data.meals;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch meals from MealDB API');
  }
};