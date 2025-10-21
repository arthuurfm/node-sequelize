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
  .get('/users/:studentId/enrollments', (req, res) => userController.getEnrollments(req, res))
  .post('/users/:studentId/enrollments', (req, res) => enrollmentController.createNew(req, res));

module.exports = router;