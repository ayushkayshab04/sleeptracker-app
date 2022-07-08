const express = require('express');
const { authenticate } = require('../middleware/auth');
const Controller = require('./user.controller');

const route = express.Router({ mergeParams: true });

route.get('/', authenticate, Controller.getUsers);
route.get('/:id', authenticate, Controller.getUserById);
route.put('/:id', authenticate, Controller.updateUser);
route.delete('/:id', authenticate, Controller.deleteUser);

module.exports = route;
