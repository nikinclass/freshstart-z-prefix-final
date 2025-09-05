const express = require('express');
const app = express();
const PORT = 8000;
const knex = require('knex')(require('./knexfile')['development']);
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get('/', function(req,res) {
  knex('/')
  console.log(req.query);
  res.send(`Express listening on port: ${PORT}`);
})

app.get('/user', function(req, res) {
  knex('user')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.get('/item', (req, res) => {
  knex('item')
    .select('*')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`)
});

module.exports = app;

