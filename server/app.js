var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var cors = require('cors');

var app = express();

app.use(
    cors({
      origin: [
        'http://localhost:3000'
      ],
      credentials: true
    })
);
  
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

//Router configuration
const officerDataRouter = require('./routes/officer-data-router');
app.use('/v1/officer', officerDataRouter);

module.exports = app;
