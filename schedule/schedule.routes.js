const express = require('express');
const Controller = require('./schedule.controller');
// const { authenticate } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });
route.post('/', Controller.addSchedule);

module.exports = route;
