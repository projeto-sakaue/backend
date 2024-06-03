const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();

app.use(bodyParser.json());

app.use('/sakaue', require('./routes/user'));

db.sequelize.sync({ force: false }).then(() => {
  console.log('Database connected and synchronized');
});

module.exports = app;
