const express = require('express');
const Controller = require('./schedule.controller');
const { authenticate } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });

route.get('/:id', authenticate, Controller.getScheduleById);
route.post('/', authenticate, Controller.addSchedule);
route.put('/:id', authenticate, Controller.updateSchedule);
route.delete('/:id', authenticate, Controller.deleteSchedule);

module.exports = route;
