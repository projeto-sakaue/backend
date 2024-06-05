const app = require('./app');
const { sequelize, Policy } = require('./models');

const PORT = process.env.PORT || 3000;

const seedPolicies = async () => {
  const policiesCount = await Policy.count();

  if (policiesCount === 0) {
    const policies = [
      {
        version: '1.0',
        content: 'Política de privacidade versão 1.0',
        effective_date: new Date('2023-01-01')
      },
      {
        version: '1.1',
        content: 'Política de privacidade versão 1.1',
        effective_date: new Date('2023-02-01')
      },
      {
        version: '2.0',
        content: 'Política de privacidade versão 2.0',
        effective_date: new Date('2023-03-01')
      }
    ];

    await Policy.bulkCreate(policies);
    console.log('Policies have been seeded');
  }
};

sequelize.sync({ force: false }).then(async () => {
  await seedPolicies();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
