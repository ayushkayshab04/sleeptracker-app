/* eslint-disable camelcase */
const { mysqlManager } = require('../manager/index');

const toMili = async (startTime, endTime) => {
  const result = (Date.parse(endTime) - Date.parse(startTime));
  return result;
};

const addReport = async ({ user_id, sleep_duration, sleep_quality }) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO sleeptracker.sleep_analysis
  (user_id, sleep_duration, sleep_quality)
  VALUES(${user_id}, '${`${sleep_duration}hrs`}', '${sleep_quality}');
  `;
  console.log('============', user_id, sleep_duration, sleep_quality);
};

const generateReport = async ({ scheduleId }) => {
  const conn = await mysqlManager.getConnection();
  const query = `SELECT user_id, schedule_id, start_time, end_time, interruption
  FROM sleeptracker.sleep_schedule where schedule_id = ${scheduleId};
`;
  const [[rows]] = await conn.execute(query);
  console.log('=================', rows);
  const sleep_duration = await toMili(rows.start_time, rows.end_time);
  const { user_id } = rows;
  let sleep_quality;
  if (sleep_duration >= 8 >= 7) {
    sleep_quality = 'Great';
    await addReport({ user_id, sleep_duration, sleep_quality });
  } else if (sleep_quality < 6) {
    sleep_quality = 'Poor';
    await addReport({ user_id, sleep_duration, sleep_quality });
  } else {
    sleep_quality = 'Over Sleeping';
    await addReport({ user_id, sleep_duration, sleep_quality });
  }
};

module.exports = {
  generateReport,
};
