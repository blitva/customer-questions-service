const express = require('express');
const app = express();
const port = 4001;
const cors = require('cors');
const db = require('../database/database.js');

app.use(cors());
app.use('/', express.static(__dirname + '/../public'));
app.use('/:id', express.static(__dirname + '/../public'));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.get('/customer-questions/:id', (req, res) => {
  const productId = req.params.id;
  console.log(`Requesting product ${productId} from the database.`)
  db.load(productId, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});

const server = app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});

module.exports = server;