const express = require('express');
const connectToMongo = require('./db');
const app = express();
require('dotenv').config()

connectToMongo();
app.use(express.json());

app.use('/api/auditData', require('./routes/auditData'));


app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
