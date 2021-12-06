const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb://localhost:27017/auditDataDb?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';

const connectToMongo = () => {
  mongoose.connect(MONGO_URI, () => {
    console.log('Connected to Database');
  });
};

module.exports = connectToMongo;
