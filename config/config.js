require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "devkikinian",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "devkikinian_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER_PROD,
    password: process.env.DB_PASS_PROD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST_PROD,
    dialect: "mysql",
  },
};
