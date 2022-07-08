const { mysqlManager } = require('../manager/index');

const getUser = async ({ email }) => {
  const conn = await mysqlManager.getConnection();
  const query = `select * from sleeptracker.users where email = '${email}'`;
  const [rows] = await conn.execute(query);
  return rows;
};

const register = async ({
  firstName, lastName, email, phoneNo, password,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO sleeptracker.users
  (first_name, last_name, email, phone_no, password)
  VALUES('${firstName}', '${lastName}', '${email}', '${phoneNo}', '${password}')`;

  await conn.execute(query);

  const addedUser = await getUser({ email });
  return addedUser;
};

module.exports = {
  register,
};
