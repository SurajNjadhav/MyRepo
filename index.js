const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}! This is 2024`);
});

app.listen(port, () => {
  console.log(`hello world: listening on port ${port}`);
});
