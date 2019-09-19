'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeamMember = sequelize.define('TeamMember', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_team: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER,
  }, {});
  TeamMember.associate = function(models) {
    //
  };
  return TeamMember;
};
