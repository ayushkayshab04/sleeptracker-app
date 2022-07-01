const { mysqlManager } = require('../manager/index');

const register = async ({
  firstName, lastName, email, phoneNo, password,
}) => {
  const conn = await mysqlManager.getConnection();
  const query = `INSERT INTO sleeptracker.users
  (first_name, last_name, email, phone_no, user_type)
  VALUES('${firstName}', '${lastName}', '${email}', '${phoneNo}', '${password}');`;
  await conn.execute(query);
};

module.exports = {
  register,
};
