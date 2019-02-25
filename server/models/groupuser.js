'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupUser = sequelize.define('GroupUser', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  GroupUser.associate = (models) => {
    // associations can be defined here
  };
  return GroupUser;
};