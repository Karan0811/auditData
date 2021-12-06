const express = require('express');
const connectToMongo = require('./db');
const app = express();
const port = 3001;

connectToMongo();
app.use(express.json());

app.use('/api/auditData', require('./routes/auditData'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
