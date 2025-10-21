'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('enrollments', [
      {
        student_id: 1,
        course_id: 1,
        status: 'enrolled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 2,
        course_id: 2,
        status: 'enrolled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 3,
        course_id: 3,
        status: 'enrolled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        student_id: 4,
        course_id: 4,
        status: 'enrolled',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('enrollments', null, {});
  }
};
