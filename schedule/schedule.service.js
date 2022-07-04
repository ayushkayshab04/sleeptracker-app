const { mysqlManager } = require('../manager/index');

const addSchedule = async ({
  userId, startTime, endTime, interuptions,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO sleeptracker.sleep_schedule
(user_id, start_time, end_time, interruption)
VALUES(${userId}, '${startTime}', '${endTime}', ${interuptions});
`;
  const [rows] = await conn.execute(query);
  return rows;
};

const getScheduleById = async ({ userId }) => {
  const conn = await mysqlManager.getConnection();
  const query = `slect * from sleeptracker.sleep_schedule where user_id = ${userId}`;
};

module.exports = {
  addSchedule,
  getScheduleById
};
