const userService = require('./user.service');

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
    const user = userService.getUserById(id);
    res.send(user);
  } catch (error) {
    throw new Error(error);
  }
};

const updateUser = async (req, res) => {
try {
  
} catch (error) {
  
}
};
module.exports = {
  getUsers,
  getUserById,
};
