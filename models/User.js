module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      privacyPolicyAccept: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  
    return User;
  };
  