const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const Logger = require('../config/logger');
const morgan = require('morgan');
// const compression = require("compression");
const authRoute = require ('./user-routes')

const app = express();

global.logger = Logger.createLogger({ label: 'Instagram Clone' });


// // Compress the HTTP response sent back to a client
// app.use(compression()); //Compress all routes

app.use(helmet());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined', { stream: logger.stream }));

app.use('/auth', authRoute);
app.get('/', (req, res) => {
  res.send('Instagram Clone');
});

module.exports = app;
