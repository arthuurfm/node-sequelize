const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UserController extends Controller {
  constructor() {
    super(userServices);
  }

  async getActiveEnrollments(req, res) {
    const { studentId } = req.params;
    try {
      const enrollmentsList = await userServices.getActiveEnrollmentsByStudent(Number(studentId));
      return res.status(200).json(enrollmentsList);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
  
  async getAllEnrollments(req, res) {
    const { studentId } = req.params;
    try {
      const enrollmentsList = await userServices.getAllEnrollmentsByStudent(Number(studentId));
      return res.status(200).json(enrollmentsList);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async getAllUsers(req, res) {
    try {
      const allUsersList = await userServices.getAllUserScope();
      return res.status(200).json(allUsersList);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = UserController;