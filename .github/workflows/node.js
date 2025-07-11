// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/online', (req, res) => {
  const name = req.query.name || 'unknown';
  res.json({name: name});
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
