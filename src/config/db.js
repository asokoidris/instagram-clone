const mongoose = require('mongoose');
const { TEST_DB, PRODUCTION_DB, LOCAL_DB } = require('./keys');

let mongoUrl = null;

const mongoConnection = () => {
  if (process.env.NODE_ENV === 'development') {
    mongoUrl = LOCAL_DB || 'mongodb://localhost:27017/reddit-clone';
  } else if (process.env.NODE_ENV === 'test') {
    mongoUrl = TEST_DB;
  } else {
    mongoUrl = PRODUCTION_DB;
  }

  return mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = mongoConnection;
