'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_role: DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    models.User.belongsTo(models.Role, { foreignKey: 'id_role' });
  };
  return User;
};
