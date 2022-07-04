const scheduleService = require('./schedule.service');

const addSchedule = async (req, res) => {
  const {
    userId, startTime, endTime, interuptions,
  } = req.body;
  const schedule = await scheduleService.addSchedule({
    userId, startTime, endTime, interuptions,
  });
  res.send(schedule);
};

module.exports = {
  addSchedule,
};
