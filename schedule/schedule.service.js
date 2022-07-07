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

const getScheduleById = async ({ id }) => {
  const conn = await mysqlManager.getConnection();
  const query = `select * from sleeptracker.sleep_schedule where schedule_id = ${id}`;
  const [rows] = await conn.execute(query);
  return rows;
};

const updateSchedule = async ({ id }, {
  userId, startTime, endTime, interuptions,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `UPDATE sleeptracker.sleep_schedule
  SET user_id=${userId}, start_time='${startTime}', end_time='${endTime}', interruption=${interuptions}
  WHERE schedule_id=${id};
  `;
  await conn.execute(query);
  const [rows] = await getScheduleById({ id });
  return rows;
};

const deleteSchedule = async ({ id }) => {
  const conn = await mysqlManager.getConnection();
  const query = `DELETE FROM sleeptracker.sleep_schedule
  WHERE schedule_id=${id};
  `;
  const [rows] = await getScheduleById({ id });
  console.log('=================', rows);
  console.log('===============', query);
  await conn.execute(query);
  return rows;
};
module.exports = {
  addSchedule,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
};
