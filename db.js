const mongoose = require('mongoose');
const config = require('./config/config');

const MONGO_URI = config.dbUrl;

const connectToMongo = () => {
  mongoose.connect(MONGO_URI, () => {
    console.log('Connected to Database');
  });
};

module.exports = connectToMongo;
