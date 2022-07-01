/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const { secret_key } = require('../config/index');
const { mysqlManager } = require('../manager/index');

const authenticate = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied');
  try {
    const decode = jwt.verify(token, secret_key);
    const conn = await mysqlManager.getConnection();
    const query = `select email from sleeptracker.users where email = '${decode.email}'`;
    const [[rows]] = await conn.execute(query);
    if (rows.email)next();
  } catch (error) {
    throw new Error(error);
  }
};

const userExist = async ({ email, password }) => {
  try {
    const conn = await mysqlManager.getConnection();
    const query = `select email, password from sleeptracker.users where email = '${email}'`;
    const [[rows]] = await conn.execute(query);
    if ((rows.email && rows.password) === (email && password)) { return true; }
  } catch (error) {
    throw new Error(error);
  }
};

const generateAuthToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await userExist({ email, password });
    if (result === true) {
      const token = await jwt.sign({ email, password }, secret_key);
      res.send(token);
      next();
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  authenticate,
  generateAuthToken,
};
