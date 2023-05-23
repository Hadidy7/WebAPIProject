const mongoose = require('mongoose');
const Meal = require('./meal');

const countrySchema = new mongoose.Schema({
  name: { type: String },
  capital: { type: String },
  nation: { type: String },
  description: { type: String },
  countryCode: { type: String },
  currency: { type: String },
  image: { type: String },
  hotelPrice: { type: Number },
  flightPrice: { type: Number },
  meals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }],
});

module.exports = mongoose.model('Country', countrySchema);
