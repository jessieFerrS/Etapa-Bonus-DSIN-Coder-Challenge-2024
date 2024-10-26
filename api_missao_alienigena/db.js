const mongoose = require('mongoose');

const URL = process.env.MONGO_URL;

mongoose
  .connect(URL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('Error: ', err));
