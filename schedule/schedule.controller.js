const { idValidation, scheduleValidation } = require('../validation');
const scheduleService = require('./schedule.service');

const addSchedule = async (req, res) => {
  try {
    const {
      userId, startTime, endTime, interuptions,
    } = req.body;
    console.log('=============', req.body);
    await scheduleValidation.validateAsync(req.body);
    const schedule = await scheduleService.addSchedule({
      userId, startTime, endTime, interuptions,
    });
    res.send(schedule);
  } catch (error) {
    throw new Error(error);
  }
};

const getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    await idValidation.validateAsync({ id });
    const user = await scheduleService.getScheduleById({ id });
    res.send(user);
  } catch (error) {
    throw new Error(error);
  }
};

const updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      userId, startTime, endTime, interuptions,
    } = req.body;
    await idValidation.validateAsync({ id });
    await scheduleValidation.validateAsync(req.body);
    const updatedData = await scheduleService.updateSchedule({ id }, {
      userId, startTime, endTime, interuptions,
    });
    res.send(updatedData);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    await idValidation.validateAsync({ id });
    const deletedData = await scheduleService.deleteSchedule({ id });
    res.send(deletedData);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addSchedule,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
};
