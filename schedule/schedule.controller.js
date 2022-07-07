const scheduleService = require('./schedule.service');

const addSchedule = async (req, res) => {
  try {
    const {
      userId, startTime, endTime, interuptions,
    } = req.body;
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
