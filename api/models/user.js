'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    id_role: DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    models.User.belongsTo(models.Role, { foreignKey: 'id_role' });
  };
  return User;
};
