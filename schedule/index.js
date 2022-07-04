const scheduleService = require('./schedule.service');
const scheduleController = require('./schedule.controller');
const scheduleRoute = require('./schedule.routes');

module.exports = {
  scheduleController,
  scheduleRoute,
  scheduleService,
};
