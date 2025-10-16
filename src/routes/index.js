const express = require('express');
const users = require('./userRoute.js');
const categories = require('./categoryRoute.js');
const courses = require('./courseRoute.js');

const routes = (app) => {
  app.use(
    express.json(),
    users,
    categories,
    courses
  );
};

module.exports = routes;