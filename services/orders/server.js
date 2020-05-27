const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', async (req, res) => {
  console.log('Orders service');
  const p1 = axios.get('http://customers:8000');
  const p2 = axios.get('http://products:8000');

  const [r1, r2] = await Promise.all([p1, p2]);

  res.send(`Orders service ${r1.data} ${r2.data}`);
});

app.listen(8000, () => console.log('Orders listening on port 8000'));
module.exports = app;
