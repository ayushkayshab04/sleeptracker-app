const express = require('express');
const Controller = require('./schedule.controller');
// const { authenticate } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });

route.get('/:id', Controller.getScheduleById);
route.post('/', Controller.addSchedule);
route.put('/:id', Controller.updateSchedule);
route.delete('/:id', Controller.deleteSchedule);
module.exports = route;
