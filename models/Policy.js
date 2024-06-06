module.exports = (sequelize, DataTypes) => {
    const Policy = sequelize.define('Policy', {
        version: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        effective_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return Policy;
};