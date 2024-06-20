const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const sequelize = require('./config/database')

const app = express();

app.use(bodyParser.json());

app.use('/sakaue', require('./routes/user'));
app.use('/sakaue', require('./routes/term'))
app.use('/sakaue', require('./routes/termDetails'))
app.use('/sakaue', require('./routes/userHistory'))


db.sequelize.sync({ force: false }).then(() => {
  console.log('Database connected and synchronized');
});

module.exports = app;
