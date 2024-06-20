module.exports = (sequelize, DataTypes) => {
    const Term = sequelize.define('Term', {
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

    return Term;
};