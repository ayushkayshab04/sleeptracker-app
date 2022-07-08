/* eslint-disable max-len */
/* eslint-disable camelcase */
const { mysqlManager } = require('../manager/index');

const toMili = async (startTime, endTime) => {
  const result = (Date.parse(endTime) - Date.parse(startTime));
  console.log('==========', typeof (endTime), typeof (startTime));
  console.log('==========', Date.parse(endTime), Date.parse(startTime));
  return result;
};

const addReport = async ({ user_id, sleep_duration, sleep_quality }) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO sleeptracker.sleep_analysis
  (user_id, sleep_duration, sleep_quality)
  VALUES(${user_id}, '${`${sleep_duration}hrs`}', '${sleep_quality}');
  `;
  console.log('============dataxatda', user_id, sleep_duration, sleep_quality);
  await conn.execute(query);
};

const generateReport = async ({ id }) => {
  const conn = await mysqlManager.getConnection();
  const query = `SELECT user_id, schedule_id, start_time, end_time, interruption
  FROM sleeptracker.sleep_schedule where schedule_id = ${id};
`;
  const [[rows]] = await conn.execute(query);
  console.log('=================', rows);
  const num = await toMili(rows.start_time, rows.end_time) / 3600000;
  const sleep_duration = +num.toFixed(2);

  const { user_id } = rows;
  let sleep_quality;
  if (sleep_duration > 7 < 8) {
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

const getReportById = async ({ id }) => {
  const conn = await mysqlManager.getConnection();
  const query = `select * from sleeptracker.sleep_analysis where report_id = ${id}`;
  const [rows] = await conn.execute(query);
  return rows;
};

module.exports = {
  generateReport,
  getReportById,
};
