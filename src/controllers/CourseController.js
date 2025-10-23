const { Op } = require('sequelize');
const Controller = require('./Controller.js');
const CourseServices = require('../services/CourseServices.js');

const courseServices = new CourseServices();

class CourseController extends Controller {
  constructor() {
    super(courseServices);
  }

  async getCourses(req, res) {
    const { start_date, end_date } = req.query;
    const where = {};

    // se existirem os paramêtros, criar a propriedade {}.
    start_date || end_date ? where.start_date = {} : null;

    // se existir "start_date", adiciona a prop "gte" com o valor.
    start_date ? where.start_date[Op.gte] = start_date : null;

    // se existir "end_date", adiciona a prop "lte" com o valor.
    end_date ? where.start_date[Op.lte] = end_date : null;

    try {
      const courseList = await courseServices.getAllRegisters(where);
      return res.status(200).json(courseList);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  }
}

module.exports = CourseController;