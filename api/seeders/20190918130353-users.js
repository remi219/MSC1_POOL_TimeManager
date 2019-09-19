'use strict';

var bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const hashedPassword = bcrypt.hashSync('AdMiN_PaSsWoRd', 8);
    return queryInterface.bulkInsert('Users', [
      {
        firstname: 'Admin',
        lastname: 'Admin',
        email: 'admin@test.com',
        password: hashedPassword,
        id_role: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
