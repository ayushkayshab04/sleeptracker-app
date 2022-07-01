const express = require('express');

const route = express.Router({ mergeParams: true });
const Controller = require('./login.controller');
const { generateAuthToken } = require('../middleware/auth');

route.post('/', Controller.userRegistration);
route.post('/login', generateAuthToken);

module.exports = route;
