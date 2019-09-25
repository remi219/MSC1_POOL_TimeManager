'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clocking = sequelize.define('Clocking', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true
    },
    id_user: DataTypes.INTEGER,
    time: DataTypes.DATE,
    status: DataTypes.BOOLEAN
  }, {});
  Clocking.associate = function(models) {
    models.Clocking.belongsTo(models.User, { foreignKey: 'id_user' });
  };
  return Clocking;
};
