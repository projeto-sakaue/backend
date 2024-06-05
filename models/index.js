const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User')(sequelize, Sequelize);
const Policy = require('./Policy')(sequelize, Sequelize)

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = User;
db.Policy = Policy;






const seedPolicies = async () => {
    try {
      const policiesCount = await Policy.count();
      
      if (policiesCount === 0) {
        const policies = [
          {
            version: '1.0',
            content: 'Política de privacidade',
            effective_date: new Date('2023-01-01')
          },
          {
            version: '2.0',
            content: 'Política de utilização',
            effective_date: new Date('2023-02-01')
          },
          {
            version: '3.0',
            content: 'Política de uso de dados',
            effective_date: new Date('2023-03-01')
          }
        ];
  
        await Policy.bulkCreate(policies);
        console.log('Policies have been seeded');
      }
    } catch (error) {
      console.error('Error seeding policies:', error);
    }
  };
  

  seedPolicies();





module.exports = db;
