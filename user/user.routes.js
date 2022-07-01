const express = require('express');
const Controller = require('./user.controller');
const { authenticate } = require('../middleware/auth');

const route = express.Router({ mergeParams: true });

route.get('/', authenticate, Controller.getUsers);
route.get('/:id', Controller.getUserById);
route.post('/:id', Controller.updateUser);

module.exports = route;
