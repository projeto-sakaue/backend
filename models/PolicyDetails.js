module.exports = (sequelize, DataTypes) => {
    const PolicyDetails = sequelize.define('PolicyDetails', {
        id_policy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Policies',
                key: 'id'
            }
        },
        term_details: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return PolicyDetails;
};
