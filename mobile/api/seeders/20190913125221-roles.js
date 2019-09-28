'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        label: 'Administrator',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'Manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        label: 'Employee',
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
