const express = require('express');
const Controller = require('./analysis.controller');
// const { authenticate } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });
route.post('/:id', Controller.generateReport);

module.exports = route;
