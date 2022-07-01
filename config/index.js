const dotenv = require('dotenv');

dotenv.config();

const environment = process.env.ENVIRONMENT;
module.exports = {
  mysql: {
    environment,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT || 3306,
  },
  secret_key: process.env.JWT_SECRET_KEY,

};
