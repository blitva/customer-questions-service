const express = require('express');
const app = express();
const port = 4001;
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('../database/database.js');

app.use(cors());
app.use('/', express.static(__dirname + '/../public'));
app.use('/:id', express.static(__dirname + '/../public'));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

// express middleware
app.get('/customer-questions/:id', (req, res) => {
  let productId = req.query.productId;
  console.log(`Requesting product ${productId} from the database.`)
  db.load(productId, (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
    res.json(data);
    res.sendStatus(200);
  });
});

const server = app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});

module.exports = server;