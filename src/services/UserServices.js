const Services = require('./Services.js');

class UserServices extends Services {
  constructor() {
    super('User');
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
}

module.exports = UserServices;