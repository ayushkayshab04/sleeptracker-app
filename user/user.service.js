const { mysqlManager } = require('../manager/index');

const getUsers = async () => {
  const conn = await mysqlManager.getConnection();
  const query = 'select * from sleeptracker.users';
  const [rows] = await conn.execute(query);
  return rows;
};

const getUserById = async ({ id }) => {
  const conn = await mysqlManager.getConnection();
  const query = `select * from sleepTracker.users where user_id = ${id}`;
  const [rows] = await conn.execute(query);
  return rows;
};

const updateUser = async ({ id }, {
  firstName, lastName, email, phoneNo, password,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `UPDATE sleeptracker.users
  SET first_name='${firstName}', last_name='${lastName}', email='${email}', phone_no='${phoneNo}', password='${password}'
  WHERE user_id=${id};
  `;
  await conn.execute(query);
  const updatedUser = await getUserById(id);
  return updatedUser;
};

const deleteUser = async ({ id }) => {
  const conn = await mysqlManager.getConnection();
  const query = `DELETE FROM sleeptracker.users
  WHERE user_id=${id};
  `;
  await conn.execute(query);
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
