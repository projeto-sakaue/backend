const Sequelize = require('sequelize');
const sequelize = require('../config/database');


const User = require('./User')(sequelize, Sequelize.DataTypes);
const Policy = require('./Policy')(sequelize, Sequelize.DataTypes);
const PolicyDetails = require('./PolicyDetails')(sequelize, Sequelize.DataTypes);
const UserHistory = require('./UserHistory')(sequelize, Sequelize.DataTypes);


Policy.associate = (models) => {
    Policy.hasMany(models.PolicyDetails, {
        foreignKey: 'id_policy',
        as: 'details'
    });
};

PolicyDetails.associate = (models) => {
    PolicyDetails.belongsTo(models.Policy, {
        foreignKey: 'id_policy',
        as: 'policy'
    });
    PolicyDetails.hasMany(models.UserHistory, {
        foreignKey: 'policy_detail_id',
        as: 'userHistories'
    });
};

User.associate = (models) => {
    User.hasMany(models.UserHistory, {
        foreignKey: 'user_id',
        as: 'userHistories'
    });
};

UserHistory.associate = (models) => {
    UserHistory.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
    });
    UserHistory.belongsTo(models.PolicyDetails, {
        foreignKey: 'policy_detail_id',
        as: 'policyDetail'
    });
};


Policy.associate({ PolicyDetails });
PolicyDetails.associate({ Policy, UserHistory });
User.associate({ UserHistory });
UserHistory.associate({ User, PolicyDetails });

const db = {
    Sequelize,
    sequelize,
    User,
    Policy,
    PolicyDetails,
    UserHistory
};

module.exports = db;
