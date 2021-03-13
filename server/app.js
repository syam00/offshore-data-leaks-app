var createError = require('http-errors');
var express = require('express');
var path = require('path');
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

//Router configuration

module.exports = app;
