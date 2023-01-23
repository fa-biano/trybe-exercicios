'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Books',
    [
      {
        title: 'Harry Potter e a Pedra Filosofal',
        author: 'J K Rolling',
        pageQuantity: '220',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Harry Potter e a Câmara Secreta ',
        author: 'J K Rolling',
        pageQuantity: '240',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  down: async (queryInterface) => {
    queryInterface.bulkDelete('Books', null, {});
  }
};
