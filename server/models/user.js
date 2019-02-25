'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  User.associate = function(models) {
    User.belongsToMany(models.Group, {
      through: models.GroupUser,
      as: 'groups',
      foreignKey: 'userId'
    });
  };

  return User;
};