require('dotenv').config();

module.exports = {
  TEST_DB: process.env.TEST_DB,
  LOCAL_DB: process.env.LOCAL_DB,
  PRODUCTION_DB: process.env.PRODUCTION_DB,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  BCRYPT: process.env.BCRYPT,
  JWTSECRET: process.env.JWTSECRET,
};
