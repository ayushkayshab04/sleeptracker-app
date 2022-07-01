const mysql = require('../libs/manager');

const config = require('../config');

const mysqlManager = mysql(config.mysql);

module.exports = {
  mysqlManager,
};
