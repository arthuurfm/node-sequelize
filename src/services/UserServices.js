const dataSource = require('../database/models');
const Services = require('./Services.js');

class UserServices extends Services {
  constructor() {
    super('User');
    this.enrollmentServices = new Services('Enrollment');
  }

  async getActiveEnrollmentsByStudent(id) {
    const student = await super.getOneRegister(id);
    const enrollmentsList = await student.getEnrolledClasses();
    return enrollmentsList;
  }

  async getAllEnrollmentsByStudent(id) {
    const student = await super.getOneRegister(id);
    const enrollmentsList = await student.getAllEnrollments();
    return enrollmentsList;
  }

  async getAllUserScope() {
    const userList = await super.getRegistersByScope('allRegisters');
    return userList;
  }

  async cancelUserAndEnrollments(studentId) {
    return dataSource.sequelize.transaction(async (t) => {
      await super.updateRegister(
        { active: false }, 
        { id: studentId }, 
        t
      );
      await this.enrollmentServices.updateRegister(
        { status: 'canceled' }, 
        { student_id: studentId },
        t
      );
    });
  }
}

module.exports = UserServices;