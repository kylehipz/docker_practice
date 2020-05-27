const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  console.log('Customers service');
  res.send('Customers service');
});

app.listen(8000, () => console.log('Customers listening on port 8000'));
module.exports = app;
