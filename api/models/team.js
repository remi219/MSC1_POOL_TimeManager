'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
  }, {});
  Team.associate = function(models) {
    models.Team.belongsTo(models.User, { foreignKey: 'id_user' })
  };
  return Team;
};
