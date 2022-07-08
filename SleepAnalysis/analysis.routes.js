const express = require('express');
const { authenticate } = require('../middleware/auth');
const Controller = require('./analysis.controller');

const route = express.Router({ mergeParams: true });

route.get('/:id', authenticate, Controller.getReportById);
route.post('/:id', authenticate, Controller.generateReport);

module.exports = route;
