const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  console.log('Auth service');

  const response = await axios.get('http://customers:8000');
  return res.json('Auth service ' + response.data);
});

app.listen(8000, () => console.log('FUck you'));

module.exports = app;
