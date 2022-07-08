const express = require('express');
const Controller = require('./user.controller');
// const { authenticate } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });

route.get('/', Controller.getUsers);
route.get('/:id', Controller.getUserById);
route.put('/:id', Controller.updateUser);
route.delete('/:id', Controller.deleteUser);

module.exports = route;
