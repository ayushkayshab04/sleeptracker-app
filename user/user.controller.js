/* eslint-disable space-in-parens */
const userService = require('./user.service');
const { userValidation, idValidation } = require('../validation');

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.send(users);
  } catch (error) {
    throw new Error(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await idValidation.validateAsync(id);
    const user = await userService.getUserById({ id });
    res.send(user);
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstName, lastName, email, phoneNo, password,
    } = req.body;
    await idValidation.validateAsync(id);
    await userValidation.validateAsync(req.body);
    const updatedUser = await userService.updateUser( { id }, {
      firstName, lastName, email, phoneNo, password,
    } );
    res.send(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await idValidation.validateAsync(id);
    await userService.deleteUser({ id });
    res.send('User Deleted sucessFully');
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
