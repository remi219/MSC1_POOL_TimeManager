'use strict';
module.exports = (sequelize, DataTypes) => {
  const Workingtime = sequelize.define('Workingtime', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_user: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {});
  Workingtime.associate = function(models) {
    models.Workingtime.belongsTo(models.User, { foreignKey: 'id_user', onDelete: 'CASCADE' });
  };
  return Workingtime;
};
