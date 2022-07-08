const express = require('express');

const route = express.Router({ mergeParams: true });
const Controller = require('./login.controller');
const { generateAuthToken, authenticate } = require('../middleware/auth');

route.post('/', authenticate, Controller.userRegistration);
route.post('/login', generateAuthToken);

module.exports = route;
