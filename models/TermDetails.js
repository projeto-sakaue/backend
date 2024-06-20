module.exports = (sequelize, DataTypes) => {
    const TermDetails = sequelize.define('TermDetails', {
        id_term: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Terms',
                key: 'id'
            }
        },
        acceptance_details: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return TermDetails;
};
