
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
      cpf: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      privacyPolicyAccept: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  
    return User;
  };
  