'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_user: DataTypes.INTEGER
  }, {});
  Team.associate = function(models) {
    models.Team.belongsTo(models.User, { foreignKey: 'id_user' })
  };
  return Team;
};
