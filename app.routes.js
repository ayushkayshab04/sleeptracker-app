const express = require('express');
const { loginRoute } = require('./login');
const { userRoute } = require('./user');

const route = express.Router({ mergeParams: true });
route.use('/Register', loginRoute);
route.use('/user', userRoute);

module.exports = route;
