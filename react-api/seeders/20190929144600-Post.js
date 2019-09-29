'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Posts', [{
      title: 'satu',
      desc: 'deskripsi gambar 1',
      img: 'https://placeimg.com/200/150/tech',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'dua',
      desc: 'deskripsi gambar 2',
      img: 'https://placeimg.com/200/150/people',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'tiga',
      desc: 'deskripsi gambar 3',
      img: 'https://placeimg.com/200/150/arch',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Posts', null, {})
  }
};