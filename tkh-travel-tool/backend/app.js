// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import routes
const countryRoutes = require('./routes/countryRoutes');

// Create Express app
const app = express();

// Set up body-parser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://hadidy:1010abab@tkhtraveltool.1icjzms.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Routes
app.use('/countries', countryRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the travel tool app!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
