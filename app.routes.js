const express = require('express');
const { loginRoute } = require('./login');
const { userRoute } = require('./user');
const { scheduleRoute } = require('./schedule');
const { analysisRoute } = require('./SleepAnalysis');

const route = express.Router({ mergeParams: true });
route.use('/Register', loginRoute);
route.use('/user', userRoute);
route.use('/schedule', scheduleRoute);
route.use('/analysis', analysisRoute);

module.exports = route;
