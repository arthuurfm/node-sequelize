const { Router } = require('express');
const CourseController = require('../controllers/CourseController.js');

const courseController = new CourseController();

const router = Router();

router
  .get('/courses', (req, res) => courseController.getCourses(req, res))
  .get('/courses/:id', (req, res) => courseController.getById(req, res))
  .post('/courses', (req, res) => courseController.createNew(req, res))
  .put('/courses/:id', (req, res) => courseController.update(req, res))
  .delete('/courses/:id', (req, res) => courseController.delete(req, res));

module.exports = router;