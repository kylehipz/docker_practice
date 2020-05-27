const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  console.log('Products service');
  res.send('Products service');
});

app.listen(8000, () => console.log('Products listening on port 8000'));
module.exports = app;
