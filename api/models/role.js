'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    label: DataTypes.STRING
  }, {});
  Role.associate = function(models) {
    //
  };
  return Role;
};
