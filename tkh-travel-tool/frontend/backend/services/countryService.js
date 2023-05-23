const Country = require('../models/country');

// Service to create a new country
exports.createCountry = async (countryData) => {
  const newCountry = await Country.create(countryData);
  return newCountry;
};

// Service to update country details
exports.updateCountry = async (countryName, countryData) => {
  const updatedCountry = await Country.findOneAndUpdate({ name: countryName }, countryData, { new: true });
  return updatedCountry;
};

// Service to get country by name
exports.getCountryByName = async (countryName) => {
  const country = await Country.findOne({ name: countryName }).populate('meals');
  return country;
};

// Service to get all countries
exports.getAllCountries = async () => {
  const countries = await Country.find();
  return countries;
};

// Service to delete a country
exports.deleteCountry = async (countryName) => {
  const deletedCountry = await Country.findOneAndDelete({ name: countryName });
  return deletedCountry;
};
