const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async getEnrollments(req, res) {
    const { studentId } = req.params;
    try {
      const enrollmentsList = await userServices.getEnrollmentsByStudent(Number(studentId));
      return res.status(200).json(enrollmentsList);
    } catch (error) {
      // error
    }
  }
}

module.exports = UserController;