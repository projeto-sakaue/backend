const app = require('./app');
const { sequelize, Policy } = require('./models');

const PORT = process.env.PORT || 3000;


sequelize.sync({ force: false }).then(async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
