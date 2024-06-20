module.exports = (sequelize, DataTypes) => {
    const UserHistory = sequelize.define('UserHistory', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        term_detail_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'TermDetails',
                key: 'id'
            }
        },
        acceptance_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        acceptance_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return UserHistory;
};
