const Services = require('./Services.js');

class UserServices extends Services {
  constructor() {
    super('User');
  }

  async getEnrollmentsByStudent(id) {
    const student = await super.getRegisterById(id);
    const enrollmentsList = await student.getEnrolledClasses();
    return enrollmentsList;
  }

  async getAllUserScope() {
    const userList = await super.getRegistersByScope('allRegisters');
    return userList;
  }
}

module.exports = UserServices;