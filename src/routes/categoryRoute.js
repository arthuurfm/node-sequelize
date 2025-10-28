const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController.js');

const categoryController = new CategoryController();

const router = Router();

router
  .get('/categories', (req, res) => categoryController.getAll(req, res))
  .get('/categories/:id', (req, res) => categoryController.getOne(req, res))
  .post('/categories', (req, res) => categoryController.createNew(req, res))
  .put('/categories/:id', (req, res) => categoryController.update(req, res))
  .delete('/categories/:id', (req, res) => categoryController.delete(req, res));

module.exports = router;