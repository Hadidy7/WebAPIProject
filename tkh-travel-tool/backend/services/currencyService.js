const axios = require('axios');
const { currencyApiKey } = require('../utils/apiKey');

exports.getCurrencyExchangeRates = async () => {
  try {
    const url = `https://v6.exchangerate-api.com/v6/${currencyApiKey}/latest/EGP`;
    const response = await axios.get(url);
    const data = response.data;

    // Extract the conversion rates
    const conversionRates = data.conversion_rates;

    return conversionRates;
  } catch (error) {
    throw new Error('Failed to fetch currency exchange rates');
  }
};
