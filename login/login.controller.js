/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const userService = require('./login.service');
const { userValidation } = require('../validation');

const userRegistration = async (req, res) => {
  try {
    const {
      firstName, lastName, email, phoneNo, password,
    } = req.body;
    await userValidation.validateAsync(req.body);
    const user = await userService.register({
      firstName, lastName, email, phoneNo, password,
    });
    res.send(user);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  userRegistration,

};
