const Controller = require('./Controller.js');
const EnrollmentServices = require('../services/EnrollmentServices.js');

const enrollmentServices = new EnrollmentServices();

class EnrollmentController extends Controller {
  constructor() {
    super(enrollmentServices);
  }
}

module.exports = EnrollmentController;