const express = require('express');
const app = express();
const port = 4000;

const jsonServer = require('json-server');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/api', jsonServer.router('db.json'));
