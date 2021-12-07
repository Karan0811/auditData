const mongoose = require('mongoose');
const config = require('./config/config');
require('dotenv').config()

const MONGO_URI = process.env.MONGOURI;

const connectToMongo = () => {
  mongoose.connect(MONGO_URI, () => {
    console.log('Connected to Database');
  });
};

module.exports = connectToMongo;
