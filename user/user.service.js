const { mysqlManager } = require('../manager/index');

const getUsers = async () => {
  const conn = await mysqlManager.getConnection();
  const query = 'select * from sleeptracker.users';
  const [rows] = await conn.execute(query);
  return rows;
};

const getUserById = async (id) => {
  const conn = await mysqlManager.getConnection();
  const query = `select * from sleepTracker.users where user_id = ${id}`;
  const [rows] = await conn.execute(query);
  return rows;
};

module.exports = {
  getUsers,
  getUserById,
};
