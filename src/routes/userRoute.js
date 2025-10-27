const { Router } = require('express');
const UserController = require('../controllers/UserController.js');
const EnrollmentController = require('../controllers/EnrollmentController.js');

const userController = new UserController();
const enrollmentController = new EnrollmentController();

const router = Router();

router
  .get('/users', (req, res) => userController.getAll(req, res))
  .get('/users/all', (req, res) => userController.getAllUsers(req, res))
  .get('/users/:id', (req, res) => userController.getById(req, res))
  .post('/users', (req, res) => userController.createNew(req, res))
  .put('/users/:id', (req, res) => userController.update(req, res))
  .delete('/users/:id', (req, res) => userController.delete(req, res))
  .get('/users/:student_id/enrollments', (req, res) => userController.getActiveEnrollments(req, res))
  .get('/users/:student_id/enrollments/all', (req, res) => userController.getAllEnrollments(req, res))
  .get('/users/:student_id/enrollments/confirmed', (req, res) => enrollmentController.getEnrollmentsByStudent(req, res))
  .get('/users/enrollments/crowded', (req, res) => enrollmentController.getCrowdedCourses(req, res))
  .get('/users/:student_id/enrollments/:id', (req, res) => enrollmentController.getOne(req, res))
  .post('/users/:student_id/enrollments', (req, res) => enrollmentController.createNew(req, res))
  .put('/users/:student_id/enrollments/:id', (req, res) => enrollmentController.update(req, res))
  .delete('/users/:student_id/enrollments/:id', (req, res) => enrollmentController.delete(req, res));

module.exports = router;