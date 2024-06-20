const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User')(sequelize, Sequelize.DataTypes);
const Term = require('./Term')(sequelize, Sequelize.DataTypes);
const TermDetails = require('./TermDetails')(sequelize, Sequelize.DataTypes);
const UserHistory = require('./UserHistory')(sequelize, Sequelize.DataTypes);

Term.associate = (models) => {
    Term.hasMany(models.TermDetails, {
        foreignKey: 'id_term',
        as: 'details'
    });
};

TermDetails.associate = (models) => {
    TermDetails.belongsTo(models.Term, {
        foreignKey: 'id_term',
        as: 'term'
    });
    TermDetails.hasMany(models.UserHistory, {
        foreignKey: 'term_detail_id',
        as: 'userHistory'
    });
};

User.associate = (models) => {
    User.hasMany(models.UserHistory, {
        foreignKey: 'user_id',
        as: 'userHistory'
    });
};

UserHistory.associate = (models) => {
    UserHistory.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
    });
    UserHistory.belongsTo(models.TermDetails, {
        foreignKey: 'term_detail_id',
        as: 'termDetail'
    });
};

const models = {
    User,
    Term,
    TermDetails,
    UserHistory
};

Term.associate(models);
TermDetails.associate(models);
User.associate(models);
UserHistory.associate(models);

const db = {
    Sequelize,
    sequelize,
    ...models
};

module.exports = db;
