const Controller = require('./Controller.js');
const EnrollmentServices = require('../services/EnrollmentServices.js');

const enrollmentServices = new EnrollmentServices();

class EnrollmentController extends Controller {
  constructor() {
    super(enrollmentServices);
  }

  async getEnrollmentsByStudent(req, res) {
    const { student_id } = req.params;
    try {
      const enrollmentsByStudentList = await enrollmentServices.getAndCountRegisters({
        student_id: Number(student_id),
        status: 'enrolled'
      });
      return res.status(200).json(enrollmentsByStudentList);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }

  async getCrowdedCourses(req, res) {
    const courseCapacity = 2;
    try {
      const crowdedCourses = await enrollmentServices.getAndCountRegisters({
        status: 'enrolled'
      });
      return res.status(200).json(crowdedCourses);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = EnrollmentController;